/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 9/29/11
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    views: ['Preview', 'ControlPanel', 'Theme'],

    refs: [{
        ref     : 'preview',
        selector: 'preview'
    },{
        ref     : 'controlpanel',
        selector: 'controlpanel'
    }],

    init: function() {
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
                    var theme = 'ext-all-gray';
                    this.previewLoad(theme);
                }
            },
            // Tuggle Btns to change the Base Theme
            'controlpanel button[action=changebase]': {
                click: this.changeBase
            }
        });
    },
    // Fuction to change the Base Theme
    changeBase: function(button){
        var theme = button.value;
        this.previewLoad(theme);
    },
    previewLoad:function(theme){
        var previewpanel = Ext.getCmp('previewpanel');
        previewpanel.update({ html:'<iframe src="theme.php?theme='+theme+'" frameborder="0" width="100%" height="100%"></iframe>' });
    },
    alert:function(){
        alert('');
    }

});

