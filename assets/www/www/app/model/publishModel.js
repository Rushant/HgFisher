Ext.define('tuanFeng.model.publishModel', {
	extend:'Ext.data.Model',	
	config:{
	fields: [
    {name: 'id', type: 'int'}, 
    {name: 'category', type: 'string'},
	{name: 'title', type: 'string'},
	{name: 'content', type: 'string'},
	{name: 'price', type: 'string'},
	{name: 'area', type: 'string'},
	{name: 'validtime', type: 'string'},
	{name: 'publisher', type: 'string'},
	{name: 'telephone', type: 'string'},
	{name: 'imageurl1', type: 'string'},
	{name: 'imageurl2', type: 'string'},
	{name: 'imageurl3', type: 'string'},
	{name: 'sharedtimes', type: 'string'},
	{name: 'publishtime', type: 'string'}
	]
	}
});