/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez "Certun"
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.ControlPanel', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.controlpanel',
    store       : 'Fonts',
    width       : 250,
    items: [{
        xtype       : 'fieldset',
        defaultType : 'button',
        layout      : 'column',
        defaults    : { columnWidth: .33, enableToggle: true, toggleGroup:1 },
        title       : '1. Choose Base Thame',
        items:[{
            text    : 'Blue',
            margin  : '0 5 0 0',
            value   : 'ext-all',
            action  : 'changebase'
        },{
            text    : 'Gray',
            margin  : '0 5 0 5',
            value   : 'ext-all-gray',
            action  : 'changebase',
            pressed : true
        },{
            text    : 'Dark (Access)',
            margin  : '0 0 0 5',
            value   : 'ext-all-access',
            action  : 'changebase'
        }]
    },{
        xtype       : 'fieldset',
        collapsible : false,
        collapsed   : false,
        defaults    : {
            collapsible     : true,
            titleCollapse   : true,
            collapsed       : true,
            frame           : true,
            margin          : '0 0 5 0',
            width           : '100%',
            bodyStyle       : { padding:5 }
        },
        title : '2. Choose Theme Options',
        items : [{
            title       : 'Fonts',
            layout      : 'anchor',
            defaultType : 'combo',
            defaults    : {
                editable    : false,
                labelAlign  : 'topo',
                anchor      : '100%',
                store       : 'Fonts',
                displayField: 'name',
                valueField  : 'value',
                emptyText   : 'Select'
            },
            items:[{
                fieldLabel  : 'Default Font'
            },{
                fieldLabel  : 'Titles Font'
            },{
                fieldLabel  : 'Body Font'
            },{
                fieldLabel  : 'Buttons Font'
            }]
        },{
            title:'Colors',
            html:'hello world'
        },{
            title:'Corner Radius',
            html:'hello world'
        },{
            title:'Headers Styles',
            html:'hello world'
        },{
            title:'Body Styles',
            html:'hello world'
        },{
            title:'Buttons',
            html:'hello world'
        },{
            title:'Drop Shadows',
            html:'hello world'
        },{
            title:'Erors',
            html:'hello world'
        },{
            title:'Other',
            html:'hello world'
        }]
    },{
        xtype       : 'fieldset',
        defaultType : 'button',
        layout      : 'column',
        defaults    : { columnWidth: .5 },
        title       : '3. Preview Changes or Download Theme',
        items:[{
            text    : 'Preview',
            margin  : '0 5 0 0',
            action  : 'preview'
        },{
            text    : 'Download',
            margin  : '0 0 0 5',
            action  : 'download'
        }]
    }]
});