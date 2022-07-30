const {validateSchema} = require("../../utils/validatos-utils");

const ingredientIdValidator = validateSchema({
    ingredientId: {
        isInt: true,
        in: ['params']
    }
});


module.exports = {
    ingredientIdValidator
}