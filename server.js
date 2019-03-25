//npm package
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//sets the port
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
  type: 'application/*+json'
}))
app.use(bodyParser.json({
  type: 'application/vnd.custom-type'
}))
app.use(bodyParser.json({
  type: 'text/html'
}))

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

//listener--effectively starting server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});