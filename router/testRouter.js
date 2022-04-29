const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/info", (req, res) => {
  res.render("test/info");
});

router.get("/order", (req, res) => {
  res.render("test/order");
});

router.get("/daehan", (req, res) => {
  res.render("test/daehan");
});

router.get("/order-test", (req, res) => {
  res.render("test/order-test");
});

router.get("/survey", (req, res) => {
  res.render("test/survey");
});

router.get("/end", (req, res) => {
  res.render("test/end");
});

router.get("/daehan-info", (req, res) => {
  res.render("test/daehan-info");
});

router.get("/kae", (req, res) => {
  res.render("test/kae");
});

router.get("/kae-info", (req, res) => {
  res.render("test/kae-info");
});

module.exports = router;
