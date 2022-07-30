const express = require('express');
const {errWrapper} = require("../../../utils/api-utils");
const {loginValidator} = require("../../validators/auth-validators");
const userManager = require("../../services/user-manager");
const router = express.Router();

// POST
router.post('/login', loginValidator, (req, res, next) => {
    errWrapper(async () => {
        const {user} = req.body
        res.status(200).json(await userManager.addUser(user));
    }, next);
});

module.exports = router;