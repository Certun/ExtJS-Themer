Ext.define('App2.view.ui', {
    extend: 'Portal.lib.panel.AppPanel',
	alias:'widget.APP2',
    title: 'Application 2',
    controllers: ['App2.controller.Main'],
	dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            text: 'Button handled by App2 controller'
        }]
    }]
    
});