/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.demo.Demo', {
	extend : 'Splm.view.base.ItemQuery',
	xtype : 'Demo',
	alias : 'widget.Demo',
	classDisplay : 'Demo',
	displayField : 'name',
	filterFields : [ {
		name : 'Name',
		value : 'name'
	} ],
	moreFiltersFields : [ {
		name : 'Creation Date',
		value : 'sysCreatedDate',
		fieldXType : 'datefield'
	}, {
		name : 'Creator',
		value : 'sysCreator',
		fieldXType : 'userSelector'
	}, {
		name : 'Update Date',
		value : 'sysModifiedDate',
		fieldXType : 'datefield'
	}, {
		name : 'Modifier',
		value : 'sysModifier',
		fieldXType : 'userSelector'
	} ],
	listFields : [ {
		name : 'Creation Date',
		value : 'sysCreatedDate',
		flex : 2
	} ]
});
