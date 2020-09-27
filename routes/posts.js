const express = require("express");
const Post = require("./models/Post")
const router = express.Router();

router.get("/", (req, res) => {
  res.send("See you Americans");
});

module.exports  = router;