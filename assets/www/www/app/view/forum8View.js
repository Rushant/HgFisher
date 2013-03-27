Ext.define('tuanFeng.view.forum8View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum8',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'渔业休闲'
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
        		                            { itemId :1, text: '渔业百科',pressed: true},
        			                        { itemId :2,text: '渔乐时光'},
        			                        { itemId :3,text: '钓友乐园'}
        		                    ]}
        	             ]}
        		]},
        		 {
            		itemId:'1',
    				xtype:'w_list',
    				store:'forum8Store1'
    			},
    			{
    				itemId:'2',
    				xtype:'w_list',
    				store:'forum8Store2'			
    			},
    			{
    				itemId:'3',
    				xtype:'w_list',
    				store:'forum8Store3'			
    			}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	

	initialize: function(){
		this.activeItemTitle = "渔业百科";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
});