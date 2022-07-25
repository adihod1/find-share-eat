const express = require("express");
const router = express.Router();
const itemManager = require("../services/item-manager");

router.get("/items", async (_, res) => {
  res.status(200).json(await new itemManager().createItems());
});

router.get("/recipes", async (_, res) => {
  res.status(200).json(await new itemManager().createRecipe());
});

module.exports = router;
