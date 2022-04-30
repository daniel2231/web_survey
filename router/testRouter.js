const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/info", (req, res) => {
  res.render("test/info");
});

router.get("/order-test", (req, res) => {
  res.render("test/order-test");
});

router.get("/order", (req, res) => {
  res.render("test/order");
});

router.get("/daehan", (req, res) => {
  res.render("test/daehan");
});

router.get("/daehan-info", (req, res) => {
  res.render("test/daehan-info");
});

router.get("/daehan-community", (req, res) => {
  res.render("test/daehan-community");
});

router.get("/kae", (req, res) => {
  res.render("test/kae");
});

router.get("/kae-info", (req, res) => {
  res.render("test/kae-info");
});

router.get("/kae-community", (req, res) => {
  res.render("test/kae-community");
});

router.get("/survey", (req, res) => {
  res.render("test/survey");
});

router.get("/result", (req, res) => {
  res.render("test/result");
});

router.get("/end", (req, res) => {
  res.render("test/end");
});

module.exports = router;
