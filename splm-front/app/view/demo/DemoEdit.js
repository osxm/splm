Ext.define('Splm.view.demo.DemoEdit', {
	extend : 'Splm.view.base.ItemEdit',
	xtype : 'DemoEdit',
	alias : 'widget.DemoEdit',
	controller : 'demo',
	tbar : [ {
		xtype : 'button',
		text : 'Save',
		iconCls : 'x-fa fa-file-alt',
		handler : 'saveItem'
	}, {
		xtype : 'button',
		text : 'Cancel',
		handler : 'cancelSave',
		iconCls : 'x-fa fa-window-close'
	} ],
	items : {
		xtype : 'form',
		reference:'editForm',
		items : [ {
			xtype : 'fieldset',
			layout : 'column',
			fieldDefaults : {
				labelWidth : 160,
				columnWidth : 0.5,
				margin : '2 30 2 5'
			},
			title : 'Basic',
			collapsible : true,
			defaultType : 'textfield',
			items : [ {
				fieldLabel : 'Name',
				name : 'name'
			}, {
				fieldLabel : 'Description',
				name : 'descrip'
			} ]
		} ]
	},
	constructor : function(config) {
		config = config || {};
		this.callParent([ config ]);
	}
});