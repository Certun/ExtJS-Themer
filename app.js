/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.Loader.setConfig({
    enabled			: true,
    App: 'app'
});
Ext.application({
    name: 'App',
    appFolder: 'app',
    controllers: [
        'Main'
    ],
    launch: function() {
        Ext.create('App.view.Viewport', {});
        App = this;
    }
});

