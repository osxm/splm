/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.demo.DemoQuery', {
	extend : 'Splm.view.base.ItemQuery',
	xtype : 'DemoQuery',
	alias : 'widget.DemoQuery',
	controller:'demo',
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
	listFields : [{
		name : 'Name',
		value : 'name',
		isDisplayField:true,
		flex : 2
	},{
		name : 'Creation Date',
		value : 'sysCreatedDate',
		flex : 2
	}]
});
