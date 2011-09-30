Ext.define('App3.controller.Main', {
    extend: 'Ext.app.Controller',
  
  	init: function() {
		 this.control({
		      'APP3 button': {
		       		click: function(btn){
						alert('You clicked on button in tab ' + btn.up('APP3').title)
			
					}
		       }
		 });
    }

});