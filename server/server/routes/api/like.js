const express = require("express");
const { errWrapper } = require("../../../utils/api-utils");
const { likeValidator } = require("../../validators/like-validators");
const likeManager = require("../../services/like-manager");
const router = express.Router();

// POST
router.post("/add-like/:userId", likeValidator, (req, res, next) => {
  errWrapper(async () => {
    res
      .status(200)
      .json(await likeManager.addLike(req.params.userId, req.body));
  }, next);
});

router.delete("/delete-like/:userId", likeValidator, async (req, res, next) => {
  errWrapper(async () => {
    res
      .status(200)
      .json(await likeManager.deleteLike(req.params.userId, req.body));
  }, next);
});

module.exports = router;
