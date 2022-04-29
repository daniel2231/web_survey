const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/login", (req, res) => {
  res.render("admin/admin-login");
});

router.get("/", (req, res) => {
  res.render("admin/admin");
});

module.exports = router;
