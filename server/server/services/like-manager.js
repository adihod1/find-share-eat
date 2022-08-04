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

// const count = await User.count({
//     where: { lastName: "Sebhastian" },
//   });

//   console.log(count); // 2

// await PostModel.findAll({
//     group: ['posts.id'],
//     order: [['createdAt', 'DESC']],
//     include: [
//       {
//         model: CategoryModel,
//         attributes: ['title'],
//         where: { title: categoryTitle }
//       },
//       { model: CommentModel },
//       { model: UserModel, attributes: ['fullname', 'id'] }
//     ],
//     attributes: [
//       'title', 'content', 'description', 'thumbnail', 'baner', 'createdAt', 'updatedAt',
//       [Sequelize.fn('COUNT', 'comment.id'), 'commentsCounter']
//     ]
//   });

// ataModel.findAll({
//     attributes: {
//         include: [[Sequelize.fn("COUNT", Sequelize.col("history.data_id")), "historyModelCount"]]
//     },
//     include: [{
//         model: historyModel, attributes: []
//     }],
//     group: ['data.id']
// });
