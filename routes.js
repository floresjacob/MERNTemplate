var express = require('express');
const app = express();
var router = express.Router();
var bodyparser = require('body-parser');
var User = require('./models/User')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router.get('/', function (req, res) {
    res.render('index')
  });

router.route('/users')
.post(function(req,res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err) {
        if (err){
        res.send(err)
    }
        else{
        res.send('User successfully added');
        }
    })
})

module.exports = router;