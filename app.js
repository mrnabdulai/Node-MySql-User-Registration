const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// hbsStatic files
app.use(express.static("public"));

// Templating Engine
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Routing

app.get("", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
