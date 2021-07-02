const nodemailer = require('nodemailer'),
config = require('./config.json')
port = config.port
express = require('express'),
app = express();


bodyParser = require('body-parser'),
cors = require('cors'),
path = require('path'),
//disabling token based authentication - not needed for this project scope. 


app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors());


// importing all the paths 

require('./routes/routes.js')(app, path);

// Enable Cross Origin Resource Sharing
app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Origin,Content-type,Accept,X-Access-Token,X-Key,Cache-Control,X-Requested-With,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.listen(port);
console.log("High Processing Node.JS Server started")

   
    
