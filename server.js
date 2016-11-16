/**
 * Created by Administrator on 2016/11/9.
 */
var http=require("http");
const path = require('path');
const express = require('express');


const app = express();
app.use('/', express.static(__dirname + '/view'));
app.use('/static', express.static(__dirname + '/static'));



http.createServer(app).listen(9798, function(){
    console.log('server start at 9798');
});


module.exports = app;

