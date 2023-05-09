var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://arthurtromer93:cabrunco4000@cluster0.ojvpssk.mongodb.net/', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const userRoute = require('./routes/user.route');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);


app.listen(3000,function(){
    console.log('Listening on port 3000!');
});