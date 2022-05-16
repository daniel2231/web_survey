const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Session = require("../models/session");
const User = require("../models/user");
const fs = require("fs");
const Stock = require("../models/stock");
const fastcsv = require("fast-csv");

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

router.get("/session/:id", function (req, res) {
  Session.findOne({ session_id: req.params.id }, (err, session) => {
    if (err) {
      alert(err);
    } else {
      if (!session) {
        res.sendStatus(404);
      } else {
        User.find({ session_code: req.params.id }, (err, users) => {
          if (err) {
            alert(err);
          } else {
            if (!users) {
              res.sendStatus(404);
            } else {
              res.render("admin/session", { session, users });
            }
          }
        });
      }
    }
  });
});

router.post("/download-session", function (req, res) {
  Session.find({}, (err, session) => {
    if (err) {
      console.log(err);
    } else {
      if (!session) {
        console.log("No session");
        res.sendStatus(404);
      } else {
        console.log(session);
        let data = JSON.stringify(session);
        console.log(data)
        const ws = fs.createWriteStream("sessions.csv");
        fastcsv
          .write(data, { headers: true })
          .on("finish", function () {
            console.log("Write to session.csv successful");
          })
          .pipe(ws);
      }
    }
  });
});

router.post("/delete-session", (req, res) => {
  let session_id = req.body.session_id;
  console.log(session_id);
  Session.deleteOne({ session_id: session_id }, (err, session) => {
    if (err) {
      console.log(err);
    } else {
      if (!session) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    }
  });
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
    complete_users: 0,
    stock1: 0,
    stock2: 0,
    initialConditionA: req.body.a,
    initialConditionB: req.body.b,
    initialConditionC: req.body.c,
    initialConditionD: req.body.d,
    conditionA: req.body.a,
    conditionB: req.body.b,
    conditionC: req.body.c,
    conditionD: req.body.d,
  });

  const daehan = new Stock({
    stock_name: "대한에너지솔루션",
    price: 31260,
    stock_count: 0,
    session_code: session_id,
  });

  const kae = new Stock({
    stock_name: "케이배터리솔루션",
    price: 30010,
    stock_count: 0,
    session_code: session_id,
  });

  daehan.save();
  kae.save();

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
      res.render("admin/admin", { sessions });
    }
  });
});

module.exports = router;
