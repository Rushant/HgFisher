Ext.define('tuanFeng.model.travelsModel', {
	extend:'Ext.data.Model',
	
	config:{
	fields: [	  
    {name: 'id', type: 'int'},		
    {name: 'title', type: 'string'},		
	{name: 'content', type: 'string'},
	{name: 'publisher', type: 'string'},
	{name: 'imageurl1', type: 'string'},
	{name: 'imageurl2', type: 'string'},
	{name: 'imageurl3', type: 'string'},
	{name: 'datetime', type: 'string'}
	]
	}
});