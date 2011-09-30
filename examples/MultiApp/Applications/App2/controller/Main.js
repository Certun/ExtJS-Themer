Ext.define('App2.controller.Main', {
    extend: 'Ext.app.Controller',
  
   	init: function() {
		 this.control({
		      'APP2 button': {
		       		click: function(btn){
						alert('You clicked on button in tab ' + btn.up('APP2').title)
			
					}
		       }
		 });
    }

});