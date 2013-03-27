Ext.define('tuanFeng.view.questionDetailView',{
	extend:'Ext.Container',
	xtype:'v_questionDetail',
	
	config:{
		scrollable:'vertical',
		cls:'detailViewCls',
		masked: {
		    xtype: 'loadmask',
		    message: '信息加载中...'
		},
		layout:'vbox',
		items:[{
			xtype:'w_toolbar',
			docked:'top'
		},{
			xtype:'panel',
			styleHtmlContent: true,
		},{
			xtype:'image',
			html:'<div class="answerImgCls"><br>&nbsp;点击-我来回答<div>',
			id:'answerImage',
			width:320,
			height:50,
			src:'res/icon/answer.png'
		},{
			xtype:'panel',
			id:'answerSubmitResult',
			styleHtmlContent: true,
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