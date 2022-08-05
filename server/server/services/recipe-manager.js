const {
  User,
  Recipe,
  Ingredient,
  UsersRecipes,
  Category,
  sequelize,
} = require("../db/models");

const Op = require("Sequelize").Op;

class RecipeManager {
  addRecipe = async (id, data) => {
    const recipe = await Recipe.create(
      {
        ...data.recipe,
        Ingredients: data.ingredients,
      },
      { include: [Ingredient] }
    );
    const userRow = await User.findByPk(id);
    await recipe.addUser(userRow, { through: UsersRecipes });
  };

  getAllRecipes = async (filters) => {
    const options = {};

    //sort
    const sortOrder = filters.sort == "ASC" ? filters.sort : "DESC";
    options.order = [["recipeName", sortOrder ? sortOrder : "ASC"]];

    //search
    if (filters.search) {
      options.where = {
        [Op.and]: [{ recipeName: { [Op.like]: `%${filters.search}%` } }],
      };
    }

    if (filters.ingredients?.length) {
      options.where = options.where || {};
      options.where[Op.or] = options.where[Op.or] || [];
      options.where[Op.or].push(
        ...(await _getUniqueIngredients(
          filters.ingredients,
          this.getRecipeByIngredients.bind(this),
          "ingredientName"
        ))
      );
    }

    if (filters.categories?.length) {
      options.where = options.where || {};
      options.where[Op.or] = options.where[Op.or] || [];
      options.where[Op.or].push(
        ...(await _getUniqueCategories(
          filters.categories,
          this.getRecipeByCategories.bind(this),
          "categoryName"
        ))
      );
    }

    try {
      const recipes = await Recipe.findAll({
        include: [{ model: Ingredient }, { model: Category }],
        ...options,
      });
      return recipes;
    } catch (e) {
      console.error(e);
    }
  };

  getRecipeByUser = async (id) => {
    const recipes = await User.findByPk(id, {
      include: [{ model: Recipe, include: { model: Ingredient } }],
    });
    return recipes;
  };

  getChosenRecipe = async (id) => {
    const recipe = await Recipe.findByPk(id, {
      include: { model: Ingredient },
    });
    return recipe;
  };

  getRecipeByCategories = async (category) => {
    const recipe = await Category.findAll({
      include: [{ model: Recipe, include: { model: Ingredient } }],
      where: {
        [Op.or]: category,
      },
    });
    return recipe;
  };

  getRecipeByIngredients = async (ingredients) => {
    const recipe = await Ingredient.findAll({
      include: [{ model: Recipe, include: { model: Ingredient } }],
      where: {
        [Op.or]: ingredients,
      },
    });
    return recipe;
  };

  getRecipeByName = async (search) => {
    const recipe = await Recipe.findAll({
      include: [{ model: Ingredient }],
      where: { [Op.and]: [{ recipeName: { [Op.like]: `%${search}%` } }] },
    });
    return recipe;
  };

  editRecipe = async (id, data) => {
    await Recipe.update(data.recipe, { where: { id: id } });
  };

  deleteRecipe = async (id) => {
    try {
      const result = await sequelize.transaction(async (t) => {
        await UsersRecipes.destroy(
          {
            where: { recipeId: id },
          },
          { transaction: t }
        );
        await Recipe.destroy(
          {
            where: { id: id },
          },
          { transaction: t }
        );
        await Ingredient.destroy(
          {
            where: { recipeId: id },
          },
          { transaction: t }
        );
      });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };
}

async function _getUniqueCategories(arr, handler, prop) {
  const categories = await handler(arr);
  const relevantIds = new Set();
  categories.forEach((cat) => {
    const recipesIds = cat.dataValues.Recipes.map((r) => r.dataValues.id);
    recipesIds.forEach((id) => relevantIds.add(id));
  });
  return [...relevantIds].map((id) => ({ id }));
}

async function _getUniqueIngredients(arr, handler, prop) {
  const recipes = await handler(arr);
  const relevantIds = new Set();
  const sizeMap = new Map();
  recipes.forEach((recipe) => {
    const recipeId = recipe.dataValues.recipeId;
    const value = recipe.dataValues[prop];
    const currentArr = sizeMap.get(recipeId);

    if (currentArr) {
      currentArr.push(value);
    } else {
      sizeMap.set(recipeId, [value]);
    }

    if (sizeMap.get(recipeId).length >= arr.length) {
      relevantIds.add(recipeId);
    }
  });
  return [...relevantIds].map((id) => ({ id }));
}

module.exports = new RecipeManager();
