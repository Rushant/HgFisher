Ext.define('tuanFeng.view.forum9View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum9',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'渔趣风光'
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
        		                            { itemId :1, text: '渔趣风光',pressed: true},
        			                        { itemId :2,text: '我写我拍'}
        		                    ]}
        	             ]}
        		]},
        		 {
            		itemId:'1',
    				xtype:'w_travelsList',
    				store:'forum9Store1'
    			},
    			{
    				itemId:'2',
    				id:'travelsform',
    				xtype:'w_travelsForm',			
    			}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	

	initialize: function(){
		this.activeItemTitle = "渔趣风光";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
});