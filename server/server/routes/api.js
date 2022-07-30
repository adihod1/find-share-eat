const express = require('express');
const UserRouter = require("./api/user");
const RecipeRouter = require("./api/recipe");
const IngredientRouter = require("./api/ingredient");
const CategoryRouter = require("./api/category");
const router = express.Router();

router.use('/user', UserRouter);
router.use('/recipe', RecipeRouter);
router.use('/ingredient', IngredientRouter);
router.use('/category', CategoryRouter);

<<<<<<< HEAD
router.get("/get-categories", async (_, res) => {
  res.status(200).json(await new itemManager().getCategories());
});

router.get("/recipes", async (_, res) => {
  res.status(200).json(await new itemManager().createRecipe());
});
=======
>>>>>>> main

module.exports = router;