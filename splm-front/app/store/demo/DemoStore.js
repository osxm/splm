/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.store.demo.DemoStore', {
	extend : 'Splm.store.base.ItemStore',
	alias : 'store.NplmPnmMasterStore',
	model : 'Nplm.model.pnm.NplmPnmMaster',
	constructor : function(config) {
		var devType = Splm.devType != null ? Splm.devType : "Standalone";
		config = config || {};
		var restService = this.getServiceUrlLink("test");
		if (devType == "Integrate") {
			config.proxy = {
				type : 'ajax',
				url : restService,
			};
		} else if (devType == "Standalone") {
			config.proxy = {
				type : 'ajax',
				url : 'data/demo/Demo.json',
				reader : {
					type : 'json',
					rootProperty : 'datas'
				}
			};
		}
		config.proxy = {

		};
		this.callParent([ config ]);
	}
});