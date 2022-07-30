const express = require('express');
const {errWrapper} = require("../../../utils/api-utils");
const categoryManager = require("../../services/category-manager");
const router = express.Router();

// GET
router.get("/get-categories", async (_, res, next) => {
    errWrapper(async () => {
        res.status(200).json(await categoryManager.getCategories());
    }, next);
});

module.exports = router;