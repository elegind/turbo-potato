app.factory('convertisseurService', function() {
	var convertService = {};
	
	convertService.convert = function(valueBrut){
		var result = {};
		if($.isNumeric(valueBrut)){
			result.valueNetAnnuel = (parseInt(valueBrut)*0.77).toFixed(0);
			result.valueNetMensuel = (result.valueNetAnnuel / 12).toFixed(0);
			result.error = "";
		}
		else if(valueBrut === ""){
			result.error = "";
			result.valueNetAnnuel = 0;
			result.valueNetMensuel = 0;
		}
		else{
			result.error = "Entrez un nombre valide";
		}
		return result;
	};
    return convertService;
});