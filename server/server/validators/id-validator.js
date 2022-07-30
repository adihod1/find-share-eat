const {validateSchema} = require("../../utils/validatos-utils");

const userIdValidator = validateSchema({
    userId: {
        isInt: true,
        in: ['params']
    }
});


module.exports = {
    userIdValidator
}