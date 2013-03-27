Ext.define('tuanFeng.view.forum4View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum4',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'专家指导'
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
        		                            { itemId :1, text: '问题列表',pressed: true},
        			                        { itemId :2,text: '专家名片'},
        			                        { itemId :3,text: '在线提问'}
        		                    ]}
        	             ]}
        		]},
        		 {
	        		itemId:'1',
					xtype:'w_questionList',
					store:'forum4Store1'
				},
				{
					itemId:'2',
					xtype:'w_expertList',
					store:'forum4Store2'			
				},
				{
					itemId:'3',
					id:'questionForm',
					xtype:'w_questionForm'		
				}
				]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	
	initialize: function(){
		this.activeItemTitle = "问题列表";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
	
});