Ext.define('tuanFeng.view.forum6View',{
	extend:'Ext.Carousel',	
	xtype:'v_forum6',
	
	config:{
		items:[
		       {xtype:'container',
        		docked:'top',
        		layout:'vbox',
        		items:[
        		       {
        		    	   xtype:'w_toolbar',
        		    	   title:'名企名人'
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
        		                            { itemId :1, text: '水产名人',pressed: true},
        			                        { itemId :2,text: '企业之光'}
        		                    ]}
        	             ]}
        		]},
        		 {
            		itemId:'1',
    				xtype:'w_list',
    				store:'forum6Store1'
    			},
    			{
    				itemId:'2',
    				xtype:'w_list',
    				store:'forum6Store2'			
    			}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 1;
		return this.pageNum;
	},
	

	initialize: function(){
		this.activeItemTitle = "水产名人";
	},
	
	setActiveItemTitle: function(title){
		this.activeItemTitle = title
	},
	
	getActiveItemTitle: function(){
		return this.activeItemTitle
	}
});