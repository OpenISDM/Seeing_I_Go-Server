
async function getPolicy(request, response){
    response.sendFile(path.join(__dirname + '../../static/PrivacyPolice.html'));	
}

export default {
    getPolicy
}