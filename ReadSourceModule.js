const { Console } = require('console');
var Fin = require('fs');
var Path = require('path');
//var XmlDocument = require('xmldoc');
const utf8 = "utf8"

var MapData = Fin.readFileSync('./CurrentMaps.json' , utf8);

var json = JSON.parse(MapData);

var CompareMapName = function (MapName){
		const filter = json.Maps.filter(ele => ele.Name == MapName);
		if(filter.length >= 1){
			return true;
		}
		return false;
}

var CompareLanguage = function (LanguageName){
	console.log(LanguageName);

	const filter = json.Languages.filter(ele =>ele.Name == LanguageName);

	if(filter.length>=1){
		return true;
	}
	return false;
}

var ReadFile = function (Path){
	return Fin.readFileSync(Path, utf8);
}

var GetSupportList = function(){
	var Path = "./ServerSource.xml";

	return ReadFile(Path);
}

var GetMainResources = function (MapName, isBeta = false){
	console.log(">>GetMainResources");
	if(isBeta) var Path = "./AppResources/Beta/" + MapName + "/"+ MapName + ".xml";
	else var Path = "./AppResources/" + MapName + "/"+ MapName + ".xml";

	console.log("Main resource Path : " + Path);

	return ReadFile(Path);
}

var GetFirstDirectionResources= function(MapName , Language, isBeta=false ){
	console.log(">>GetFirstDirectionResources");
	var Path = "./AppResources/" + MapName + "/" + MapName + "_FD_" + Language + ".xml";

	console.log("FD Resources Path : " + Path);
	return ReadFile(Path);
}

var GetNameResources = function (MapName, Language, isBeta = false){
	console.log(">>GetNameResources");
	var Path = "./AppResources/" + MapName + "/" + MapName + "_info_" + Language + ".xml";

	console.log("Name Resources Path : " + Path);
	return ReadFile(Path);
}

var GetBeaconResouces = function(MapName){
	console.log(">>GetBeaconResouces");
	var Path = "./AppResources/" + MapName + "/" + MapName + "_Beacon.xml";
	console.log("Beacon Path : " + Path);

	return ReadFile(Path);
}

var GetRecords = function(PatientID){
	var path = "./RecordFolder/" + PatientID + "/"+ PatientID + "_"+ Math.floor(Math.random()*2)+".xml";
	console.log("The path is : " + path);

	return ReadFile(path);
}

var CheckExistPatient = function(HospitalName, PatientID){
	console.log(">>CheckPatient");
	var path = "./CurrentPatientList.json";

	var HospitalList = JSON.parse(ReadFile(path));

	for( i=0; i<HospitalList.Hospitals.length ; i++){
		if(HospitalList.Hospitals[i].HospitalName != HospitalName)
			continue;

		return HospitalList.Hospitals[i].PatientList.includes(PatientID);
	}
	return false;
}

var CheckPictureExist = function(buildingName, fileName){
	var resoucePath = Path.join(__dirname, 'AppResouces', buildingName, 'DirectionPictures');
	
}

var GetPicture = function(buildingName, fileName){
	console.log(">>GetPicture");
	console.log("file path :" + __dirname + "/AppResources/" +buildingName +"/" + "pictures/" + fileName);
	return ReadFile( __dirname + "/AppResources/" +buildingName +"/DirectionPictures/" + fileName);
}

var GetPicturePath = function(buildingName, fileName){
	console.log(">>GetPicturePath");

	return __dirname + "/AppResources/" +buildingName +"/DirectionPictures/" + fileName;
}

var GetFileList = function(buildingName){
	console.log(">>GetFileList");

	var resoucePath = Path.join(__dirname, 'AppResources', buildingName, 'DirectionPictures');
	console.log('resouce path : ' + resoucePath);
	var Picturefiles = Fin.readdirSync(resoucePath)
	return Picturefiles;
}

var Resourcemodule={
	CompareMapName : CompareMapName,
	GetBeaconResouces : GetBeaconResouces,
	CompareLanguage : CompareLanguage,
	GetSupportList : GetSupportList,
	GetFDResources : GetFirstDirectionResources,
	GetMainResources : GetMainResources,
	GetNameResources : GetNameResources,
	CheckExistPatient : CheckExistPatient,
	GetRecords : GetRecords,
	ReadFile : ReadFile,
	CheckPictureExist : CheckPictureExist,
	GetPicture : GetPicture,
	GetPicturePath : GetPicturePath,
	GetFileList: GetFileList,
}

module.exports = Resourcemodule;