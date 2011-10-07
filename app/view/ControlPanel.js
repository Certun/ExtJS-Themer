/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez "Certun"
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.ControlPanel', {
    extend      : 'Ext.form.Panel',
    requires    : 'App.view.ColorPickerField',
    alias       : 'widget.controlpanel',
    store       : 'Fonts',
    autoScroll  : true,
    width       : 250,
    items: [{
        xtype   : 'textfield',
        name    : 'themeTemplate',
        hidden  : true,
        value   : 'default'
    },{
        xtype       : 'fieldset',
        defaultType : 'button',
        layout      : 'column',
        defaults    : { columnWidth: .33, enableToggle: true, toggleGroup:1 },
        title       : '1. Choose Base Thame',
        items:[{
            text    : 'Blue',
            margin  : '0 5 0 0',
            value   : 'default',
            action  : 'changebase'
        },{
            text    : 'Gray',
            margin  : '0 5 0 5',
            value   : 'gray',
            action  : 'changebase'
        },{
            text    : 'Dark',
            margin  : '0 0 0 5',
            value   : 'access',
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
            title       : 'Colors',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Base Color',
                name        : 'base_color'
            },{
                fieldLabel  : 'Title Color'
            },{
                fieldLabel  : 'Body Color'
            },{
                fieldLabel  : 'Buttons Color'
            }]
        },{
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
            title       : 'Corner Radius',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'numberfield',
            items:[{
                anchor      : '100%',
                fieldLabel  : 'Panels',
                minValue    : 0,
                maxValue    : 25
            },{
                anchor      : '100%',
                fieldLabel  : 'Windows',
                minValue    : 0,
                maxValue    : 25
            },{
                anchor      : '100%',
                fieldLabel  : 'Buttons',
                minValue    : 0,
                maxValue    : 25
            }]
        },{
            title       : 'Headers Styles',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'textfield',
            items:[{
                fieldLabel  : 'Margin',
                emptyText   : 'ei. 5 5 5 5'
            },{
                fieldLabel  : 'Padding',
                emptyText   : 'ei. 5 5 5 5'
            }]
        },{
            title       : 'Body Styles',
            defaults    : { width: 190, labelWidth:80 },
            items:[{
                xtype       : 'textfield',
                fieldLabel  : 'Margin',
                emptyText   : 'ei. 5 5 5 5'
            },{
                xtype       : 'textfield',
                fieldLabel  : 'Padding',
                emptyText   : 'ei. 5 5 5 5'
            }]
        },{
            title       : 'Buttons Styles',
            defaults    : { width: 190, labelWidth:80},
            items:[{
                xtype       : 'textfield',
                anchor      : '100%',
                fieldLabel  : 'Margin',
                emptyText   : 'ei. 5 5 5 5'
            },{
                xtype       : 'textfield',
                anchor      : '100%',
                fieldLabel  : 'Padding',
                emptyText   : 'ei. 5 5 5 5'
            }]
        },{
            title       :'Custom Styles',
            items:[{
                xtype       : 'displayfield',
                labelWidth  : 190,
                fieldLabel  : 'Copy and Paste your custom CSS style sheet'
            },{
                xtype       : 'textarea',
                width       : 190,
                height      : 200
            }]
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