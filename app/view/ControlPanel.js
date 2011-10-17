/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez "Certun"
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.ControlPanel', {
    extend      : 'Ext.form.Panel',
    requires    : 'App.ux.ColorPickerField',
    alias       : 'widget.controlpanel',
    store       : 'Fonts',
    autoScroll  : true,
    defaults    : { width:'auto' },
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
        itemId: 'options',
        items : [{
            xtype       : 'colorfield',
            name        : 'base-color',
            labelAlign  : 'topo',
            anchor      : '100%',
            emptyText   : 'Base Color'
        },{
            xtype       : 'combo',
            editable    : false,
            labelAlign  : 'topo',
            anchor      : '100%',
            store       : 'Fonts',
            displayField: 'name',
            valueField  : 'value',
            name        : 'font-family',
            emptyText   : 'Font Family'
        },{
            title       : 'Panels',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Header Bkgd',
                name        : 'panel-header-background-gradient'
            },{
                fieldLabel  : 'Header Color',
                name        : 'panel-header-color'
            },{
                fieldLabel  : 'Border Color',
                name        : 'panel-border-color'
            },{
                fieldLabel  : 'Frame Bkgd',
                name        : 'panel-frame-background-color'
            }]
        },{
            title       : 'Windows',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Header Bkgd',
                name        : 'window-background-color'
            },{
                fieldLabel  : 'Header Color',
                name        : 'window-header-color'
            }]
        },{
            title       : 'Menu',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Active Bkgd',
                name        : 'menu-item-active-background-color'
            },{
                fieldLabel  : 'Active Border',
                name        : 'menu-item-active-border-color'
            }]
        },{
            title       : 'Progress Bar',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Border Color',
                name        : 'progress-border-color'
            },{
                fieldLabel  : 'Bar Color',
                name        : 'progress-background-color'
            }]
        },{
            title       : 'Toolbar',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Bkgd Color',
                name        : 'toolbar-background-gradient'
            },{
                fieldLabel  : 'Septarator',
                name        : 'toolbar-separator-color'
            },{
                fieldLabel  : 'Text Color',
                name        : 'toolbar-text-color'
            }]
        },{
            title       : 'Form',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Header Color',
                name        : 'fieldset-header-color'
            },{
                fieldLabel  : 'Border Color',
                name        : 'boundlist-border-color'
            }]
        },{
            title       : 'Accordion',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Header Color',
                name        : 'accordion-header-background-color'
            }]
        },{
            title       : 'Tabs',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Base Color',
                name        : 'tab-base-color'
            },{
                fieldLabel  : 'Active Color',
                name        : 'tab-color-active'
            },{
                fieldLabel  : 'Bkdg Color',
                name        : 'tab-background-gradient'
            },{
                fieldLabel  : 'Active Bkgd',
                name        : 'tab-background-gradient-active'
            }]
        },{
            title       : 'Buttons',
            defaults    : { width: 190, labelWidth:80 },
            defaultType : 'colorfield',
            items:[{
                fieldLabel  : 'Base Color',
                name        : 'button-default-base-color'
            },{
                fieldLabel  : 'Color Over',
                name        : 'button-default-base-color-over'
            },{
                fieldLabel  : 'Pressed Color',
                name        : 'button-default-base-color-pressed'
            },{
                fieldLabel  : 'Border Color',
                name        : 'button-default-border-color'
            },{
                fieldLabel  : 'Border Over',
                name        : 'button-default-border-color-over'
            }]
        },{
            title       :'Custom Styles',
            items:[{
                xtype       : 'textarea',
                width       : 190,
                height      : 200,
                name        : 'custom-css',
                emptyText   : 'Copy and Paste your custom CSS style sheet'
            }]
        },{
            xtype       : 'button',
            text        : 'Reset Options',
            anchor      : '100%',
            action      : 'reset'
        }]
    },{
        xtype           : 'fieldset',
        defaultType     : 'button',
        layout          : 'column',
        defaults        : { columnWidth: .5 },
        title           : '3. Preview Changes or Download Theme',
        items:[{
            text        : 'Preview',
            margin      : '0 5 0 0',
            action      : 'preview',
            disabled    : true
        },{
            text        : 'Download',
            margin      : '0 0 0 5',
            action      : 'download',
            disabled    : true
        }]
    }]
});