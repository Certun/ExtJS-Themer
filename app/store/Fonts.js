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
        {"value":"Georgia, serif", "name":"Georgia, serif"},
        {"value":"\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif", "name":"\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif"},
        {"value":"\"Times New Roman\", Times, serif", "name":"\"Times New Roman\", Times, serif"},
        {"value":"Arial, Helvetica, sans-serif", "name":"Arial, Helvetica, sans-serif"},
        {"value":"\"Comic Sans MS\", cursive, sans-serif", "name":"\"Comic Sans MS\", cursive, sans-serif"},
        {"value":"\"Courier New\", Courier, monospace", "name":"\"Courier New\", Courier, monospace"},
        {"value":"\"Lucida Console\", Monaco, monospace", "name":"\"Lucida Console\", Monaco, monospace"}
        //...
    ]
});