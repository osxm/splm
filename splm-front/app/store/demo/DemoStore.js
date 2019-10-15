/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.store.demo.DemoStore', {
	extend : 'Splm.store.base.ItemStore',
	alias : 'store.DemoStore',
	model : 'Splm.model.demo.Demo',
	autoLoad : true,
	constructor : function(config) {
		var devType = Splm.devType != null ? Splm.devType : "Standalone";
		config = config || {};
		var restService = this.getUrlLink("/demos");
		config.proxy = {
			type : 'ajax',
			url : 'data/demo/DemoList.json',
			reader : {
				type : 'json',
				rootProperty : 'data'
			}
		};
		if (devType == "Integrate") {
			config.proxy.url = restService;
		}
		this.callParent([ config ]);
	}
});
