const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require('./controllers/errorController')
const AppError = require("./utils/appError");

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

app.all("*", (req, res, next) => {
  next(new AppError(`Unable to find ${req.originalUrl} here`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
