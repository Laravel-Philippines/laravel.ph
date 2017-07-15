var fs = require('fs'),
    path = require('path'),
    dotenv = require('dotenv');

dotenv.config();

var appPath = path.join(path.dirname(__filename), 'resources/assets/js/'),
    appFile = {
        base: 'app.original.js',
        app: 'app.js'
    };

var meetupKey = 'MEETUP_API_KEY';
var meetupAPI = process.env[meetupKey];

function changeAppJs() {
    fs.readFile(appPath + appFile.base, 'UTF-8', function(err, data) {
        if (err) throw err;

        var newValue = data.replace(/{{ MEETUP_API_KEY }}/, meetupAPI);

        fs.unlink(appPath + appFile.app, function() {
            fs.writeFile(appPath + appFile.app, newValue, 'UTF-8', function(error) {
                if (error) throw error;
            })
        })
    });
}

changeAppJs();
