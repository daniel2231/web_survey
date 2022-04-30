const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Session = require("../models/session");
const fs = require("fs");

function makeid(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

router.get("/login", (req, res) => {
  res.render("admin/admin-login");
});

router.post("/create-session", async (req, res) => {
  const session_id = makeid(5);
  const start_time = new Date();
  const end_time = new Date();
  end_time.setHours(end_time.getHours() + 1);
  const user_count = 0;

  const newSession = new Session({
    session_id,
    start_time,
    end_time,
    user_count,
  });

  await newSession.save((err, session) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin");
    }
  });
});

router.get("/", (req, res) => {
  Session.find({}, (err, sessions) => {
    if (err) {
      console.log(err);
    } else {
      console.log(sessions);
      res.render("admin/admin", { sessions });
    }
  });
});

module.exports = router;
