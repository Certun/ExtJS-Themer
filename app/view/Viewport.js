/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.Viewport', {
    extend  : 'Ext.container.Viewport',
    layout  : 'border',
    defaults: { border: false, bodyStyle: { padding:5 }},
    items   : [{
        xtype   :'container',
        region  :'north',
        id      : 'themer_header',
        height  : 71,
        margin  : '3 3 0 3'
    },{
        xtype   :'controlpanel',
        region  :'west',
        title   :'Theme Options',
        margin  : '3 0 0 3',
        url     : 'app/data/builder.php'
    },{
        xtype   :'preview',
        id      : 'previewpanel',
        region  :'center',
        title   :'Theme Preview',
        margin  : '3 3 0 0'
    },{
        xtype   :'panel',
        region  :'south',
        height  : 25,
        margin  : '0 3 0 3',
        dockedItems:[{
            xtype:'toolbar',
            items:[{
                //xtype: 'tbtext',  disabled gray look, looks better  :-)
                text: 'ExtJS 4 Themer is a GPLv3 script',
                disabled:true
            },'->','-',{

                text: 'Credits',
                action:'credits'
            },'-',{
                text: 'Help',
                action:'help'
            },'-',{
            text: 'Source Code',
                action:'sourceCode'
            },'-']
        }]
    }]
});
