/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.ControlPanel', {
    extend      : 'Ext.panel.Panel',
    alias       : 'widget.controlpanel',
    width       : 250,
    
    defaults    : {
        collapsible     : true,
        titleCollapse   : true,
        collapsed       : true,
        frame           : true,
        margin          : '0 0 5 0',
        width           : '100%',
        bodyStyle       : { padding:5 }
    },

    items: [{
        title:'Title',
        html:'hello world'
    },{
        title:'Title',
        html:'hello world'
    },{
        title:'Title',
        html:'hello world'
    },{
        title:'Title',
        html:'hello world'
    },{
        title:'Title',
        html:'hello world'
    },{
        title:'Title',
        html:'hello world'
    },{
        title:'Title',
        html:'hello world'
    }]
});