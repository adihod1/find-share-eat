const express = require('express');
const {errWrapper} = require("../../../utils/api-utils");
const userManager = require("../../services/user-manager");
const router = express.Router();
const {userIdValidator} = require("../../validators/id-validator");

// GET
router.get("/get-user/:userId", userIdValidator, async (req, res, next) => {
    errWrapper(async () => {
        res.status(200).json(await userManager.getUser(req.params.userId));
    }, next);
});

module.exports = router;