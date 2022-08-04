const { Like, Recipe } = require("../db/models");
const recipe = require("../db/models/recipe");

class LikeManager {
  addLike = async (id, data) => {
    await Like.create({ recipeId: data.recipeId, userId: id });
    this.getNumberOfLikesByRecipe(data.recipeId);
  };

  deleteLike = async (id, data) => {
    await Like.destroy({ where: { userId: id } });
    this.getNumberOfLikesByRecipe(data.recipeId);
  };

  checkIfUserLiked = async (userId, recipeId) => {
    const IsLike = await Like.findAll({
      where: { userId: userId, recipeId: recipeId },
    });
    return IsLike;
  };

  getNumberOfLikesByRecipe = async (recipeId) => {
    const numberOfLikes = await Like.count({
      where: { recipeId: recipeId },
    });

    await Recipe.update(
      { numberOfLikes: numberOfLikes },
      { where: { id: recipeId } }
    );
    // recipe.countLike()
  };
}

module.exports = new LikeManager();
