/**
 * @author Oscar Chen
 * 
 */
Ext.define('Splm.view.base.BaseController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.base',
	getUrlLink : function(service) {
		var url = "";
		if (Splm.sessionInfo.serverurl != null && Splm.sessionInfo.serverurl.length > 0) {
			url += Splm.sessionInfo.serverurl;
		}
		url += service;
		return url;
	},
	checkSuccess : function(response) {
		var isSuccess = true;
		if (response != null && response.responseText != null && response.responseText.length > 0) {
			try {
				var obj = Ext.decode(response.responseText);
				if (obj != null && obj.success != null && obj.success == false) {
					Ext.Msg.alert('Fail', obj.msg);
					isSuccess = false;
				}
			} catch (e) {
				console.log('checkSuccess fail for : ' + e);
			}
		}
		return isSuccess;
	},
	serverFailAlert : function(response) {
		var error = "";
		var trace = "";
		if (response.responseText != null && response.responseText.length > 0) {
			var obj = Ext.decode(response.responseText);
			error = (obj.error != null) ? obj.error : '';
			trace = (obj.trace != null) ? obj.trace : '';
		}
		Ext.Msg.alert('Error', 'server-side failure with status code ' + response.status + ';<br>Error Message:' + error);
		console.log('server-side error trace: ' + trace);
	},
	callService : function(url, method, paramObj, callbackFunc, isJsonParam) {
		var me = this;
		var requestCfg = {
			url : url,
			method : method,
			// params : paramObj,
			success : function(response, opts) {
				if (me.checkSuccess(response)) {
					if (callbackFunc != null && typeof (callbackFunc) === "function") {
						callbackFunc(response);
					}
				}
			},
			failure : function(response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		};
		if (paramObj != null) {
			if (isJsonParam != null && isJsonParam === true) {
				requestCfg.jsonData = paramObj;
				//requestCfg.paramsAsJson=true;
			} else {
				requestCfg.params = paramObj;
			}
		}
		Ext.Ajax.request(requestCfg);
	}
});

