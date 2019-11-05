var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var carsRouter = require("./routes/cars");
var serviceRouter = require("./routes/services");


var app = express();

app.use(express.static(path.join(__dirname, "front/build")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/auth",authRouter);
app.use("/cars", carsRouter);
app.use("/services", serviceRouter);

module.exports = app;
