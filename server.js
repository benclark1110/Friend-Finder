var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
//express().use(express....)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.use(express.static(__dirname + '/app/public'));/////////////////////////////////////////////////////////////////////////////////

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


