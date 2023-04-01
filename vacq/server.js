const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");
const cors = require("cors");

const hospitals = require("./routes/hospitals");
const appointments = require("./routes/appointments");
const auth = require("./routes/auth");

dotenv.config({ path: "./config/config.env" });

connectDb();

const app = express();
app.use(cors());

const version = "/v1";
const baseUrl = "/api" + version;

app.use(express.json());
app.use(cookieParser());
app.use(`${baseUrl}/hospitals`, hospitals);
app.use(`${baseUrl}/appointments`, appointments);
app.use(`${baseUrl}/auth`, auth);

const PORT = process.env.PORT ?? 5000;

const server = app.listen(PORT, console.log("Server running in ", process.env.NODE_ENV, " node on port", PORT));

process.on("unhandledRejection", (err, promise) => {
  console.log("Error: " + err.message);
  server.close(() => express.exit(1));
});
