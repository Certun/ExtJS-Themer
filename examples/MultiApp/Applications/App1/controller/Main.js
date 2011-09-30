Ext.define('App1.controller.Main', {
    extend: 'Ext.app.Controller',
  
   	init: function() {
		 this.control({
		      'APP1 button': {
		       		click: function(btn){
						alert('You clicked on button in tab ' + btn.up('APP1').title)
			
					}
		       }
		 });
    }

});
