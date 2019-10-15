/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.base.ItemInfo', {
	extend : 'Ext.panel.Panel',
	tbar:[{
		xtype : 'button',
		text : 'Edit',
		iconCls : 'x-fa fa-edit',
		handler:'editItemBasic'
	}]
});