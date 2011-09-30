/**
* @class Portal.view.Viewport
* @namespace Portal.view
* @author Fredric Berling
*/
Ext.define('Portal.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    defaults: {
        margins: '10 10 10 10'
    },
    items: [
    {
        title: 'Portal',
        xtype: 'panel',
        layout: 'vbox',
        layoutConfig: {
            align: 'stretch'
        },
        width: 200,
        defaults: {
            margins: '10 10 10 10'
        },
        region: 'west',
        items: [{
            xtype: 'button',
            text: 'App1'
        },
        {
            xtype: 'button',
            text: 'App2'
        },
        {
            xtype: 'button',
            text: 'App3'
        }]
    },
    {
        xtype: 'tabpanel',
        plain: true,
        region: 'center'
    }
    ]

});

