//Install express server
const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
// Serve only the static files form the dist directory
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
app.use(express.static(__dirname + '/dist/car'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/car/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8090);
