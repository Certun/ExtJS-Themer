/**
* @class Portal.lib.panel.AppPanel
*
* Special panel to use when your panel uses controllers. 
* On render the controllers array will be processed and each controller instance will be added and initiated into the
* main Ext.applications controllers array.
*
* @namespace Portal.lib.panel
* @author Fredric Berling
*/

Ext.define('Portal.lib.panel.AppPanel' , {
	extend	: 'Ext.panel.Panel',
	//Array of controllers used in this xtype (string)
	controllers:[],
	initComponent: function(){
        this.callParent(arguments);
        this.on('afterrender', this.registerControllers, this);
    },
    registerControllers: function(){
        //Instanciate the controllers into the global Applications controllers array
        Ext.each(this.controllers, function(control){
            var controller = Portal.app.controllers.get(control);
            if (!controller) {
                controller = Ext.create(control, {
                    application: Portal.app,
                    id: control
                });
                Portal.app.controllers.add(controller);
            }
       		controller.init(); //Run init on the controller         
        }, this);
    }
	
});