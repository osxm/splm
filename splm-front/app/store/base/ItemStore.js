Ext.define('Splm.store.base.ItemStore', {
	extend : 'Ext.data.Store',
	getServiceUrlLink : function(service) {
		var url = "";
		if (Splm.sessionInfo.serverurl != null
				&& Splm.sessionInfo.serverurl.length > 0) {
			url += Splm.sessionInfo.serverurl;
		}
		url += service;
		return url;
	},
	remoteSort : true,
	listeners : {
		beforeload : function(thisStore, operation, eOpts) {
			var sortCols = thisStore.getSorters();
			if (sortCols != null && sortCols.length > 0) {
				var sortObj = sortCols.getAt(0);
				var direction = sortObj.getDirection();
				var property = sortObj.getProperty();
				if (direction != null && property != null) {
					var extraParams = thisStore.getProxy().getExtraParams();
					// extraParams.page = 1;
					// extraParams.start = 0;
					extraParams.orderBy = property;
					extraParams.orderType = direction;
					thisStore.getProxy().setExtraParams(extraParams);
				}
			}
		}
	}
});
