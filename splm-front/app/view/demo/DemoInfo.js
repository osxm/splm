Ext.define('Splm.view.demo.DemoInfo', {
	extend : 'Splm.view.base.ItemInfo',
	xtype : 'DemoInfo',
	alias: 'widget.DemoInfo',
	controller : 'demo',
	viewModel : {
		type : 'demo'
	},
	url:'/demos',	
	items : [ {
		xtype : 'tabpanel',
		ui:'splm-item',
		items : [ {
			xtype : 'properties',
			fieldsets:[{
				xtype : 'fieldset',
				layout : 'column',
				fieldDefaults : {
					labelWidth : 160,
					columnWidth : 0.5
				},
				title : 'Basic',
				collapsible : true,
				defaultType : 'displayfield',
				items : [ {
					fieldLabel : 'Name',
					name : 'name',
					bind : {
						value : '{itemInfo.name}'
					}
				}, {
					fieldLabel : 'Description',
					name : 'descrip',
					bind : {
						value : '{itemInfo.descrip}'
					}
				} ]
			}],
			withSystemAttr:true
		},{
			xtype : 'logtab'
		}]
	}]
});