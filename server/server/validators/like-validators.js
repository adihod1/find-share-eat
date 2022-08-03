const { validateSchema } = require("../../utils/validatos-utils");

const likeValidator = validateSchema({
  recipeId: {
    isInt: true,
    in: ["body"],
  },
  userId: {
    isInt: true,
    in: ["params"],
  },
});

module.exports = {
  likeValidator,
};
