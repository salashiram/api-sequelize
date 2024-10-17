const express = require("express");
const morgan = require("morgan");
const router = require("../router/user.router");

const app = express();

// parsear JSON
app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("This is express");
});

app.use("/api/v1", router);

module.exports = app;
