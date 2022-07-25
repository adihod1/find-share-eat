const { User, Recipe } = require("../db/models");

class itemManager {
  createItems = async () => {
    // console.log(User);
    User.create(
      {
        firstName: "heeyy",
        lastName: "heeyy",
        userName: "hewyyeye",
        email: "heyewyey@gmail.com",
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

  createRecipe = async () => {
    recipe.create({
      recipeName: "cake",
      description: "cake",
      cookingTime: "1:00",
      instructions: "buy cake",
    });
  };
}

module.exports = itemManager;
