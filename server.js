//Install express server
const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();

// Serve only the static files form the dist directory
<<<<<<< HEAD
app.use(express.static(__dirname + '/dist/carbazarweb1'));
app.use(cors());
=======
app.use(express.static(__dirname + '/dist/car'));

>>>>>>> 4c7307a511820eb8573eedf5ae9664d8660d8056
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/car/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8090);
