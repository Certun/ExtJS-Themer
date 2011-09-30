
// Points out in wich directory each namespace belongs. Here i use one directory per "App". 
Ext.Loader.setPath('App1','Applications/APP1')
Ext.Loader.setPath('App2','Applications/APP2')
Ext.Loader.setPath('App3','Applications/APP3')

Ext.application({
    name: 'Portal',
    appFolder: 'Portal',
   	controllers:[
		'Main'
	],
	launch:function(){
		Portal.app = this  //Added for global reference to application instance. (This should be possible to do smarter)
	
	},
    autoCreateViewport: true
});
