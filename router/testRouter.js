const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/start", (req, res) => {
  res.render("test/info");
});

router.get("/start-1", (req, res) => {
  res.render("test/info-1");
});

module.exports = router;
