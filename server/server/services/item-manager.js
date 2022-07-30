const { User, Recipe, Ingredient, Category } = require("../db/models");

class itemManager {
  // createItems = async () => {
  //   User.create(
  //     {
  //       firstName: "heeyy",
  //       lastName: "heeyy",
  //       userName: "hewyyeye",
  //       email: "heyewyey@gmail.com",
  //       password: "12345",
  //       Recipes: [
  //         {
  //           recipeName: "cake",
  //           description: "cake",
  //           cookingTime: "1:00",
  //           instructions: "buy cake",
  //         },
  //       ],
  //     },
  //     {
  //       include: [Recipe],
  //     }
  //   );
  // };
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
  // getCategories = async () => {
  //   const categories = await Category.findAll({
  //     raw: true,
  //   });
  //   return categories.map((category) => {
  //     return {
  //       id: category.id,
  //       categoryName: category.categoryName,
  //     };
  //   });
  // };
  getCategories = async () => {
    return await Category.findAll();
  };
}

module.exports = itemManager;
