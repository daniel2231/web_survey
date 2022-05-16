const express = require("express");
const session = require("../models/session");
const router = express.Router();
const User = require("../models/user");
const Session = require("../models/session");
const Stock = require("../models/stock");

router.get("/info", (req, res) => {
  Session.find({}, (err, sessions) => {
    if (err) {
      console.log(err);
    } else {
      console.log(sessions);
      res.render("test/info", { sessions });
    }
  });
});

router.post("/check-condition", (req, res) => {
  console.log(req.body.phoneNum);
  User.findOne({ phone: req.body.phoneNum }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.sendStatus(404);
      } else {
        res.send(user);
      }
    }
  });
});

router.get("/order-test", (req, res) => {
  res.render("test/order-test");
});

router.get("/order", (req, res) => {
  res.render("test/order");
});

router.post("/order-stock", (req, res) => {
  console.log(req.body);
  User.findOne({ phone: req.body.phone }, (err, user) => {
    Session.findOne({ session_id: req.body.session_code }, (err, session) => {
      if (err) {
        console.log(err);
      } else {
        if (!session) {
          console.log("세션이 없습니다.");
        } else {
          session.complete_users += 1;
          session.save();
        }
      }
      if (err) {
        console.log(err);
      } else {
        if (!user) {
          res.sendStatus(404);
        } else {
          session.stock1 += Number(req.body.stock1);
          session.stock2 += Number(req.body.stock2);
          user.stock1 = req.body.stock1;
          user.stock2 = req.body.stock2;
          user.timeLeft = req.body.timeLeft;
          user.timeDaeCom = req.body.timeDaeCom;
          user.timeDaeInfo = req.body.timeDaeInfo;
          user.timeKaeCom = req.body.timeKaeCom;
          user.timeKaeInfo = req.body.timeKaeInfo;

          user.save((err, user) => {
            if (err) {
              console.log(err);
            } else {
              res.sendStatus(200);
            }
          });
        }
      }
    });
  });
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

router.post("/get-results", (req, res) => {
  Session.find({ session_id: req.session_code }, (err, sessions) => {
    if (err) {
      console.log(err);
    } else {
      res.send(sessions);
    }
  });
});

router.post("/get-session-status", (req, res) => {
  Session.findOne({ session_id: req.body.session_code }, (err, session) => {
    if (err) {
      console.log(err);
    } else {
      if (!session) {
        console.log("세션이 없습니다.");
      } else {
        //respond send session data
        if (req.body.phone) {
          User.findOne({ phone: req.body.phone }, (err, user) => {
            if (err) {
              console.log(err);
            } else {
              if (!user) {
                console.log("no user");
                res.sendStatus(404);
              } else {
                res.send({ user, session });
              }
            }
          });
        } else {
          res.send(session);
        }
      }
    }
  });
});

router.get("/loading", (req, res) => {
  res.render("test/loading");
});

router.get("/end", (req, res) => {
  res.render("test/end");
});

module.exports = router;
