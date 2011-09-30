Ext.define('App3.view.ui', {
    extend: 'Portal.lib.panel.AppPanel',
    alias: 'widget.APP3',
    title: 'Application 3',
    controllers: ['App3.controller.Main'],
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            text: 'Button handled by App3 controller'
        }]
    }]
});