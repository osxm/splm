/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Splm.view.main.Main', {
	extend : 'Ext.Panel',
	xtype : 'main',
	requires : [ 'Ext.plugin.Viewport', 'Ext.window.MessageBox', 'Splm.view.main.MainController', 'Splm.view.main.MainModel', 'Splm.view.main.List' ],
	controller : 'main',
	viewModel : 'main',
	layout : 'border',
	defaults : {
		floatable : false
	},
	items : [ {
		title : '<b>Splm</b>',	
		region : 'west',
		xtype : 'panel',
		reference : 'leftNav',
		border : true,
		collapsible : true,
		items:{
			xtype:'treelist',
			store : {
				type : 'navigationTree'
			},
			width : 250,
			expanderFirst : false,
			expanderOnly : false,
			listeners : {
				itemclick : 'navItemClick'
			}
		}
	}, {
		region : 'center',
		xtype : 'contentpanel',
		reference : 'contentPanel',
		layout : 'fit'
	} ]
});

