/**
* @class Portal.controller.Main
* @namespace Portal.controller
* @author Fredric Berling
*/
Ext.define('Portal.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [
    {
        ref: 'MainTabPanel',
        selector: 'viewport panel[region=center]'
    }
    ],


    init: function() {
        this.control({
            'panel[region=west] button': {
                click: this.openApplication
            }
        });
    },

    openApplication: function(btn) {
        var entry = Ext.ComponentQuery.query(btn.text.toUpperCase());
        if (!entry.length) {
            var entry = this.getMainTabPanel().add(Ext.create(btn.text + '.view.ui'))
            this.getMainTabPanel().setActiveTab(entry)
        } else {
            this.getMainTabPanel().setActiveTab(entry[0])
        }
    }
});
