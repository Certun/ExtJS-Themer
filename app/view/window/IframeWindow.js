/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J. Rodriguez (Certun)
 * File:
 * Date: 10/16/11
 * Time: 10:06 PM
 */
Ext.define('App.view.window.IframeWindow',{
    extend      : 'Ext.window.Window',
    alias       : 'widget.iframewindow',
    closeAction : 'hide',
    bodyStyle   : 'background-color:#fff',
    height      : 600,
    width       : 600
});