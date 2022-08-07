const { Like, Recipe } = require("../db/models");
const recipe = require("../db/models/recipe");

const { Op } = require("sequelize");
class LikeManager {
  addLike = async (id, data) => {
    await Like.create({ recipeId: data.recipeId, userId: id });
    await this.getNumberOfLikesByRecipe(data.recipeId);
    return {};
  };

  deleteLike = async (id, data) => {
    console.log("dataaa", data);
    await Like.destroy({
      where: {
        [Op.and]: [{ userId: id }, { recipeId: data.recipeId }],
      },
    });
    // await Like.destroy({ likes });
    await this.getNumberOfLikesByRecipe(data.recipeId);
    return {};
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
