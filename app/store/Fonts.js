/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez "Certun"
 * Date: 10/2/11
 * Time: 11:30 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.store.Fonts', {
    extend: 'Ext.data.Store',
    model: 'App.model.Fonts',
    autoLoad: true,
    fields: ['value', 'name'],
    data : [
        {"value":"Arial, Helvetica, sans-serif",            "name":"Arial, Helvetica, Sans"},
        {"value":"'Comic Sans MS', cursive",                "name":"'Comic Sans MS', cursive"},
        {"value":"'Courier New', Courier, monospace",       "name":"'Courier New', Courier, monospace"},
        {"value":"'Trebuchet MS', Helvetica, sans-serif",   "name":"'Trebuchet MS', Helvetica, sans-serif"},
        {"value":"Wingdings, 'Zapf Dingbats', sans-serif",  "name":"Wingdings, 'Zapf Dingbats', sans-serif"}
        //...
    ]
});