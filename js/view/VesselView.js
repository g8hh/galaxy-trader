//#include https://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js
//#include https://code.jquery.com/ui/1.11.0/jquery-ui.min.js
//NOTE: $() is reserved for Prototype, jQuery must use jQuery() format
//#include js/model/VesselModel.js

var VesselView = Class.create(BaseView, {
  initialize: function($super){
		$super();
    this.div = jQuery("<div>", {"class":"tg-box"});
    this.lblName = jQuery("<p>", {"class":"labelName tg-name"});
    this.div.append(this.lblName);

    this.divCargo = jQuery("<div>", {"class":"tg-box", width:"170px"});
    this.divCargo.css("border-color", "#AAAAAA");
    this.div.append(this.divCargo);
  },
  _updateFromModel: function( vModel ) {
		var name = vModel.name;
		if( vModel.getOwner() ) name += ", " + vModel.getOwner().name;
		this.lblName.text( name );
    this.div.prop('title', vModel.id);

    var blockThis = this;

    blockThis.divCargo.empty();
    blockThis.divCargo.append(jQueryIcon("ui-icon-circlesmall-close")).append("Cargo ("+vModel.getCurrentVolume()+"/"+vModel.maxQty+")");
		//append(jQuery("<p>Cargo ("+vModel.getCurrentVolume()+"/"+vModel.maxQty+")</p>")).addClass("tg-name");
    jQuery.each(vModel.getCargo(), function(key, value){

      var cmv1 = new CommodityView();
      cmv1.purchasePrice = true;
      cmv1.updateFromModel(value);
      cmv1.getDiv().width(160);

      blockThis.divCargo.append(cmv1.getDiv());
    });
  },
	_detachTarget: function( vessel ) {
		vessel.removeListener("updateVessel", this.onTargetUpdate.bind(this) );
	},
	_attachTarget: function( vessel ) {
		vessel.addListener("updateVessel", this.onTargetUpdate.bind(this) );
	},
  onTargetUpdate: function( evt ) {
    //console.log("update vessel view");
    this.updateFromModel( this.updateTarget, false );
  }
});
