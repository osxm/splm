/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.base.ItemQuery', {
	extend : 'Ext.panel.Panel',
	bodyPadding : 0,
	scrollable : 'y',
	items : [],
	tbar : [ {
		xtype : 'button',
		text : 'Query',
		iconCls : 'x-fa fa-search',
		hidden:true,
		name:'query',
		handler : 'queryItems'
	}, {
		xtype : 'button',
		text : 'Add Filter',
		iconCls : 'x-fa fa-filter',
		hidden:true,
		name:'addFilter',
		handler : 'addQueryFilter'
	}, {
		xtype : 'button',
		text : 'Create',
		hidden:true,
		name:'create',
		iconCls : 'x-fa fa-plus',
		handler : 'prepareCreateItem'
	} ],
	queryfieldcontainer : {
		xtype : 'fieldcontainer',
		labelWidth : 200,
		layout : 'hbox'
	},
	getQueryFilterFieldCfg : function(fieldObj) { // name,value,fieldXType
		return {
			fieldLabel : '<b>' + fieldObj.name + '</b>',
			items : [ {
				xtype : 'OperationCombobox',
			}, {
				xtype : 'splitter'
			}, {
				xtype : fieldObj.fieldXType != null ? fieldObj.fieldXType : 'textfield',
				name : fieldObj.value,
				width : 340
			} ]
		};
	},
	getListFieldColCfg : function(fieldObj) { // name,value,flex,isDisplayField
		var fieldCfg = {
			text : fieldObj.name,
			dataIndex : fieldObj.value
		};
		if (fieldObj.flex != null) {
			fieldCfg.flex = fieldObj.flex;
		}
		if (fieldObj.isDisplayField != null && fieldObj.isDisplayField === true) {
			fieldCfg.renderer = function(value) {
				return "<a href='#'>" + value + "</a>";
			};
		}
		return fieldCfg;
	},
	initComponent : function() {
		var me = this;
		var displayField = me.displayField;
		var filterFields = me.filterFields;
		var moreFilterFields = me.moreFilterFields;
		var listFields = me.listFields;
		var className = me.xtype;
		var queryFormFieldCfgs = [];
		var listColumnsCfgs = [];
		for ( var i in filterFields) {
			var queryFormFieldCfg = me.getQueryFilterFieldCfg(filterFields[i]);
			queryFormFieldCfgs.push(queryFormFieldCfg);
		}
		for ( var i in listFields) {
			var listColumnsCfg = me.getListFieldColCfg(listFields[i]);
			listColumnsCfgs.push(listColumnsCfg);
		}

		var queryFormCfg = {
			xtype : 'form',
			items : [ {
				xtype : 'fieldset',
				reference : 'queryFieldSet',
				collapsible : true,
				defaults : this.queryfieldcontainer,
				items : queryFormFieldCfgs
			} ]
		};
		var queryGridCfg = {
			xtype : 'grid',
			reference : 'queryResultGrid',
			emptyText:'No Items.',			
			viewConfig : {
				enableTextSelection : true
				//,minHeight:200
			},
			columns : listColumnsCfgs,
			store : {
				type : className + 'Store'
			},
			tbar : {
				xtype : 'pagingtoolbar',
				displayInfo : true,
				padding : '0 10 0 5'
			},
			listeners : {
				cellclick : 'openItem'
			}
		};
		Ext.apply(me, {
			items : [ queryFormCfg, queryGridCfg ]
		});

		this.callParent();
	},listeners:{
		afterrender:'itemPanelAfterRender'
	}
});