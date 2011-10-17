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
    views   : ['Preview', 'ControlPanel', 'window.IframeWindow'],
    refs    : [{
        // To reference this use this.getPreview() or me.getPreview()
        ref     : 'preview',
        selector: 'preview'
    },{
        // To reference this use this.getControlpanel() or me.getControlpanel()
        ref     : 'controlpanel',
        selector: 'controlpanel'
    },{
        // To reference this use this.getControlpanel() or me.getControlpanel()
        ref     : 'controlpaneloptions',
        selector: 'controlpanel fieldset[itemId="options"]'
    },{
        // To reference this use this.getPreviewbtn() or me.getPreviewbtn()
        ref     : 'previewbtn',
        selector: 'controlpanel button[action=preview]'
    },{
        // To reference this use this.getDownloadbtn() or me.getDownloadbtn()
        ref     : 'downloadbtn',
        selector: 'controlpanel button[action=download]'
    }],
    init: function() {
        // Set the Current theme to null at application start
        App.workingTheme = null;
        App.themeTemplate= null;
        var me = this;
        // Cotroller listeners events
        me.control({
            // After Control Panel is Render Remove Loading Mask
            'controlpanel': {
                render: function(){
                    Ext.get('mainapp-loading').remove();
                    Ext.get('mainapp-loading-mask').fadeOut({remove:true});
                    this.getControlpaneloptions().disable();
                    me.iframewindow = Ext.create('App.view.window.IframeWindow')
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
                    this.getPreviewbtn().enable();
                    this.getControlpaneloptions().enable();
                }
            },
            // To reload the preview using the current theme
            'controlpanel button[action=preview]': {
                click: function(){
                    var form = this.getControlpanel().getForm(); // get the form
                    form.setValues([{'workingTheme':App.workingTheme}]);
                    if (form.isValid()) { // make sure the form is valid data before submitting
                        form.submit({
                            waitTitle       : 'Compiling...',
                            waitMsg         : 'Please Don\'t Go, Be Right back!',
                            submitEmptyText : false,
                            success : function(form, action) {
                                // The submit success will return the workigTheme css
                                App.workingTheme = action.result.theme;
                                me.getDownloadbtn().enable();
                                me.previewLoad();
                            },
                            failure : function(form, action) {
                                Ext.Msg.alert(action.result.error.title, action.result.error.msg);
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
            },
            // Download handeler
            'controlpanel button[action=reset]': {
                click: function(){
                    this.getControlpanel().getForm().reset();
                    var f = this.getControlpanel().getForm().getFields();
                    for (var i in f.items){
                        f.items[i].setFieldStyle({background:'#FFFFFF', color:'#000000'});
                    }
                }
            },
            // botton toolbar btns handlers
            'viewport button[action=sourceCode]': {
                click: function(){
                    window.location = 'https://github.com/Certun/ExtJS-Themer'
                }
            },
            'viewport button[action=credits]': {
                click: function(){
                    this.showIframe('Credits','credits.html')
                }
            },
            'viewport button[action=help]': {
                click: function(){
                    this.showIframe('Help','help.html')
                }
            }
        });
    },
    // Fuction to change the Base Theme
    changeBase: function(button){
        App.workingTheme    = null;
        App.themeTemplate   = button.value
        var field = this.getControlpanel().getForm().findField('themeTemplate');
        field.setValue(App.themeTemplate);
        this.previewLoad();
    },
    // Preveiw paneel update
    previewLoad:function(){
        // Set Defuault Theme
        if (App.themeTemplate == null){
            App.workingTheme = 'resources/css/ext-all.css'
        }else{
            if (App.workingTheme == null){
                switch (App.themeTemplate){
                    case 'gray':
                        App.workingTheme = 'resources/css/ext-all-gray.css';
                    break;
                    case 'access':
                        App.workingTheme = 'resources/css/ext-all-access.css';
                    break;
                    default:
                    App.workingTheme = 'resources/css/ext-all.css'
                }
            }
        }
        var time = new Date();
        // Update preview panel with new theme
        this.getPreview().update({
            html:'<iframe src="theme.php?theme='+App.workingTheme+'?'+Ext.Date.format(time, 'U')+'" frameborder="0" width="100%" height="100%"></iframe>'
        });
    },
    // Download request
    themeDowload: function(){
        // TODO: this will handle the dowload request
        Ext.Ajax.request({
            url: 'app/data/zip.php',
            success: function(response){
                var r = Ext.JSON.decode(response.responseText);
                window.location = r.file;
            }
        });
    },
    showIframe: function(title, url){
        var w = this.iframewindow;
        w.setTitle(title);
        w.update({html:'<iframe src="'+url+'" frameborder="0" width="100%" height="100%"></iframe>'});
        w.show();
    }
});