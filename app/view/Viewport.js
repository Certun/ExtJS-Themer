/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.define('App.view.Viewport', {
    extend  : 'Ext.container.Viewport',
    layout  :'border',
    defaults: { border: false, bodyStyle: { padding:5 }},
    items   :[{
        xtype   :'container',
        region  :'north',
        html    :'<h1>ExtJS 4 Themer</h1>',
        margin  : '3 3 0 3'
    },{
        xtype   :'controlpanel',
        region  :'west',
        title   :'Controls',
        margin  : '3 0 3 3'
    },{
        xtype   :'preview',
        region  :'center',
        title   :'Theme Preview',
        margin  : '3 3 3 0'
    }]
});
