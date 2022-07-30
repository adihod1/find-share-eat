const express = require("express");
const router = express.Router();
const upload = require('../services/upload-image')

router.post("/upload-image", upload);

module.exports = router