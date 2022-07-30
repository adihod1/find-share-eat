const {validateSchema} = require("../../utils/validatos-utils");

const loginValidator = validateSchema({
    'user.firstName': {
        isString: true,
        errorMessage: `Missing/Bad user.firstName`,
        in: ['body']
    },
    'user.lastName': {
        isString: true,
        errorMessage: `Missing/Bad user.lastName`,
        in: ['body']
    },
    'user.userName': {
        isString: true,
        errorMessage: `Missing/Bad user.userName`,
        in: ['body']
    },
    'user.email': {
        isString: true,
        errorMessage: `Missing/Bad user.email`,
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