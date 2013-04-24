Ext.define('tuanFeng.view.forum2View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum2',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'水产科技'
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
        		                            { itemId :1, text: '养殖技术',pressed: true},
        			                        { itemId :2,text: '加工贮运'},
        			                        { itemId :3,text: '鱼病防治'}
        		                    ]}
        	             ]},
        	             {
        	            	xtype:'w_diseasePicker' 
        	             }
        		]},
        		 {
	        		itemId:'1',
					xtype:'w_noImgList',
					store:'forum2Store1'
				},
				{
					itemId:'2',
					xtype:'w_noImgList',
					store:'forum2Store2'			
				},
				{
					itemId:'3',
					xtype:'w_noImgList',
					store:'forum2Store3'			
				}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	
	initialize: function(){
		this.activeItemTitle = "养殖技术";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
});