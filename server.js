const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

const hospitals = require("./routes/hospitals");

dotenv.config({ path: "./config/config.env" });

connectDb();

const app = express();

const version = "v1/";
const baseUrl = "/api/" + version;

app.use(express.json());
app.use(`${baseUrl}hospitals`, hospitals);

const PORT = process.env.PORT ?? 5000;

const server = app.listen(
  PORT,
  console.log("Server running in ", process.env.NODE_ENV, " node on port", PORT)
);

process.on("unhandledRejection", (err, promise) => {
  console.log("Error: " + err.message);
  server.close(() => express.exit(1));
});
