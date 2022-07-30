const express = require('express');
const {errWrapper} = require("../../../utils/api-utils");
const ingredientManager = require("../../services/ingredient-manager");
const router = express.Router();
const {ingredientIdValidator} = require("../../validators/ingredient-validator");

// GET
router.get("/get-ingredients", async (_, res, next) => {
    errWrapper(async () => {
        res.status(200).json(await ingredientManager.getIngredients());
    }, next);
});

// PUT
router.put("/edit-ingredient/:ingredientId", ingredientIdValidator, async (req, res, next) => {
    errWrapper(async () => {
        res.status(200).json(await ingredientManager.editIngredient(req.params.ingredientId, req.body));
    }, next);
});

// DELETE
router.delete("/delete-ingredient/:ingredientId", ingredientIdValidator, async (req, res, next) => {
    errWrapper(async () => {
        res.status(200).json(await ingredientManager.deleteIngredient(req.params.ingredientId));
    }, next);
});

module.exports = router;