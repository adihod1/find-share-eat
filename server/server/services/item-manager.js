const {
  User,
  Recipe,
  Ingredient,
  UsersRecipes,
  Category,
  sequelize,
} = require("../db/models");

const Op = require("Sequelize").Op;

class itemManager {
  addRecipe = async (id, options) => {
    const values = this._sanitizeRecipe(options.recipe);
    await Recipe.create(
      {
        ...values,
        Ingredients: options.ingredients,
        Users: [{ userId: id }],
      },
      {
        include: [Ingredient, User],
      }
    );
  };

  // {userId: integer
  //   recipe: {}
  //   ingredients: [{}]
  // }
  // await Recipe.create(
  //   {
  //     recipeName: "fruit cake",
  //     description: "cake",
  //     cookingTime: "2:00",
  //     instructions: "mix all",
  //     Ingredients: [
  //       {
  //         ingredientName: "sugar",
  //         amount: 300,
  //         measurement: "1 cup",
  //       },
  //       {
  //         ingredientName: "salt",
  //         amount: 300,
  //         measurement: "1 cup",
  //       },
  //       {
  //         ingredientName: "water",
  //         amount: 300,
  //         measurement: "1 cup",
  //       },
  //     ],
  //     Users: [{ userId: id }],
  //   },
  //   {
  //     include: [Ingredient, User],
  //   }
  // );

  addUser = async (options) => {
    await User.create({
      ...options,
    });
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

  getRecipeByIngredients = async (ingredient) => {
    const recipe = await Recipe.findAll({
      include: [{ model: Ingredient, include: { model: Ingredient } }],
      where: { ingredientName: ingredient },
    });
    return recipe;
  };

  getRecipeByRecipeName = async (ingredients) => {
    const ingredientsAll = ingredients.map((ingredient) => {
      return { ingredientName: ingredient };
    });
    const recipe = await Ingredient.findAll({
      include: [{ model: Recipe, include: { model: Ingredient } }],
      where: {
        [Op.or]: ingredientsAll,
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

  getUser = async (id) => {
    return await User.findByPk(id);
  };

  getCategories = async () => {
    return await Category.findAll();
  };

  _sanitizeRecipe = (data) => {
    const values = {};
    const PUBLIC_FIELDS = [
      "recipeName",
      "description",
      "instructions",
      "image",
      "cookingTime",
      "categoryId",
      "ingredients",
    ];

    PUBLIC_FIELDS.forEach((field) => {
      if (data[field]) {
        values[field] = data[field];
      }
    });
    return values;
  };

  editRecipe = async (id, options) => {
    // const existsValues = [];
    // values.map(value => {if value existsValues.push(value)})
    // console.log("recipe keys", Recipe.Recipe);
    const values = this._sanitizeRecipe(options);
    await Recipe.update({ ...values }, { where: { id: id } });
  };

  editIngredient = async (id, option) => {
    await Ingredient.update(
      { ingredientName: "flower" },
      { where: { id: id } }
    );
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
            where: {
              id: id,
            },
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

  deleteIngredient = async (id) => {
    await Ingredient.destroy({ where: { id: id } });
  };
}

module.exports = itemManager;
