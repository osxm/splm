/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.base.ItemController', {
	extend : 'Splm.view.base.BaseController',
	alias : 'controller.item',
	addQueryFilter : function() {
		var me = this, refs = me.getReferences(), queryFieldSet = refs.queryFieldSet;
		var moreQueryFields = me.getView().moreQueryFields;
		if (moreQueryFields == null || moreQueryFields.length < 1) {
			moreQueryFields = me.getView().moreFiltersFields;
		}
		var fieldsStore = Ext.create('Ext.data.Store', {
			fields : [ "name", "value", "fieldXType", "leftType", "rightType" ],
			data : moreQueryFields
		});

		var newFieldContainer = Ext.create('Ext.form.FieldContainer', {
			layout : 'hbox',
			items : [ {
				xtype : 'combobox',
				store : fieldsStore,
				displayField : 'name',
				valueField : 'value',
				width : 200,
				padding : '0 6 0 0',
				listeners : {
					change : function(thisCombox, newValue, oldValue, eOpts) {
						var selModel = thisCombox.getSelection();
						var xtype = selModel.get("fieldXType") != null ? selModel.get("fieldXType") : "textfield";
						var fieldName = selModel.get("value");
						var fieldContainer = thisCombox.findParentByType("fieldcontainer");
						var fieldContainerId = fieldContainer.getId();
						var splitId = "splitter_" + fieldContainerId;
						var fieldId = "field_" + fieldContainerId;
						var buttonId = "button_" + fieldContainerId;
						// remove old if exist
						var split = fieldContainer.child("splitter[id=" + splitId + "]");
						var fieldComponent = fieldContainer.child("[id=" + fieldId + "]");
						var button = fieldContainer.child("button[id=" + buttonId + "]");
						// debugger;
						if (split != null) {
							fieldContainer.remove(split, true);
							split = null;
						}
						if (fieldComponent != null) {
							fieldContainer.remove(fieldComponent, true);
							fieldComponent = null;
						}
						if (button != null) {
							fieldContainer.remove(button, true);
							button = null;
						}

						split = Ext.create({
							xtype : 'splitter',
							id : splitId
						});
						var fieldConfig = {
							xtype : xtype,
							id : fieldId,
							name : fieldName,
							width : 340
						};
						if (xtype == "UserValueSetCombobox") {
							var leftType = selModel.get("leftType") != null ? selModel.get("leftType") : null;
							var rightType = selModel.get("rightType") != null ? selModel.get("rightType") : null;
							if (leftType != null && leftType.length > 0) {
								fieldConfig.leftType = leftType;
							}
							if (rightType != null && rightType.length > 0) {
								fieldConfig.rightType = rightType;
							}
						}

						fieldComponent = Ext.create(fieldConfig);
						button = Ext.create({
							xtype : 'button',
							id : buttonId,
							margin : '0 0 0 10',
							padding : '6 3 3 3',
							handler : 'delQueryFilter',
							border : 0,
							iconCls : 'nplm-remove',
							style : {
								color : '#999',
								backgroundColor : 'transparent'
							}
						});
						fieldContainer.add(split);
						fieldContainer.add(fieldComponent);
						fieldContainer.add(button);
					}
				}
			}, {
				xtype : 'OperationCombobox'
			} ]
		});
		queryFieldSet.add(newFieldContainer);
	},
	delQueryFilter : function(thisBtn) {
		var me = this, refs = me.getReferences(), queryFieldSet = refs.queryFieldSet;
		var fieldContainer = thisBtn.up('fieldcontainer');
		queryFieldSet.remove(fieldContainer);
	},
	queryItems : function(btn) {
		var me = this, refs = me.getReferences(), queryFieldSet = refs.queryFieldSet, queryResultGrid = refs.queryResultGrid;
		var gridStore = queryResultGrid.getStore();
		var gridStoreProxy = gridStore.getProxy();
		var extraParams = gridStoreProxy.getExtraParams();

		// get Query Criteria
		var predicates = [];
		var fieldcontainer = queryFieldSet.child("fieldcontainer");
		var operationCombobox = fieldcontainer.child("OperationCombobox");
		var operation = operationCombobox.getValue();
		if (operation != null) {
			var valueField = operationCombobox.nextSibling("field");
			var fieldName = valueField.getName();
			var fieldValue = valueField.getValue();
			if (fieldName != null && fieldValue != null) {
				var predicateObj = {};
				predicateObj.jointCondition = "AND";
				predicateObj.fieldName = fieldName;
				predicateObj.operations = operation;
				predicateObj.fieldValue1 = fieldValue;
				predicateObj.fieldValue2 = "";
				predicates.push(predicateObj);
			}
		}
		while (fieldcontainer != null) {
			var nextfieldcontainer = fieldcontainer.nextSibling("fieldcontainer")
			if (nextfieldcontainer != null) {
				operationCombobox = nextfieldcontainer.child("OperationCombobox");
				operation = operationCombobox.getValue();
				if (operation != null) {
					var valueField = operationCombobox.nextSibling("field");
					var fieldValue = valueField.getValue();
					if (valueField.xtype == "datefield") {
						fieldValue = valueField.getRawValue();
						// adjust Date Value
						if (fieldValue != null && fieldValue.length > 0) {
							var reg = new RegExp('/', "g")
							fieldValue = fieldValue.replace(reg, "-");
							if (operation === "GT" || operation === "LE") {
								fieldValue += " 23:59:59";
							}
						}
					}
					var fieldName = valueField.getName();
					if (fieldName != null && fieldValue != null) {
						var predicateObj = {};
						predicateObj.jointCondition = "AND";
						predicateObj.fieldName = fieldName;
						predicateObj.operations = operation;
						predicateObj.fieldValue1 = fieldValue;
						predicateObj.fieldValue2 = "";
						predicates.push(predicateObj);
					}
				}
			}
			fieldcontainer = nextfieldcontainer;
		}
		extraParams.predicates = predicates;
		queryResultGrid.getStore().loadPage(1);
	},
	openItem : function(thisview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		if (cellIndex == 0) {
			var me = this, view = me.getView(), queryType = view.xtype, displayField = view.displayField; 
			var itemClass = queryType.substring(0,queryType.length-5); //queryType is DemoQuery
			var mainPanel = view.findParentByType("main");
			var mainControl = mainPanel.getController();
			var displayFieldValue = record.get(displayField);
			var infoXtype = itemClass + "Info";
			mainControl.openContentTab(itemClass + "_" + record.get("obid"), infoXtype, displayFieldValue);
		}
	},beforeCreateItem:function(){
		var me = this, view = me.getView(),refs = me.getReferences();
		var queryType = view.xtype;
		var itemClass = queryType.substring(0,queryType.length-5); 
		var mainPanel = view.findParentByType("main");
		var mainControl = mainPanel.getController();
		mainControl.openContentTab(itemClass+"Edit", itemClass+"Edit",itemClass);		
	},validAndGetParam:function(){
		var paramJsonObj = null;
		var me = this, view = me.getView(), refs = me.getReferences(), formPanel = refs.editForm;
		var mainPanel = view.findParentByType("main");
		var editXType = view.xtype;
		var itemClass = editXType.substring(0,editXType.length-4);
		var form = formPanel.getForm();
		if (form.isValid()) {
			paramJsonObj = {};
			var formFieldValues = form.getFieldValues();
			var fieldNames = Splm.model[itemClass.toLowerCase ()][itemClass].fieldOrdinals;
			for(var filedName in fieldNames){
				if(filedName!="id"&&filedName!="obid"){
					var formValue = "";
					if (formFieldValues != null && formFieldValues[filedName] != null) {
						formValue = formFieldValues[filedName];				
					}
					paramJsonObj[filedName] = formValue;
				}
			}			
		}
		return paramJsonObj;
	},saveItem:function(){
		var me = this, view = me.getView(),refs = me.getReferences();
		var mainPanel = view.findParentByType("main");
		var paramJsonObj = me.validAndGetParam();
		var editXType = view.xtype;
		var itemClass = editXType.substring(0,editXType.length-4);
		var url = me.getUrlLink("/"+itemClass.toLowerCase ()+"s"); 
		if(paramJsonObj!=null){
			me.callService(url,"POST",paramJsonObj,function(response){
				if(response!=null&&response.responseText!=null){
					var obj = Ext.decode(response.responseText);
					var obid = obj.obid;
					var displayName = obj.displayName;
					var contentpanel = view.findParentByType("contenttab");
					var createPanel = view.findParentByType("panel");
					contentpanel.remove(createPanel, {
						destroy : true
					});
					var mainControl = mainPanel.getController();
					mainControl.openContentTab(itemClass + obid, itemClass+"Info",displayName);
				}else{
					Ext.Msg.alert('Error', 'No response return from server.');
				}
			},true);
		}
	}
});
