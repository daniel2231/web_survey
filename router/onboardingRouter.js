const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Session = require("../models/session");

router.get("/info", (req, res) => {
  res.render("onboarding/info");
});

router.post("/new-user", async (req, res) => {
  const user = await new User(req.body);
  // check Session DB for session_id and update user_count
  Session.findOne({ session_id: req.body.session_code }, (err, session) => {
    if (err) {
      alert(err);
    } else {
      if (!session) {
        res.sendStatus(404);
      } else {
        session.user_count++;
        session.save();
        user.save((err, user) => {
          if (err) {
            console.log(err);
          } else {
            //send res to client
            res.sendStatus(200);
          }
        });
      }
    }
  });
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

router.get("/sugi-info", (req, res) => {
  res.render("onboarding/sugi-info");
});

router.get("/ine", (req, res) => {
  res.render("onboarding/ine");
});

router.get("/ine-info", (req, res) => {
  res.render("onboarding/ine-info");
});

router.get("/order", (req, res) => {
  res.render("onboarding/order");
});

module.exports = router;
