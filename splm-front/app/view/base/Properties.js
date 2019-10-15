Ext.define('Splm.view.base.Properties', {
	extend : 'Ext.form.Panel',
	xtype : 'properties',
	title : 'Properties',
	constructor : function(config) {
		config = config || {};
		var formCfg = {
			xtype : 'form',
			name : 'propertiesTab',
			method : 'POST',
			reference : 'infoForm',
			width : '100%',
			scrollable : 'y',
			items : []
		};
		if (config.fieldsets != null&&config.fieldsets.length>0) {
			for(var i in config.fieldsets){
				formCfg.items.push(config.fieldsets[i]);
			}			
		}
		var sysFieldSet = {
			xtype : 'fieldset',
			layout : 'column',
			fieldDefaults : {
				labelWidth : 160,
				columnWidth : 0.5
			},
			title : 'System',
			collapsible : true,
			defaultType : 'displayfield',
			items : [ {
				fieldLabel : 'Creation Date',
				bind : {
					value : '{itemInfo.sysCreatedDate}'
				}
			}, {
				fieldLabel : 'Update Date',
				bind : {
					value : '{itemInfo.sysModifiedDate}'
				}
			}, {
				fieldLabel : 'Creator',
				bind : {
					value : '{itemInfo.sysCreator}'
				}
			}, {
				fieldLabel : 'Modifier',
				bind : {
					value : '{itemInfo.sysModifier}'
				}
			} ]
		};
		formCfg.items.push(sysFieldSet);
		config.items = formCfg;
		this.callParent([ config ]);
	}
});