/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: ['Fonts'],

    views: ['Preview', 'ControlPanel', 'Theme'],

    refs: [{
        ref     : 'preview',
        selector: 'preview'
    },{
        ref     : 'controlpanel',
        selector: 'controlpanel'
    }],

    init: function() {
        // Set the Current theme to null at application start
        App.currTheme = null;
        
        this.control({
            // After Control Panel is Render Remove Loading Mask
            'controlpanel': {
                render: function(){
                    Ext.get('mainapp-loading').remove();
                    Ext.get('mainapp-loading-mask').fadeOut({remove:true});
                }
            },
            // After priview window ei render load the default theme
            'preview': {
                render: function(){
                    this.previewLoad();
                }
            },
            // Tuggle Btns to change the Base Theme
            'controlpanel button[action=changebase]': {
                click: function(button){
                    this.changeBase(button);
                }
            },
            // To reload the preview using the current theme
            'controlpanel button[action=preview]': {
                click: function(){
                    this.previewLoad();
                }
            },
            // Download handeler
            'controlpanel button[action=download]': {
                click: function(){
                    Ext.Msg.alert('Debbuging', 'This button will handle the download request.');
                }
            }
        });
    },
    // Fuction to change the Base Theme
    changeBase: function(button){
        App.currTheme = button.value;
        this.previewLoad();
    },
    // Preveiw paneel update
    previewLoad:function(){
        // defaul theme
        App.currTheme = (App.currTheme == null) ? 'ext-all-gray' : App.currTheme;
        var previewpanel = Ext.getCmp('previewpanel');
        previewpanel.update({ html:'<iframe src="theme.php?theme='+App.currTheme+'" frameborder="0" width="100%" height="100%"></iframe>' });

    }
});

