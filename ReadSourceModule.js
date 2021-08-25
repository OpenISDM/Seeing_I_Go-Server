var Fin = require('fs');
var Path = require('path');
//var XmlDocument = require('xmldoc');
const utf8 = "utf8"

var MapData = Fin.readFileSync('./CurrentMaps.json', utf8);

var json = JSON.parse(MapData);

var CompareMapName = function (MapName) {
	const filter = json.Maps.filter(ele => ele.Name == MapName);
	if (filter.length >= 1) {
		return true;
	}
	return false;
}

var CompareLanguage = function (LanguageName) {
	console.log(LanguageName);
	const filter = json.Languages.filter(ele => ele.Name == LanguageName);

	if (filter.length >= 1) {
		return true;
	}
	return false;
}

var ReadFile = function (Path) {
	return Fin.readFileSync(Path, utf8);
}

var GetSupportList = function () {
	var Path = "./ServerSource.xml";
	return ReadFile(Path);
}

var GetMainResources = function (MapName, isBeta = false) {
	console.log(">>GetMainResources");
	if (isBeta) var Path = "./AppResources/Beta/" + MapName + "/" + MapName + ".xml";
	else var Path = "./AppResources/" + MapName + "/" + MapName + ".xml";

	console.log("Main resource Path : " + Path);

	return ReadFile(Path);
}

var GetFirstDirectionResources = function (MapName, Language, isBeta = false) {
	console.log(">>GetFirstDirectionResources");
	console.log("isBeat" + isBeta);
	if(isBeta) var Path = "./AppResources/Beta/" + MapName + "/" + MapName + "_FD_" + Language + ".xml";
	else var Path = "./AppResources/" + MapName + "/" + MapName + "_FD_" + Language + ".xml";

	console.log("FD Resources Path : " + Path);
	return ReadFile(Path);
}

var GetNameResources = function (MapName, Language, isBeta = false) {
	console.log(">>GetNameResources");
	if(isBeta) var Path="./AppResources/Beta/" + MapName + "/" + MapName + "_info_" + Language + ".xml";
	else 	var Path = "./AppResources/" + MapName + "/" + MapName + "_info_" + Language + ".xml";

	console.log("Name Resources Path : " + Path);
	return ReadFile(Path);
}


//TODO : I have to implement this function.
var CheckPictureExist = function (buildingName, fileName, isBeta) {
	//var resoucePath = Path.join(__dirname, 'AppResouces', buildingName, 'DirectionPictures');
	return true;
}

var GetPicture = function (buildingName, fileName) {
	console.log(">>GetPicture");
	console.log("file path :" + __dirname + "/AppResources/" + buildingName + "/" + "pictures/" + fileName);
	return ReadFile(__dirname + "/AppResources/" + buildingName + "/DirectionPictures/" + fileName);
}

var GetPicturePath = function (buildingName, fileName, isBeta) {
	console.log(">>GetPicturePath");
	console.log( __dirname + "/AppResources/" + buildingName + "/DirectionPictures/" + fileName)	
	if(isBeta) return __dirname + "/AppResources/Beta/" + buildingName + "/DirectionPictures/" + fileName;
	else return  __dirname + "/AppResources/" + buildingName + "/DirectionPictures/" + fileName
}

var GetFileList = function (buildingName, isBeta = false) {
	console.log(">>GetFileList");
	if (isBeta) var resoucePath = Path.join(__dirname, 'AppResources', 'Beta', buildingName, 'DirectionPictures');
	else var resoucePath = Path.join(__dirname, 'AppResources', buildingName, 'DirectionPictures');
	console.log('resouce path : ' + resoucePath);
	var Picturefiles = Fin.readdirSync(resoucePath)
	return {
		buildingName: buildingName,
		PictureList: Picturefiles
	};
}

export default {
	CompareMapName: CompareMapName,
	CompareLanguage: CompareLanguage,
	GetSupportList: GetSupportList,
	GetFDResources: GetFirstDirectionResources,
	GetMainResources: GetMainResources,
	GetNameResources: GetNameResources,
	ReadFile: ReadFile,
	CheckPictureExist: CheckPictureExist,
	GetPicture: GetPicture,
	GetPicturePath: GetPicturePath,
	GetFileList: GetFileList,
}
