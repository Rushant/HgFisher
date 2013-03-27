Ext.define('tuanFeng.model.answerModel', {
	extend:'Ext.data.Model',
	
	config:{
	fields: [
    {name: 'id', type: 'int'},         
	{name: 'answer', type: 'string'},
	{name: 'publisher', type: 'string'},
	{name: 'telephone', type: 'string'},
	{name: 'imageurl1', type: 'string'},
	{name: 'imageurl2', type: 'string'},
	{name: 'imageurl3', type: 'string'},
	{name: 'publishtime', type: 'string'}
	]
	}
});