var app = angular.module('todoApp', [])
  .component('convertisseur',{
	template : '<div class="row text-center" style="padding-top:3%;">'+
			'<div class="row" >'+
				'<div class="col-xs-4">'+
				'</div>'+
				'<div class="col-xs-2 text-center">'+
					'<label>Salaire brut annuel: </label>'+
				'</div>'+
				'<div class="col-xs-2">'+
					'<input type="text" style="color:black;" ng-model="$ctrl.valueBrut" ng-keyup="$ctrl.convert()" size="6" maxlength="6"/>'+
			'	</div>'+
				'<div class="col-xs-4">'+
				'</div>'+
			'</div>'+
			'<div class="row" style="padding-top:2%;" >'+
				'<div class="col-xs-4">'+
					
				'</div>'+
				'<div class="col-xs-2 text-center">'+
					'<label>Salaire net annuel: </label>'+
				'</div>'+
				'<div class="col-xs-2">'+
					'<p>{{$ctrl.valueNetAnnuel}} euros</p>'+
				'</div>'+
				'<div class="col-xs-4">'+
				'</div>'+
			'</div>'+
			'<div class="row" style="padding-top:2%;" >'+
				'<div class="col-xs-4">'+
					
				'</div>'+
				'<div class="col-xs-2 text-center">'+
					'<label>Salaire net mensuel: </label>'+
				'</div>'+
				'<div class="col-xs-2">'+
					'<p>{{$ctrl.valueNetMensuel}} euros</p>'+
				'</div>'+
				'<div class="col-xs-4">'+
				'</div>'+
			'</div>		'	+
			'<div style="color:red; padding-top:2%;">{{$ctrl.error}}</div>'+
		'</div>',
		
	controller :  function ConvertisseurController(convertisseurService) {
	    //modele
		
		this.valueNetAnnuel = 0;
		this.valueNetMensuel = 0;
		//methodes
		this.convert = function(){
			var result = convertisseurService.convert(this.valueBrut);
			this.valueNetAnnuel = result.valueNetAnnuel;
			this.valueNetMensuel = result.valueNetMensuel;
			this.error=result.error;
		};
  }
  });

 