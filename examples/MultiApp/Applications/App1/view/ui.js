Ext.define('App1.view.ui', {
    extend: 'Portal.lib.panel.AppPanel',  //This is what makes the controllers work. 
	alias:'widget.APP1',
    title: 'Application 1',
    controllers: ['App1.controller.Main'],
	dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            text: 'Button handled by App1 controller'
        }]
    }]
    
});