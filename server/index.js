require("dotenv").config();

const express = require("express"),
  mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Connected to Database!");
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () => {
  console.log("Started");
});
