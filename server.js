require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const path = require("path");


// MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.log(err));

// Live reload code
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");
liveReloadServer.watch(path.join(__dirname, "/public"));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLivereload());

app.set('views', __dirname + '/views/pages');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Router
const onboardingRouter = require("./router/onboardingRouter");
const adminRouter = require("./router/adminRouter");
const testRouter = require("./router/testRouter");
app.use("/onboarding", onboardingRouter);
app.use("/admin", adminRouter);
app.use("/test", testRouter);

app.get("/", (req, res) => {
  res.render("onboarding/index");
});

app.use(function (req, res, next) {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
