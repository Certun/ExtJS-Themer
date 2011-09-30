/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 9/29/11
 * Time: 3:56 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.Preview', {
    extend  : 'Ext.panel.Panel',
    alias   : 'widget.preview',

    html: '<iframe src="theme.html" frameborder="0" width="100%" height="100%"></iframe>'
});