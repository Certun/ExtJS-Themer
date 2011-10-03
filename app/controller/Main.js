/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez "Certun"
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.controller.Main', {
    extend  : 'Ext.app.Controller',
    stores  : ['Fonts'],
    views   : ['Preview', 'ControlPanel'],
    refs    : [{
        // To reference this use getPreview()
        ref     : 'preview',
        selector: 'preview'
    },{
        // To reference this use getCotrolpanel()
        ref     : 'controlpanel',
        selector: 'controlpanel'
    }],
    init: function() {
        // Set the Current theme to null at application start
        App.currTheme = null;
        // Cotroller listeners events
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
                    this.themeDowload();
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
        // Set Defuault Theme
        App.currTheme = (App.currTheme == null) ? 'ext-all-gray' : App.currTheme;
        // Update preview panel with new theme
        this.getPreview().update({ html:'<iframe src="theme.php?theme='+App.currTheme+'" frameborder="0" width="100%" height="100%"></iframe>' });
    },
    // Download request
    themeDowload: function(){
        // TODO: this will handle the dowload request
        Ext.Msg.alert('Debbuging', 'This button will handle the download request.');
    }
});