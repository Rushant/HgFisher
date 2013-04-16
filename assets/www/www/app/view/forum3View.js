Ext.define('tuanFeng.view.forum3View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum3',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'水产管理'
        		       },
        		       {
        		    	   xtype : 'toolbar',
        		            cls:'sgToolbarCls',
        		            ui:'gray',			            
        		            items:[{
        		                    xtype: 'segmentedbutton',
        		                    cls:'segbtn1Cls',
        		                    allowDepress:false,
        				            defaults: { flex: 1 },
        		                    items: [//itemId不能为0
        		                            { itemId :1, text: '政策法规',pressed: true},
        			                        { itemId :2,text: '质量安全'},
        			                        { itemId :3,text: '规范标准'},
        			                        { itemId :4,text: '渔业经济'}
        		                    ]}
        	             ]}
        		]},
        		  {
		        	itemId:'1',
					xtype:'w_noImgList',
					store:'forum3Store1',
				},
				{
					itemId:'2',
					xtype:'w_noImgList',
					store:'forum3Store2'			
				},
				{
					itemId:'3',
					xtype:'w_noImgList',
					store:'forum3Store3'			
				},
				{
					itemId:'4',
					xtype:'w_noImgList',
					store:'forum3Store4'			
				}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	

	initialize: function(){
		this.activeItemTitle = "政策法规";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
	
});