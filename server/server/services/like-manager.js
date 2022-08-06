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

  checkIfUserLiked = async (userId) => {
    const IsLike = await Like.findAll({
      where: { userId: userId },
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
  };
}

module.exports = new LikeManager();
