/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.main.ContentPanel', {
	extend : 'Ext.Panel',
	xtype : 'contentpanel',
	controller : 'main',
	items : {
		xtype : 'contenttab',
		ui:'splm-main-tab-ui'
	},
	bodyCls:'splm-main-header',
	constructor : function(config) {
		this._loginUserInfo = undefined;

		this._afterRender = function() {
			this._loginUserInfo.show();
		};

		this._updateFloatBtnPos = function() {
			var bodySize = this.body.getSize(), btnSize = this._loginUserInfo.getSize();
			if (this._loginUserInfo && this._loginUserInfo.el) {
				this._loginUserInfo.alignTo(this.el, "tr-tr?", [ 0, 7 ]);
			}
		};

		return this.callParent(arguments);
	},
	initComponent : function() {
		this._loginUserInfo = Ext.create('Ext.button.Button', {
			text : Splm.sessionInfo.username,
			name : 'loginUserInfo',
			floating : true,
			width : 160,
			iconCls : 'x-fa fa-user-circle',
			iconAlign : 'left',
			shadow : false,
			style : {
				'z-index' : 1,
				'border-style' : 'none'
			},
			menu : [ {
				text : 'Log Off',
				iconCls : 'x-fa fa-power-off',
				iconAlign : 'left',
				handler : 'logoff'
			} ]
		});
		this.add(this._loginUserInfo);
		this.addListener('afterrender', this._afterRender, this);
		this.addListener('resize', this._updateFloatBtnPos, this);
		this.addListener('beforedestroy', function() {
			this._loginUserInfo.destroy();
		}, this);

		this.addListener('show', function() {
			this._loginUserInfo.show();
		}, this);

		return this.callParent(arguments);
	},
	listeners : {
		afterrender : 'setUserDisplayName'
	}
});