/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.ControlPanel', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.controlpanel',
    width       : 250,
    items: [{
        xtype       : 'fieldset',
        defaultType : 'button',
        layout      : 'column',
        defaults    : { columnWidth: .33, enableToggle: true, toggleGroup:1 },
        title       : '1. Choose Base Thame',
        items:[{
            text:'Blue',
            margin:'0 5 0 0'
        },{
            text:'Gray',
            margin:'0 5 0 5'
        },{
            text:'Access',
            margin:'0 0 0 5'
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
        title   : '2. Choose Theme Options',
        items   : [{
            title:'Fonts',
            html:'hello world'
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
            text:'Preview',
            margin:'0 5 0 0'
        },{
            text:'Download',
            margin:'0 0 0 5'
        }]
    }]
});