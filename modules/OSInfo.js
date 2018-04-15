var os     = require('os');
var colors = require('colors');
var time   = require('./time');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.gray, type);
    console.log('Release:'.red.dim, release);
    console.log('CPU model:'.blue, cpu);
    let days = time.toDays(uptime);
    let hours = time.toHours(uptime) % 24;
    let minutes = time.toMinutes(uptime) % 60;
    let uptimeStr = (days > 0)?days + 'd':'';
    uptimeStr += (hours  > 0)?' ' + hours + 'h':'';
    uptimeStr += (minutes > 0)?' ' + minutes + 'min':'';
    console.log('Uptime:'.green.dim, uptimeStr);
    console.log('User name:'.yellow.dim, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;