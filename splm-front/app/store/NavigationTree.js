/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.store.NavigationTree', {
	extend : 'Ext.data.TreeStore',
	alias : 'store.navigationTree',
	// storeId : 'navigationTree',
	asynchronousLoad : false,
	fields : [ {
		name : 'text'
	} ],
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : '/data/main/NavigationList.json'
	}
/*
 * constructor: function (config) { var devType =
 * Splm.Application.$config.values.devType; config = config || {};
 * if(devType=="Integrate") { var url = ""; if(Ext.sessionInfo.serverurl!=null){
 * url = Ext.sessionInfo.serverurl+'navtree'; } config.proxy = { type : 'ajax',
 * url : url }; }else if(devType=="Standalone"){ config.proxy = { type : 'ajax',
 * url : '/data/main/NavigationList.json' }; } this.callParent([config]); }
 */
});