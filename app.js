/**
 * Created by Administrator on 2016/11/9.
 */
var path = require('path');
var express = require('express');


var app = express();

//开发环境
//app.use('/dev', express.static(__dirname + '/views'));
//app.use('/dev/public', express.static(__dirname + '/public'));

//部署环境
app.use('/', express.static(__dirname + '/dist/views'))
app.use('/public', express.static(__dirname + '/dist/public'))


app.listen(16083, function(){
    console.log('server start at 16083');
});

module.exports = app;

