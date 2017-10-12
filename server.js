var express = require('express');
var app = express();

app.use(express.static(__dirname + "/www"));
app.listen(process.env.PORT || 5000);
NPM_CONFIG_PRODUCTION = false;
