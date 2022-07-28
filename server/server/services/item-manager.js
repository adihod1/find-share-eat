const {
  User,
  Recipe,
  Ingredient,
  UsersRecipes,
  Category,
} = require("../db/models");

const Op = require("Sequelize").Op;

class itemManager {
  createItems = async () => {
    User.create(
      {
        firstName: "heeyy",
        lastName: "heeyy",
        userName: "hewtyyeye",
        email: "heyewytey@gmail.com",
        password: "12345",
        Recipes: [
          {
            recipeName: "cake",
            description: "cake",
            cookingTime: "1:00",
            instructions: "buy cake",
          },
        ],
      },
      {
        include: [Recipe],
      }
    );
  };

  addRecipe = async () => {
    Recipe.create(
      {
        recipeName: "cakke",
        description: "cakke",
        cookingTime: "1:00",
        instructions: "buy cake",
        Ingredients: [
          {
            ingredientName: "sugar",
            amount: 300,
            measurement: "1 cup",
          },
          {
            ingredientName: "salt",
            amount: 300,
            measurement: "1 cup",
          },
          {
            ingredientName: "water",
            amount: 300,
            measurement: "1 cup",
          },
        ],
      },
      {
        include: [Ingredient],
      }
    );
  };
  // createRecipe = async () => {
  //   Recipe.create({
  //     recipeName: "cake",
  //     description: "cake",
  //     cookingTime: "1:00",
  //     instructions: "buy cake",
  //   });
  // };
  // createIngredients = async () => {
  //   Ingredient.create({
  //     ingredientName: "sugar",
  //     amount: 300,
  //     measurement: "1 cup",
  //     recipeId: "1",
  //   });
  // };

  addUser = async () => {
    await User.create({
      firstName: "adiii",
      lastName: "hoddd",
      userName: "adihoddd",
      email: "adihoddd@gmail.com",
      password: "125345",
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

  editRecipe = async (id) => {
    await Recipe.update(
      { recipeName: "chocolate cake" },
      { where: { id: id } }
    );
  };

  editIngredient = async (id) => {
    await Ingredient.update(
      { ingredientName: "flower" },
      { where: { id: id } }
    );
  };

  deleteRecipe = async (id) => {
    await Recipe.destroy({
      where: {
        id: id,
      },
      include: [{ model: Ingredient, include: { where: { recipeId: id } } }],
    });
  };
}

module.exports = itemManager;
