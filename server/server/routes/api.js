const express = require("express");
const router = express.Router();
const itemManager = require("../services/item-manager");

router.post("/add-user", async (req, res) => {
  res.status(200).json(await new itemManager().addUser(req.body));
});

router.post("/add-recipe", async (req, res) => {
  res
    .status(200)
    .json(await new itemManager().addRecipe(req.body.id, req.body));
});

router.get("/recipes-all", async (_, res) => {
  res.status(200).json(await new itemManager().getAllRecipes());
});

router.get("/recipe-by-user", async (req, res) => {
  res.status(200).json(await new itemManager().getRecipeByUser(req.body.id));
});

router.get("/chosen-recipe", async (req, res) => {
  res.status(200).json(await new itemManager().getChosenRecipe(req.body.id));
});

router.get("/recipes-by-category", async (_, res) => {
  res
    .status(200)
    .json(await new itemManager().getRecipeByCategory(req.body.category));
});

router.get("/recipes-by-ingredients", async (req, res) => {
  res
    .status(200)
    .json(await new itemManager().getRecipeByIngredients(req.body.ingredients));
});

router.get("/recipes-by-name", async (req, res) => {
  res
    .status(200)
    .json(await new itemManager().getRecipeByName(req.body.CategoryName));
});

router.get("/get-user", async (req, res) => {
  res.status(200).json(await new itemManager().getUser(req.body.id));
});

router.get("/get-categories", async (_, res) => {
  res.status(200).json(await new itemManager().getCategories());
});

router.put("/edit-recipe", async (req, res) => {
  res
    .status(200)
    .json(await new itemManager().editRecipe(req.body.id, req.body));
});

router.delete("/delete-recipe", async (req, res) => {
  res.status(200).json(await new itemManager().deleteRecipe(req.body.id));
});

router.delete("/delete-ingredient", async (req, res) => {
  res.status(200).json(await new itemManager().deleteIngredient(req.body.id));
});

module.exports = router;
