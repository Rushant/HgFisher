Ext.define('tuanFeng.model.advertiseModel', {
	extend:'Ext.data.Model',
	
	config:{
	fields: [	  
    {name: 'id', type: 'int'},		
    {name: 'title', type: 'string'},	
	{name: 'imageurl', type: 'string'},
	{name: 'datetime', type: 'string'}
	]
	}
});