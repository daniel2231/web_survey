const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/start", (req, res) => {
  res.render("test/info");
});

module.exports = router;
