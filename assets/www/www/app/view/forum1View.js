Ext.define('tuanFeng.view.forum1View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum1',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'水产资讯'
        		       },
        		       {
        		    	   xtype : 'toolbar',
        		            cls:'sgToolbarCls',
        		            //height: 40,
        		            ui:'gray',			            
        		            items:[{
        		                    xtype: 'segmentedbutton',
        		                    cls:'segbtnCls',
        		                    allowDepress:false,
        				            defaults: { flex: 1 },
        		                    items: [//itemId不能为0
        		                        { itemId :1,text: '行业新闻',pressed: true},
        		                        { itemId :2,text: '黄冈新闻'},
        		                        { itemId :3,text: '视频新闻'}
        		                    ]}
        	             ]}
        		]},
		        {
					itemId:'1',
					xtype:'w_list',
					store:'forum1Store1'
				},
				{
					itemId:'2',
					xtype:'w_list',
					store:'forum1Store2'		
				},
				{
					itemId:'3',
					xtype:'w_list',
					store:'forum1Store3'		
				}]
	},
	
	initialize: function(){
		this.activeItemTitle = "行业新闻";
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
	
});