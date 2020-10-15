//initialize component
const express = require('express');
const http = require('http');
const https = require('https');
const fin = require ('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//for document format
const Utf8 = 'utf8'
const XmlContentType = 'text/xml';
const JsonContentType= 'Application/Json';

//SSL auth
var privateKey = fin.readFileSync(__dirname + '/ssl/private.key');
var certificate = fin.readFileSync(__dirname + '/ssl/certificate.crt');
var credentails = { key : privateKey, cert : certificate };

// start server.
var server = https.createServer(credentails, app);
server.listen(443,function(){
	console.log('the server is listening port 443');
});

app.use(bodyParser.json({extended: false}));


//to get document navigraph files
app.post('path?', function(request, respond){
	
});

//to get document piture.
app.post('path2?', function(request,respond){
	
});


//for Android private policy.
app.get('/policy', function(request, respond){
	// to send Private policy document
	respond.sendFile(path.join(__dirname + '/static/PrivatePolicy.html'));
});

