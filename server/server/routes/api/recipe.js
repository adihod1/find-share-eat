const express = require("express");
const { errWrapper } = require("../../../utils/api-utils");
const {
  recipeValidator,
  recipeNameValidator,
  recipeIdValidator,
  editRecipeValidator,
} = require("../../validators/recipe-validators");
const recipeManager = require("../../services/recipe-manager");
const { userIdValidator } = require("../../validators/id-validator");
const {
  categoryNameValidator,
} = require("../../validators/category-validator");
const router = express.Router();

// POST
router.post("/add-recipe/:userId", recipeValidator, (req, res, next) => {
  errWrapper(async () => {
    res
      .status(200)
      .json(await recipeManager.addRecipe(req.params.userId, req.body));
  }, next);
});

// GET
router.get("/get-all-recipes", (req, res, next) => {
  errWrapper(async () => {
    const { search, sort, ingredients, categories } = req.query;
    const filters = {};
    if (ingredients?.length) {
      filters.ingredients = _parseIngredientsQuery(ingredients.split(","));
    }
    if (categories?.length) {
      filters.categories = _parseCategoriesQuery(categories.split(","));
    }
    if (search) {
      filters.search = search;
    }
    if (sort) {
      filters.sort = sort;
    }
    const data = await recipeManager.getAllRecipes(filters);
    res.status(200).json(data);
  }, next);
});

router.get(
  "/get-recipe-by-user-id/:userId",
  userIdValidator,
  async (req, res, next) => {
    errWrapper(async () => {
      res
        .status(200)
        .json(await recipeManager.getRecipeByUser(req.params.userId));
    }, next);
  }
);

router.get("/get-recipes-by-ingredients", async (req, res, next) => {
  errWrapper(async () => {
    const ingredients = _parseIngredientsQuery(
      req.query.ingredients.split(",")
    );
    res
      .status(200)
      .json(await recipeManager.getRecipeByIngredients(ingredients));
  }, next);
});

router.get(
  "/get-chosen-recipe/:recipeId",
  recipeIdValidator,
  async (req, res, next) => {
    errWrapper(async () => {
      res
        .status(200)
        .json(await recipeManager.getChosenRecipe(req.params.recipeId));
    }, next);
  }
);

router.get(
  "/get-recipes-by-category/:categoryName",
  categoryNameValidator,
  async (req, res, next) => {
    errWrapper(async () => {
      res
        .status(200)
        .json(
          await recipeManager.getRecipeByCategories(req.params.categoryName)
        );
    }, next);
  }
);

router.get(
  "/get-recipes-by-name/:recipeName",
  recipeNameValidator,
  async (req, res, next) => {
    errWrapper(async () => {
      res
        .status(200)
        .json(await recipeManager.getRecipeByName(req.params.recipeName));
    }, next);
  }
);

// PUT
router.put(
  "/edit-recipe/:recipeId",
  editRecipeValidator,
  async (req, res, next) => {
    errWrapper(async () => {
      res
        .status(200)
        .json(await recipeManager.editRecipe(req.params.recipeId, req.body));
    }, next);
  }
);

// DELETE
router.delete(
  "/delete-recipe/:recipeId",
  recipeIdValidator,
  async (req, res, next) => {
    errWrapper(async () => {
      res
        .status(200)
        .json(await recipeManager.deleteRecipe(req.params.recipeId));
    }, next);
  }
);

function _parseIngredientsQuery(query) {
  return query.map((ingredientName) => ({ ingredientName }));
}

function _parseCategoriesQuery(query) {
  return query.map((categoryName) => ({ categoryName }));
}

module.exports = router;
