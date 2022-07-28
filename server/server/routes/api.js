const express = require("express");
const router = express.Router();
const itemManager = require("../services/item-manager");

router.post("/add-user", async (_, res) => {
  res.status(200).json(await new itemManager().addUser());
});

router.post("/add-recipe", async (_, res) => {
  res.status(200).json(await new itemManager().addRecipe());
});

router.get("/recipes-all", async (_, res) => {
  res.status(200).json(await new itemManager().getAllRecipes());
});

router.get("/ingredients-by-recipe/:id", async (_, res) => {
  res.status(200).json(await new itemManager().getIngredientsByRecipe(3));
});

router.get("/recipe-by-user", async (_, res) => {
  res.status(200).json(await new itemManager().getRecipeByUser(1));
});

router.get("/chosen-recipe", async (_, res) => {
  res.status(200).json(await new itemManager().getChosenRecipe(1));
});

router.get("/recipes-by-category", async (_, res) => {
  res.status(200).json(await new itemManager().getRecipeByCategory("Dessert"));
});

router.get("/recipes-by-ingredient", async (_, res) => {
  res
    .status(200)
    .json(await new itemManager().getRecipeByIngredients(["salt", "sugar"]));
});

router.get("/recipes-by-name", async (_, res) => {
  res.status(200).json(await new itemManager().getRecipeByName("wo"));
});

router.get("/get-user", async (_, res) => {
  res.status(200).json(await new itemManager().getUser(1));
});

router.get("/get-categories", async (_, res) => {
  res.status(200).json(await new itemManager().getCategories());
});

router.get("/ingredients", async (_, res) => {
  res.status(200).json(await new itemManager().createIngredients());
});

router.put("/edit-recipe", async (_, res) => {
  res.status(200).json(await new itemManager().editRecipe(9));
});

router.put("/edit-ingredient", async (_, res) => {
  res.status(200).json(await new itemManager().editIngredient(2));
});

router.delete("/delete-recipe", async (_, res) => {
  res.status(200).json(await new itemManager().deleteRecipe(6));
});

module.exports = router;
