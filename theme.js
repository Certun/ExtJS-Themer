Ext.require([
    'Ext.window.Window',
    'Ext.panel.Panel',
    'Ext.toolbar.*',
    'Ext.tree.Panel',
    'Ext.container.Viewport',
    'Ext.form.*',
    'Ext.tab.*',
    'Ext.slider.*',
    'Ext.layout.*',
    'Ext.button.*',
    'Ext.grid.*',
    'Ext.data.*',
    'EXt.util.*'
]);
Ext.onReady(function() {
    var menu = Ext.createWidget('menu', {
        items: [
            {text: 'Menu item'},
            {text: 'Check 1', checked: true},
            {text: 'Check 2', checked: false},
            '-',
            {text: 'Option 1', checked: true,  group: 'opts'},
            {text: 'Option 2', checked: false, group: 'opts'},
            '-',
            {
                text: 'Sub-items',
                menu: Ext.createWidget('menu', {
                    items: [
                        {text: 'Item 1'},
                        {text: 'Item 2'}
                    ]
                })
            }
        ]
    });
    var myData = [
         ['3m Co',71.72,0.02,0.03,'9/1 12:00am'],
         ['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am'],
         ['Altria Group Inc',83.81,0.28,0.34,'9/1 12:00am'],
         ['American Express Company',52.55,0.01,0.02,'9/1 12:00am'],
         ['American International Group, Inc.',64.13,0.31,0.49,'9/1 12:00am'],
         ['AT&T Inc.',31.61,-0.48,-1.54,'9/1 12:00am'],
         ['Boeing Co.',75.43,0.53,0.71,'9/1 12:00am'],
         ['Caterpillar Inc.',67.27,0.92,1.39,'9/1 12:00am'],
         ['Citigroup, Inc.',49.37,0.02,0.04,'9/1 12:00am'],
         ['E.I. du Pont de Nemours and Company',40.48,0.51,1.28,'9/1 12:00am']
     ];
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'price', type: 'float'},
           {name: 'change', type: 'float'},
           {name: 'pctChange', type: 'float'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
        sorters: {
            property : 'company',
            direction: 'ASC'
        },
        data: myData,
        pageSize: 8
    });
    var pagingBar = Ext.createWidget('pagingtoolbar', {
        store      : store,
        displayInfo: true,
        displayMsg : 'Displaying topics {0} - {1} of {2}'
    });
    var tree = Ext.create('Ext.tree.Panel', {
        title: 'TreePanel',
        root: {
            text: 'Root Node',
            expanded: true,
            children: [{
                text: 'Item 1',
                leaf: true
            }, {
                text: 'Item 2',
                leaf: true
            }, {
                text: 'Folder',
                children: [{
                    text: 'Item 3',
                    leaf: true
                }]
            }]
        }
    });
    var progressbar = Ext.createWidget('progressbar', {
        value: 0.5
    });
    Ext.createWidget( 'window', {
        x: 510, y: 10,
        width   : 180,
        height  : 170,
        minWidth: 150,
        minHeight: 150,
        maxHeight: 170,
        title: 'Window',
        bodyPadding: 5,
        html       : 'Click Submit for Confirmation Msg.',
        collapsible: true,
        closable   : false,
        draggable  : false,
        resizable: { handles: 's' },
        animCollapse: true,
        tbar: [{
            text: 'Toolbar'
        }],
        buttons: [{
            text   : 'Submit',
            id     : 'message_box',
            handler: function() {
                Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?');
            }
        }]
    }).show();

    Ext.create('Ext.container.Container', {
        layout:'absolute',
        renderTo: Ext.getBody(),
        autoScroll:true,
        width:895,
        height:1545,
        items:[{
            xtype: 'panel',
            x: 10, y: 10,
            width : 150,
            height: 170,
            title: 'Collapsed Panel',
            animCollapse: true,
            bodyPadding: 5,
            html       : 'Some content',
            collapsible: true
        },{
            xtype: 'panel',
            x: 170, y: 10,
            width : 130,
            height: 170,
            title: 'Masked Panel',
            bodyPadding: 5,
            html       : 'Some content',
            animCollapse: true,
            collapsible: true,
            listeners: {
                render: function(p) {
                    p.body.mask('Loading...');
                },
                delay: 2000
            }
        },{
            xtype: 'panel',
            x: 310, y: 10,
            width : 190,
            height: 170,
            title: 'Framed Panel',
            animCollapse: true,
            collapsible: true,
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                items: [{
                    text: 'test'
                }]
            },{            dock: 'right',
                xtype: 'toolbar',
                items: [{
                    text: 'test'
                }]
            },{
                dock: 'left',
                xtype: 'toolbar',
                items: [{
                    text: 'test'
                }]
            }],
            html       : 'Some content',
            frame      : true
        },{
            xtype: 'panel',
            x: 700, y: 10,
            border: false,
            width : 180,
            items: {
                xtype: 'datepicker'
            }
        },{
            xtype: 'form',
            id   : 'form-widgets',
            title: 'Form Widgets',
            x: 10, y: 885,
            width : 870,
            height: 650,
            frame: true,
            margin: '0 0 10 0',
            collapsible: true,
            tools: [
                {type:'toggle'},
                {type:'close'},
                {type:'minimize'},
                {type:'maximize'},
                {type:'restore'},
                {type:'gear'},
                {type:'pin'},
                {type:'unpin'},
                {type:'right'},
                {type:'left'},
                {type:'down'},
                {type:'refresh'},
                {type:'minus'},
                {type:'plus'},
                {type:'help'},
                {type:'search'},
                {type:'save'},
                {type:'print'}
            ],
            bodyPadding: '10 20',
            defaults: {
                anchor    : '98%',
                msgTarget : 'side',
                allowBlank: false
            },
            items: [{
                xtype: 'label',
                text : 'Plain Label'
            },{
                fieldLabel: 'TextField',
                xtype     : 'textfield',
                name      : 'someField',
                emptyText : 'Enter a value'
            },{
                fieldLabel: 'ComboBox',
                xtype: 'combo',
                store: ['Foo', 'Bar']
            },{
                fieldLabel: 'DateField',
                xtype     : 'datefield',
                name      : 'date'
            },{
                fieldLabel: 'TimeField',
                name: 'time',
                xtype: 'timefield'
            },{
                fieldLabel: 'NumberField',
                xtype     : 'numberfield',
                name      : 'number',
                emptyText : '(This field is optional)',
                allowBlank: true
            },{
                fieldLabel: 'TextArea',
                xtype     : 'textareafield',
                name      : 'message',
                cls       : 'x-form-valid',
                value     : 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)'
            },{
                fieldLabel: 'Checkboxes',
                xtype: 'checkboxgroup',
                columns: [100,100],
                items: [{boxLabel: 'Foo', checked: true},{boxLabel: 'Bar'}]
            },{
                fieldLabel: 'Radios',
                xtype: 'radiogroup',
                columns: [100,100],
                items: [{boxLabel: 'Foo', checked: true, name: 'radios'},{boxLabel: 'Bar', name: 'radios'}]
            },{
                hideLabel   : true,
                id          : 'htmleditor',
                xtype       : 'htmleditor',
                name        : 'html',
                enableColors: false,
                value       : 'Mouse over toolbar for tooltips.<br /><br />The HTMLEditor IFrame requires a refresh between a stylesheet switch to get accurate colors.',
                height      : 110
            },{
                xtype : 'fieldset',
                title : 'Plain Fieldset'
            },{
                xtype      : 'fieldset',
                title      : 'Collapsible Fieldset',
                collapsible: true
            },{
                xtype         : 'fieldset',
                title         : 'Checkbox Fieldset',
                checkboxToggle: true
            }],
            buttons: [{
                text   :'Toggle Enabled',
                handler: function() {
                    this.up('form').items.each(function(item) {
                        item.setDisabled(!item.disabled);
                    });
                }
            },{
                text   : 'Reset Form',
                handler: function() {
                    Ext.getCmp('form-widgets').getForm().reset();
                }
            },{
                text   : 'Validate',
                handler: function() {
                    Ext.getCmp('form-widgets').getForm().isValid();
                }
            }]
        },{
            xtype: 'panel',
            width : 870,
            height: 650,
            x: 10, y: 225,
            title : 'BorderLayout Panel',
            layout: 'border',
            collapsible: true,
            defaults: {
                collapsible: true,
                split      : true,
                layout:'fit'
            },
            items: [{
                title  : 'North',
                region : 'north',
                margins: '5 5 0 5',
                height : 120,
                items:[{
                    xtype: 'panel',
                    title: 'ProgressBar / Slider',
                    width: 450,
                    height: 200,
                    bodyPadding: 5,
                    layout     : {
                        type : 'vbox',
                        align: 'stretch'
                    },
                    items: [ progressbar, {
                        xtype    : 'slider',
                        hideLabel: true,
                        value    : 50,
                        margin   : '5 0 0 0'

                    }]
                }]
            },{
                title       : 'South',
                region      : 'south',
                collapseMode: 'mini',
                margins     : '0 5 5 5',
                height      : 110,
                items:[{
                    xtype: 'tabpanel',
                    activeTab: 0,
                    defaults: {
                        bodyStyle: 'padding:10px;'
                    },
                    enableTabScroll: true,
                    items: [{
                        title: 'Tab 1',
                        html : 'Tab panel'
                    },{
                        title   : 'Tab 2',
                        closable: true
                    },{
                        title   : 'Tab 3',
                        closable: true
                    },{
                        title   : 'Tab 4',
                        closable: true
                    },{
                        title   : 'Tab 5',
                        closable: true
                    },{
                        title   : 'Tab 6',
                        closable: true
                    }]
                }]
            },{
                title       : 'West',
                region      : 'west',
                collapseMode: 'mini',
                margins     : '0 0 0 5',
                width       : 160,
                items:[{
                    title : 'Accordion and TreePanel',
                    layout: 'accordion',
                    bodyStyle: {
                        'background-color': '#eee'
                    },
                    items: [
                        tree, {
                            title: 'Item 2',
                            html: 'Some content'
                        },{
                            title: 'Item 3',
                            html : 'Some content'
                        }
                    ]
                }]
            },{
                title  : 'East',
                region : 'east',
                margins: '0 5 0 0',
                width  : 150,
                items:[{
                    xtype: 'tabpanel',
                    activeTab: 0,
                    plain:true,
                    defaults: {
                        bodyStyle: 'padding:10px;'
                    },
                    items: [{
                        title: 'Tab 1'
                    },{
                        title: 'Tab 2'
                    }]
                }]
            },{
                title      : 'Center',
                region     : 'center',
                collapsible: false,
                items:[{
                    xtype: 'gridpanel',
                    title: 'GridPanel',
                    store: store,
                    columns: [
                        {header: "Company",      flex: 1, sortable: true, dataIndex: 'company'},
                        {header: "Price",        width: 75,  sortable: true, dataIndex: 'price'},
                        {header: "Change",       width: 75,  sortable: true, dataIndex: 'change'},
                        {header: "% Change",     width: 75,  sortable: true, dataIndex: 'pctChange'},
                        {header: "Last Updated", width: 85,  sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
                    ],
                    loadMask        : true,
                    viewConfig: {
                        stripeRows: true
                    },
                    bbar: pagingBar,
                    tbar: [{
                        text: 'Toolbar'
                    },'->',{
                        xtype: 'triggerfield',
                        trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                        trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'
                    }]
                }]
            }]
        }],
        listeners:{
            afterrender:function(){
                Ext.get('loading').remove();
                Ext.get('loading-mask').fadeOut({remove:true});
            }
        }
    });
    setTimeout(function() {
        Ext.QuickTips.init();
        progressbar.wait({
            text: 'Progress text...'
        });
    }, 1000);

});