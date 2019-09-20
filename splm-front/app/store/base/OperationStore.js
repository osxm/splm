Ext.define('Splm.store.base.OperationStore', {
	extend : 'Ext.data.Store',
	alias : 'store.Operation',
	fields : [ 'value', 'name' ],
	data : [ {
		"value" : "EQUAL",
		"name" : "Equal"
	}, {
		"value" : "NOTEQUAL",
		"name" : "Not Equal"
	}, {
		"value" : "GT",
		"name" : "Greater Than"
	}, {
		"value" : "GE",
		"name" : "Greater Than Or Equal"
	}, {
		"value" : "LT",
		"name" : "Less Than"
	}, {
		"value" : "LE",
		"name" : "Less Than Or Equal"
	},
	// {"value":"BETWEEN","name":"Between"},
	{
		"value" : "LIKE",
		"name" : "Like"
	}, {
		"value" : "STARTS_WITH",
		"name" : "Starts With"
	} ]
});