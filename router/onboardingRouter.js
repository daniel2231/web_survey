const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/info", (req, res) => {
  res.render("onboarding/info");
});

router.get("/info2", (req, res) => {
  res.render("onboarding/info2");
});

router.get("/info3", (req, res) => {
  res.render("onboarding/info3");
});

router.get("/info4", (req, res) => {
  res.render("onboarding/info4");
});

router.get("/info5", (req, res) => {
  res.render("onboarding/info5");
});

router.get("/info6", (req, res) => {
  res.render("onboarding/info6");
});

router.get("/order-test", (req, res) => {
  res.render("onboarding/order-test");
});

router.get("/sugi", (req, res) => {
  res.render("onboarding/sugi");
});

router.get("/order", (req, res) => {
  res.render("onboarding/order");
});

router.get("/survey", (req, res) => {
  res.render("onboarding/survey");
});

router.get("/end", (req, res) => {
  res.render("onboarding/end");
});
module.exports = router;
