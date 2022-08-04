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

  getAllRecipes = async () => {
    const recipes = await Recipe.findAll({
      include: { model: Ingredient },
    });
    return recipes;
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

  getRecipeByCategory = async (category) => {
    const recipe = await Category.findAll({
      include: [{ model: Recipe, include: { model: Ingredient } }],
      where: { categoryName: category },
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
      console.log(e);
      return false;
    }
  };
}

module.exports = new RecipeManager();
