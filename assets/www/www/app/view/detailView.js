Ext.define('tuanFeng.view.detailView',{
	extend:'Ext.Container',
	xtype:'v_detail',
	
	config:{
		scrollable:'vertical',
		cls:'detailViewCls',
		styleHtmlContent: true,
		masked: {
		    xtype: 'loadmask',
		    message: '信息加载中...'
		},
		items:[{
			xtype:'container',
			docked:'top',
			items:[
			       {
						xtype:'w_toolbar',
						items:[{
							iconMask: true,
							ui:'plain',
				    		id:'backBtn',
				    		align:'left',
				    		iconCls:'reply'
						},{
							iconMask: true,
							hidden:true,
							ui:'plain',
				    		id:'setBtn',
				    		align:'right',
				    		iconCls:'settings'
						}]
					}, {
				    	   xtype : 'toolbar',
				    	   hidden:true,
				    	   id:'fontSettingBar',
				           cls:'sgToolbarCls',
				            ui:'gray',			            
				            items:[
				                   {
				                	   xtype: 'label',
				                	   cls:'labelCls',
				                	   html: '字体: '
				                   },{
				                    xtype: 'segmentedbutton',
				                    allowDepress:false,
				                    style: 'padding-left:10px;width:80%;height:40px;font-size:22px;',
						            defaults: { flex: 1 },
				                    items: [//itemId不能为0
				                        { itemId :1,text: '小'},
				                        { itemId :2,text: '中',pressed: true},
				                        { itemId :3,text: '大'}
				                    ]}
			            ]}
			       ]
		}]
	},
	
	getPageNum: function(){//设置页面的级数
		this.pageNum = 2;
		return this.pageNum;
	},
	
	setFatherView: function(view){//设置页面的级数
		this.fatherView = view;
	},
	
	getFatherView: function(){
		return this.fatherView;
	}
});