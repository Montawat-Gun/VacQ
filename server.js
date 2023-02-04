const express = require("express");
const dotenv = require("dotenv");

const hospitals = require("./routes/hospitals");

dotenv.config({ path: "./config/config.env" });

const app = express();

const version = "v1/";
const baseUrl = "/api/" + version;

app.use(`${baseUrl}hospitals`, hospitals);

const PORT = process.env.PORT ?? 5000;

app.listen(
  PORT,
  console.log("Server running in ", process.env.NODE_ENV, " node on port", PORT)
);
