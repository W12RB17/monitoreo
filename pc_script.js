const express = require('express');
const os = require('os');
const math = require('math');

const server = express();

var port = 3000;

server.listen(port, function () {
    console.log('server on port ' + port);
});

server.post('/', function(req, res) {
    res.write('Hostname: ' + os.hostname() + '\n');
    res.write('Total Memory ' + math.round(os.totalmem() / 1024**3) + ' GB' + '\n');
    res.write('Free Memory: ' + math.round(os.freemem() / 1024**3) + 'GB' + '\n');
    res.write('Platform: ' + os.platform() + '\n');
    res.write('Version: ' + os.version());
    res.end();
});

server.get('/sebas', function(req, res) {
    res.send('<h1>Sebas perro</h1>');
    res.end();
});

