const { Recipes } = require("../db/models");
const { Users } = require("../db/models");

Users.create(
  {
    firstname: "adi",
    lastname: "faibish",
    email: "adidas2712@gmail.com",
    password: "12345",
    recipes: [
      {
        recipeName: "cake",
        description: "cake",
        cookingTime: "1:00",
        instructions: "buy cake",
      },
    ],
  },
  {
    include: [Recipes],
  }
);

Recipes.create;
