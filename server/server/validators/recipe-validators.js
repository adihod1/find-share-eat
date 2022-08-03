const { validateSchema } = require("../../utils/validatos-utils");

const recipeValidator = validateSchema({
  userId: {
    isInt: true,
    in: ["params"],
  },
  "recipe.recipeName": {
    isString: true,
    errorMessage: `Missing/Bad recipe.recipeName`,
    in: ["body"],
  },
  "recipe.description": {
    isString: true,
    errorMessage: `Missing/Bad recipe.description`,
    in: ["body"],
  },
  "recipe.cookingTime": {
    isString: true,
    errorMessage: `Missing/Bad recipe.cookingTime`,
    in: ["body"],
  },
  "recipe.instructions": {
    isString: true,
    errorMessage: `Missing/Bad recipe.instructions`,
    in: ["body"],
  },
  "recipe.image": {
    isString: true,
    errorMessage: `Missing/Bad recipe.image`,
    optional: true,
    in: ["body"],
  },
  "recipe.categoryId": {
    isInt: true,
    errorMessage: `Missing/Bad recipe.categoryId`,
    in: ["body"],
  },
  ingredients: {
    isArray: true,
    errorMessage: `Missing/Bad ingredients`,
    in: ["body"],
  },
});

const recipeIdValidator = validateSchema({
  recipeId: {
    isInt: true,
    in: ["params"],
  },
});

const recipeNameValidator = validateSchema({
  recipeName: {
    isString: true,
    in: ["params"],
  },
});

const editRecipeValidator = validateSchema({
  recipeId: {
    isInt: true,
    in: ["params"],
  },
  "recipe.recipeName": {
    isString: true,
    errorMessage: `Missing/Bad recipe.recipeName`,
    in: ["body"],
    optional: true,
  },
  "recipe.description": {
    isString: true,
    errorMessage: `Missing/Bad recipe.description`,
    in: ["body"],
    optional: true,
  },
  "recipe.cookingTime": {
    isString: true,
    errorMessage: `Missing/Bad recipe.cookingTime`,
    in: ["body"],
    optional: true,
  },
  "recipe.instructions": {
    isString: true,
    errorMessage: `Missing/Bad recipe.instructions`,
    in: ["body"],
    optional: true,
  },
  "recipe.image": {
    isString: true,
    errorMessage: `Missing/Bad recipe.image`,
    in: ["body"],
    optional: true,
  },
  "recipe.categoryId": {
    isInt: true,
    errorMessage: `Missing/Bad recipe.categoryId`,
    in: ["body"],
    optional: true,
  },
  ingredients: {
    isArray: true,
    errorMessage: `Missing/Bad ingredients`,
    in: ["body"],
    optional: true,
  },
});

module.exports = {
  recipeValidator,
  recipeIdValidator,
  recipeNameValidator,
  editRecipeValidator,
};
