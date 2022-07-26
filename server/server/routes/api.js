const express = require("express");
const UserRouter = require("./api/user");
const RecipeRouter = require("./api/recipe");
const IngredientRouter = require("./api/ingredient");
const CategoryRouter = require("./api/category");
const LikeRouter = require("./api/like");
const router = express.Router();

router.use("/user", UserRouter);
router.use("/recipe", RecipeRouter);
router.use("/ingredient", IngredientRouter);
router.use("/category", CategoryRouter);
router.use("/like", LikeRouter);

module.exports = router;
