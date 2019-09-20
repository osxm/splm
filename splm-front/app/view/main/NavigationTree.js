/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.main.NavigationTree', {
	extend : 'Ext.list.Tree',
	xtype : 'navigationtree',
	// store : 'navigationTree',
	controller : 'main',
	store : {
		type : 'navigationTree'
	},
	width : 250,
	expanderFirst : false,
	expanderOnly : false,
	listeners : {
		itemclick : 'navItemClick'
	}
});

