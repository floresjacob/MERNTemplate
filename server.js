const express = require("express");
const path = require("path");
var routes = require('./routes')
const bodyparser = require('body-parser')
var mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mango");


app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get('/test', function (req, res) {
  // mongoose function
  res.json({
    title: 'The Test Title',
    message: 'The Test Message'
  })
})

//anything that comes as a url param, handled in routes folder
app.use('/', routes);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



module.exports = app;