require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.set("views", __dirname + "/views/pages");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json())

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
