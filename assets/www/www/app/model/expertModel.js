Ext.define('tuanFeng.model.expertModel', {
	extend:'Ext.data.Model',
	config:{
	fields: [	  
	{name: 'id', type: 'int'},
	{name: 'name', type: 'string'},
	{name: 'imageurl', type: 'string'},
	{name: 'birthday', type: 'string'},
	{name: 'title', type: 'string'},
	{name: 'position', type: 'string'},
	{name: 'company', type: 'string'},
	{name: 'description', type: 'string'},
	{name: 'telephone', type: 'string'},
	{name: 'mobilephone', type: 'string'}
	]
	}
});