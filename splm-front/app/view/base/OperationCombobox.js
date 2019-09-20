/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.base.OperationCombobox', {
	extend : 'Ext.form.ComboBox',
	xtype : 'OperationCombobox',
	store : {
		type : 'Operation'
	},   
	width : 200,
	queryMode: 'local',
    displayField: 'name',
    valueField: 'value'
});