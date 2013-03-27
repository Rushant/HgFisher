Ext.define('tuanFeng.view.widget.noImgList',{
	extend:'Ext.List',
	xtype:'w_noImgList',
	
	config:{
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		},
		cls:'noImgListCls',
		itemTpl:  '<div class="noImgListTitle"><b>{title}</b></div>'
			+'<div class="noImgListDate">{datetime}&nbsp;&nbsp;<span class="noImgListPublisher">来源:{publisher}</span><div>',
		loadingText: Global.loadingText,
		emptyText:'<br><div class="loadFailed">信息加载失败，下滑刷新重试</div>',
		plugins: [
	  	            {
	  	            	xclass: 'Ext.plugin.PullRefresh',
	  	        　　　　　　　　  pullRefreshText: '下滑更新数据',
	  	                lastUpdatedText:'最近更新：',
	      	        　　　　　　releaseRefreshText: '松开开始更新',
	      	        　　　　　　loadingText: '正在刷新...',
			      	      refreshFn: function (loaded, arguments) {
			                  loaded.getList().getStore().loadPage(1, {
			                     callback: function (record, operation, success) {
			                         Ext.Viewport.unmask();
			                     }, scope: this
			                 });
			               }
	  	            },
	  	            {
	  	            	xclass: 'Ext.plugin.ListPaging',
	  	            	noMoreRecordsText:'信息已加载完毕',
	  	            	loadMoreText:'上滑加载更多...',
	  	            	autoPaging: true
	  	            }
	  	        ]
	}
});