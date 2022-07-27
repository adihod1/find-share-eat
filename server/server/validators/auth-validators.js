const {validateSchema} = require("../../utils/validatos-utils");

const loginValidator = validateSchema({
    'user.name': {
        isString: true,
        errorMessage: `Missing/Bad user.name`,
        in: ['body']
    },
    'user.email': {
        isString: true,
        errorMessage: `Missing/Bad user.email`,
        in: ['body']
    },
    'user.sub': {
        isString: true,
        errorMessage: `Missing/Bad user.sub`,
        in: ['body']
    },
    'user.picture': {
        isString: true,
        optional: true,
        errorMessage: `Bad user.picture`,
        in: ['body']
    },
});


module.exports = {
    loginValidator
}