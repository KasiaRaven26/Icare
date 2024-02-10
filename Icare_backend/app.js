const express = require("express");
const morgan = require("morgan");

const availableCareGiversRouter = require("./routes/availableCareGiversRouter");
const findCareGiverRouter = require("./routes/findCareGiverRouter");
const userRouter = require("./routes/usersRouter");

const app = express();

// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV) {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/available-care-givers", availableCareGiversRouter);
app.use("/api/v1/care-givers", findCareGiverRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
