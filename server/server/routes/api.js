const express = require("express");
const router = express.Router();
const itemManager = require("../services/item-manager");

router.get("/items", async (_, res) => {
  res.status(200).json(await new itemManager().createItems());
});

router.get("/get-categories", async (_, res) => {
  res.status(200).json(await new itemManager().getCategories());
});

router.get("/recipes", async (_, res) => {
  res.status(200).json(await new itemManager().createRecipe());
});

router.get("/ingredients", async (_, res) => {
  res.status(200).json(await new itemManager().createIngredients());
});

module.exports = router;
