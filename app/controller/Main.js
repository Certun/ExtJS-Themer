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
        // To reference this use this.getPreview() or me.getPreview()
        ref     : 'preview',
        selector: 'preview'
    },{
        // To reference this use this.getControlpanel() or me.getControlpanel()
        ref     : 'controlpanel',
        selector: 'controlpanel'
    }],
    init: function() {
        // Set the Current theme to null at application start
        App.currTheme = null;
        var me = this;
        // Cotroller listeners events
        me.control({
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
                    me.previewLoad();
                }
            },
            // Tuggle Btns to change the Base Theme
            'controlpanel button[action=changebase]': {
                click: function(button){
                    me.changeBase(button);
                }
            },
            // To reload the preview using the current theme
            'controlpanel button[action=preview]': {
                click: function(){
                    var form = this.getControlpanel().getForm(); // get the form
                    form.setValues([{'currTheme':App.currTheme}])


                    if (form.isValid()) { // make sure the form is valid data before submitting
                        form.submit({
                            waitMsg: 'Sending...',
                            success: function(form, action) {
                                // The submit success will return the
                                // /temp/folder/theme where sass compiled.
                                // here we set App.currTheme to the result.theme value
                                App.currTheme = action.result.theme;
                                me.previewLoad();
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert(action.result.error.title, action.result.error.msg);
                                //Ext.Msg.alert('Debugging', 'Failed');
                            }
                        });
                    } else { // display error alert if the data is invalid
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
                    }
                }
                   
            },
            // Download handeler
            'controlpanel button[action=download]': {
                click: function(){
                    me.themeDowload();
                }
            }
        });
    },
    // Fuction to change the Base Theme
    changeBase: function(button){
        App.currTheme = button.value;
        var field = this.getControlpanel().getForm().findField('currTheme');
        field.setValue(App.currTheme)
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