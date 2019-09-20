/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.main.ContentTab', {
	extend : 'Ext.tab.Panel',
	xtype : 'contenttab',
	controller : 'main',
	tabBar : {
		margin : '0 180 0 10'
	},
	defaults : {
		bodyPadding : 10
	},
	items : [ {
		title : 'Home',
		iconCls : 'x-fa fa-home',
		scrollable : 'y',
		items : [ {
			xtype : 'panel'
		} ]
	}]
});