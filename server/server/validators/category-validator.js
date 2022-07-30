const {validateSchema} = require("../../utils/validatos-utils");

const categoryNameValidator = validateSchema({
    categoryName: {
        isString: true,
        in: ['params'],
        errorMessage: `Missing/Bad category param`,
    }
});


module.exports = {
    categoryNameValidator
}