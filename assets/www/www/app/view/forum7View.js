Ext.define('tuanFeng.view.forum7View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum7',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'名优品种'
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
        		                            { itemId :1, text: '鱼类',pressed: true},
        			                        { itemId :2,text: '其他'}
        		                    ]}
        	             ]}
        		]},
        		 {
            		itemId:'1',
    				xtype:'w_list',
    				store:'forum7Store1'
    			},
    			{
    				itemId:'2',
    				xtype:'w_list',
    				store:'forum7Store2'			
    			}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	

	initialize: function(){
		this.activeItemTitle = "鱼类";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
});