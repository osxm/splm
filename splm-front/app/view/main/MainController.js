/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.main',

	onItemSelected : function(sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm : function(choice) {
		if (choice === 'yes') {
			//
		}
	},
	setUserDisplayName : function(contentpanel) {
		var userDisplayButton = contentpanel.child("button[name=loginUserInfo]");
		userDisplayButton.setText("Demo User");
		/*
		 * var url = this.getServiceUrlLink("sessionInfo"); var me = this;
		 * Ext.Ajax.request({ url : url, success : function(response, opts) {
		 * var obj = Ext.decode(response.responseText); var userDisplayName =
		 * obj.displayName; var userDisplayButton =
		 * contentpanel.child("button[name=loginUserInfo]");
		 * userDisplayButton.setText(userDisplayName); }, failure :
		 * function(response, opts) { me.serverFailAlert(response); } });
		 */
	},
	openContentTab : function(tabId, xtype, tabTitle) {
		var me = this, view = me.getView();
		var mainPanel = null;
		var contentTab = null;
		if(view.xtype=="main"){
			mainPanel = view;
		}else{
			mainPanel = view.findParentByType("main");
		}		
		if(mainPanel!=null) contentTab = mainPanel.query("contenttab")[0];
		if (contentTab!=null&&xtype != null && Ext.ClassManager.getByAlias("widget." + xtype) != null) {
			if (contentTab != null) {
				var tabTobeOpen = null;
				// check if tab already exist
				tabTobeOpen = contentTab.child("#" + tabId);
				if (tabTobeOpen == null) {
					// Parse OBID of ItemInfo
					var itemObid = null;
					var itemClass = null;
					if (xtype.substr(xtype.length - 4) == "Info") { // NplmTipProjectInfo
						var tabIdArray = tabId.split("_");
						if (tabIdArray != null && tabIdArray.length > 1) {
							itemClass = tabIdArray[0];
							itemObid = tabIdArray[1];
						}
					}
					var tabItem = {
						xtype : xtype
					};
					if (itemObid != null) {
						tabItem.obid = itemObid;
					}
					if (itemObid != null) {
						tabItem.itemClass = itemClass;
					}
					tabTobeOpen = contentTab.add({
						id : tabId,
						title : tabTitle != null ? tabTitle : this.getTabTitleByXtype(tabId),
						// iconCls : 'x-fa fa-search',
						closable : true,
						listeners : {
							resize : function(thisPanel, width, height, oldWidth, oldHeight) {
								// alert(height);
								var childComponent = thisPanel.child(xtype);
								if (childComponent != null) {
									var topHeight = 44;
									childComponent.setHeight(height - 16);
								}
							}
						},
						items : [ tabItem ]
					});
				}
				contentTab.setActiveTab(tabTobeOpen);
			}
		} else {
			Ext.Msg.alert('Warn', xtype + ' is invalid Widget XType.');
		}
	},
	navItemClick : function(tree, info) {
		var me = this, view = me.getView();
		var treeItem = info.item;
		var isLeaf = treeItem.getLeaf();
		var itemClass = treeItem.getNode().get("itemClass");
		var tabTitle = treeItem.getNode().get("text");
		if (isLeaf && itemClass) {
			me.openContentTab(itemClass, itemClass,tabTitle);
		}
	}

});
