var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));

var friend = ['Aman','Dikshit','Om']
app.set("view engine","ejs");

app.get('/', (req,res) =>{
res.render('home',{friend:friend});
});

app.post('/friend', (req,res) =>{
var newFriend = req.body.newfriend;
friend.push(newFriend);
res.redirect('/');

})

app.listen(port, function() {
console.log("Server is listening");
});
