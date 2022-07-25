const express = require('express');
const {errWrapper} = require("../../utils/api-utils");
const {loginValidator} = require("../validators/auth-validators");
const router = express.Router();

router.post('/login', loginValidator, (req, res, next) => {
    errWrapper(async () => {
        const {user} = req.body
        console.log(JSON.stringify(user, null, 2))
        // const data = await itemManager.getAllItems(sort, search, status);
        res.status(200).json(user);
    }, next);
});


module.exports = router;