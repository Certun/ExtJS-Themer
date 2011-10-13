/**
 * @class Ext.ux.form.ColorPickerField
 * @extends Ext.form.field.Picker This class makes Ext.ux.AdvancedColorPicker available
 *          as a form field.
 * @license: BSD
 * @author: Olav Snoek (extjs id: osnoekie)
 * @constructor Creates a new ColorPickerField
 * @param {Object}
 *            config Configuration options
 * @version 1.0.0
 */

Ext.define('App.view.ColorPickerField', {
	extend          :'Ext.form.field.Picker',
	requires        : ['App.view.AdvancedColorPicker'],
	alias           : 'widget.colorfield',
    matchFieldWidth : false,
	createPicker: function() {
        var me = this;
        
        return Ext.create('App.view.AdvancedColorPicker', {
            floating: true,
            focusOnShow: true,
            baseCls : Ext.baseCSSPrefix + 'colorpicker',
        	listeners: {
                scope: me,
                select: me.onSelect,
                change : function(){alert('')
                }
            }
        })
	},
    onSelect: function(picker, value) {
        var me = this, hex = '#' + value;
        var fontColor = me.fontColor(hex);
        me.setFieldStyle({background:hex, color:fontColor});
        me.setValue(hex);
		me.fireEvent('select', me, hex);
		me.collapse();
    },
    fontColor: function(hex){
        function hexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
        function hexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
        function hexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }
        function cutHex(h) { return (h.charAt(0)=="#") ? h.substring(1,7) : h}
        var R = hexToR(hex),
            G = hexToG(hex),
            B = hexToB(hex);
        var color = 0.213 * R + 0.715 * G + 0.072 * B < 130 ? '#FFFFFF' : '#000000';
        return color;
    }
});