"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs');

/** SET UP **/
const PORT          = process.env.PORT || 8080;
global.PACKAGE_NAME = "MailChimp";

const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

fs.readdirSync('api/').forEach((file) => {
    try {
        var type      = file.substring(file.lastIndexOf('.') + 1),
            route     = file.substring(0, file.length - type.length - 1);

	   if(!type == 'js') return;

	   app.post(`/api/${PACKAGE_NAME}/${route}`, require(`./api/${file}`));
    } catch(e) { console.log(e); return; }
});

/** START LISTENING **/
app.listen(PORT);
module.exports = app;
