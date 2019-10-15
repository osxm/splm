Ext.define('Splm.view.demo.DemoViewModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.demo',
	stores : {
		itemInfoStore : {}
	},
	constructor : function(config) {
		config = config || {};
		var obid = config.view.obid;
		var xtype = config.view.xtype;
		var itemClass = xtype.substring(0,xtype.length-4);
		var url = config.view.url;
		var devType = Splm.devType != null ? Splm.devType : "Standalone";
		//devType = "Standalone";
		config.stores = {
				itemInfoStore : {
					autoLoad : true,
					proxy:{
						type : 'ajax',
						url : '/data/demo/DemoInfo.json',
						reader : {
							type : 'json'
						}
					}
				}
		};
		if (devType == "Integrate") {
			config.stores.itemInfoStore.proxy.url = Splm.sessionInfo.serverurl +"/"+itemClass.toLowerCase()+"s/"+obid;
		}
		this.callParent([ config ]);
	},
	formulas : {
		itemInfo : function(get) {
			var vm = this, itemInfoStore = this.get('itemInfoStore');
			get('itemInfoStore').on({
				load : function() {
					if (itemInfoStore != null && itemInfoStore.first() != null) {
						var itemInfo = itemInfoStore.first().data;
						vm.set('itemInfo', itemInfo);
					}
				}
			});
		}
	}
});
