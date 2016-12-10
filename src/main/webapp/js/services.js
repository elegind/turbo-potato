app.factory('convertisseurService', function() {
	var convertService = {};
	
	convertService.convert = function(valueBrut){
		this.valueBrut=valueBrut;
		if(this.valueBrut != undefined && $.isNumeric(this.valueBrut)){
			this.valueNetAnnuel = (parseInt(this.valueBrut)*0.77).toFixed(0);
			this.valueNetMensuel = (this.valueNetAnnuel / 12).toFixed(0);
			this.error = "";
		}
		else if(this.valueBrut === ""){
			this.error = "";
			this.valueNetAnnuel = 0;
			this.valueNetMensuel =0;
		}
		else{
			this.error = "Entrez un nombre valide";
		}
	};
    return convertService;
});