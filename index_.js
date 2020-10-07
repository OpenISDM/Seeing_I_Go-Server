const express = require('express');
const http = require('http');
const https = require('https');
const _resources = require ('./ReadSourceModule');
const Fin = require ('fs');
const path = require('path');
const app = express();

var privateKey = Fin.readFileSync(__dirname + '/ssl/private.key');
var certificate = Fin.readFileSync(__dirname + '/ssl/certificate.crt');
var credentails = { key : privateKey, cert : certificate };

var server = https.createServer(credentails, app);


server.listen(443);

const CharSet = 'utf8'
const XmlContentType = 'text/xml';
const JsonContentType= 'Application/Json';

var CompareApiKey = function(ApiString){
	if(ApiString == "AppKey wait for define")
		return true;

	return false;
}

app.get('/Policy', function(request, response){	
	response.sendFile(path.join(__dirname + '/static/PrivacyPolice.html'));	
});

app.get('/' , function(reqest, response){
	response.set('Content-Type', XmlContentType);
	response.charset=CharSet;
	response.send(_resources.GetSupportList());
	console.log("response : GetSupportList");
	//response.send('Hello world');
});


app.get('/:buildingName/:type/:Language' , function(request, response){
	console.log("FD or Name");
	//response.send(request.params.buildingName + "    " + request.params.type + "   " + request.params.Language);

	var buildingName = request.params.buildingName;
	var Type = request.params.type;
	var Language =request.params.Language;

	if(_resources.CompareLanguage(Language)){
		console.log("it have been supported");
		response.set('Content-Type', XmlContentType);
		response.charset= CharSet;
		// define when url type column contain "firstDirections", it will send FD file response.
		// define the url type column contain "infos", it will send Name info file response.
		if(Type == 'firstdirections'){
			console.log('Type : ' +Type);
			response.send(_resources.GetFDResources(buildingName,Language));
		}else if(Type == 'infos'){
			console.log('Type : ' + Type);
			response.send(_resources.GetNameResources(buildingName,Language));
		}else{
			response.send("You have a wrong input, sorry!");
		}

	}else{
		console.log("Can't not find language or it have not been supported");
		response.send("the Language doesn't support or have a wrong input, try again!");
	}
});

app.get('/:buildingName/:type' , function(request, response){
	console.log("Main");
	//response.send(request.params.buildingName +  " " +request.params.type);
	response.set('Content-Type', XmlContentType);
	
	if(_resources.CompareMapName(request.params.buildingName) && request.params.type == "main"){
		response.send(_resources.GetMainResources(request.params.buildingName));
	}else{
		console.log("have a long typeset : " + request.params.buildingName + "," + request.params.type);
		response.send("the building doesn't be supported or have a wrong input, try again!");
	}

});

// app.use(express.static('static'));
// app.use(express.vhost('WPIN.iis.sinica.edu.tw', ))
// app.listen(80, function () {
// 	console.log('the app is listening port 3000');
// })