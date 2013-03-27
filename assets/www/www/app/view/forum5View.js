Ext.define('tuanFeng.view.forum5View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum5',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'交易平台'
        		       },
        		       {
        		    	   xtype : 'toolbar',
        		            cls:'sgToolbarCls',
        		            ui:'gray',			            
        		            items:[{
        		                    xtype: 'segmentedbutton',	
        		                    cls:'segbtnCls',
        		                    allowDepress:false,
        				            defaults: { flex: 1 },
        		                    items: [//itemId不能为0
        		                            { itemId :1, text: '求购信息',pressed: true},
        			                        { itemId :2,text: '供应信息'},
        			                        { itemId :3,text: '我要发布'}
        		                    ]}
        	             ]}
        		]},
        		{
	        		itemId:'1',
					xtype:'w_publishList',
					store:'forum5Store1'
				},
				{
					itemId:'2',
					xtype:'w_publishList',
					store:'forum5Store2'			
				},
				{
					itemId:'3',
					id:'publishform',
					xtype:'w_tradeForm',		
				}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;		
		return this.pageNum;
	},
	
	initialize: function(){
		this.activeItemTitle = "求购信息";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
});