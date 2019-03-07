/*
Copyright 2019 Dave Weilert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//------------------------------------------------------------------------------
// Software version
//------------------------------------------------------------------------------
var softwareVersion = '1.0.0';
var myname = 'WebMe';

//------------------------------------------------------------------------------
// Require statements
//------------------------------------------------------------------------------
var fs = require('fs-extra');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var commandLineArgs = require('command-line-args');
var commandLineUsage = require('command-line-usage');
var chalk = require('chalk');
var cors = require('cors');
var request = require('request');
var uuidV4 = require('uuid/v4');

var utl = require('./lib/utl');

var random = uuidV4();
var ZNS = 'black';
var ZAN = 'eagle';
var app_name = 'Unknown';
var app_namespace = 'Unknown';
var url_collector = 'Unknown';
var url_instructor = 'Unknown';
var count = 0;
var icount = 0;
var port = 4100;

//------------------------------------------------------------------------------
// Application variables
//------------------------------------------------------------------------------
var options;
var optionDefinitions = [{
        name: 'port',
        alias: 'p',
        type: Number,
        defaultOption: 4100
    },
    {
        name: 'help',
        alias: 'h'
    }
];

var bb = chalk.green;
var CLLR_TITLE = chalk.bold.underline(myname);
var CLLR_VERSION = chalk.bold.underline('Version: ' + softwareVersion );

// Do not change the spacing of the following VPK_HEADER, and 
// do not delete the single tick mark
var CLLR_HEADER = `
${bb('-----------------------------------------------------------------')}
 ${bb(CLLR_TITLE)}
 ${bb(CLLR_VERSION)}                  
${bb('-----------------------------------------------------------------')}              
  `
//Do not delete the single tick mark above


//------------------------------------------------------------------------------
// process start parameters if provided
//------------------------------------------------------------------------------
options = commandLineArgs(optionDefinitions)

// -help used
if (typeof options.help !== 'undefined') {
    help();
    process.exit(0);
}

// -p used
if (typeof options.port !== 'undefined' && options.port !== null) {
    port = options.port;
    if (port < 1 || port > 65535) {
        utl.logMsg('webm099e - Invalid port number defined.  Valid range is 1 - 65535.');
        process.exit(-1);
    }
}



//------------------------------------------------------------------------------
// Define express routes / urls
//------------------------------------------------------------------------------
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Express app definitions
app.use(cors());

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});


app.get('/ping', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Server is OK\n');
});


//------------------------------------------------------------------------------
// Define SocketIO events and handlers
//------------------------------------------------------------------------------
io.on('connection', (client) => {

    client.on('confirm', function(data) {
        utl.logMsg('webm006i - Confirm request to complete lab received');
        success();
        var result = {"resp":"Confirmed"};
        client.emit('confirmed', result);
    });

});

  
//------------------------------------------------------------------------------
// start all 
//------------------------------------------------------------------------------
function startAll() {
    statMessages = [];
    splash();
    utl.logMsg('webm007i - WebMe Server started, port: ' + port);
    server.listen(port);
    getVars();
}

//------------------------------------------------------------------------------
// Command line startup and help
//------------------------------------------------------------------------------
function help() {
    var usage = commandLineUsage([{
            content: CLLR_HEADER,
            raw: true,
        },
        {
            header: 'Options',
            optionList: optionDefinitions
        }
    ]);
    console.log(usage);
}

function splash() {
    var adv = commandLineUsage([{
        content: CLLR_HEADER,
        raw: true,
    }]);
    console.log(adv);
}

//------------------------------------------------------------------------------
// Get the environment variables
//------------------------------------------------------------------------------

function getVars() {
    // print and get environment variables
    utl.logMsg('webm002i - Local environment variables:')
    console.log(JSON.stringify(process.env,null,4));

    let localVars = process.env;

    // namespace - this should be a color, if missing set to balck
    if (typeof localVars.APP_NAMESPACE !== 'undefined') {
        app_namespace = localVars.APP_NAMESPACE;
    } else {
        app_namespace = ZNS;
    }
    utl.logMsg('webm003i - Environment APP_NAMESPACE: ' + app_namespace);

    // app - should be the name of the pod, else generate random value
    if (typeof localVars.APP_NAME !== 'undefined') {
        app_name = localVars.APP_NAME;
    } else {
        app_name = ZNS + '-' + ZAN + '-' + random;
    }
    utl.logMsg('webm004i - Environment APP_NAME: Using random key = ' + app_name);

    // url of where the data is being sent, if missing send to local host
    if (typeof localVars.COLLECTOR_CONFIG !== 'undefined') {
        url_collector = localVars.COLLECTOR_CONFIG;
    } else {
        url_collector = 'http://localhost:3000';
    }
    utl.logMsg('webm005i - Environment COLLECTOR_CONFIG: ' + url_collector);
    
	// url of where the data is being sent to instructor, if missing send to local host
	if (typeof localVars.INSTRUCTOR_CONFIG !== 'undefined') {
    	url_instructor = localVars.INSTRUCTOR_CONFIG;
	} else {
    	url_instructor = 'http://localhost:4200';
	}
	utl.logMsg('webm006i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);       
}

//------------------------------------------------------------------------------
// Tell the collector server we are here
//------------------------------------------------------------------------------
// 
function informStudent(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
            utl.logMsg('webm011e - Error student count: ' + count + ' message: ' + error.errno );
        }
        callback(res);
    });
}

function tellStudent() {
    count++;
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
	        utl.logMsg('webm007i - Student count: ' + count + ' for : /'+ app_namespace + '/' + app_name);
        }
    });
}

// tell the collector server we are here
function informInstructor(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
        	utl.logMsg('webm012e - Error instructor count: ' + icount + ' message: ' + error.errno );
        }
        callback(res);
    });
}

function tellInstructor() {
	icount++;
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            icount++;
            utl.logMsg('webm010i - Instructor count: ' + icount + ' for /'+ app_namespace + '/' + app_name);
        }
    });
}






function success() {
    // time interval loop
    let startInformStudent = setInterval(tellStudent, 5000);
    utl.logMsg('webm011i - Initial reporting to student');
    tellStudent();
    // time interval loop
    let startInformInstructor = setInterval(tellInstructor, 15000);
    utl.logMsg('webm012i - Initial reporting to instructor');
    tellInstructor();
    
}

//------------------------------------------------------------------------------
//begin processing
//------------------------------------------------------------------------------
startAll();
//------------------------------------------------------------------------------