Ext.define('tuanFeng.view.widget.expertList',{
	extend:'Ext.List',
	xtype:'w_expertList',
	
	config:{
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		},
		onItemDisclosure:true,
		cls:'expertCls',
		itemTpl: '<img class="expertListImage" onerror=\"this.src=\'res/icon/expert.png\'\"' +
		'src="{imageurl}"/>' +
   		'<div class="expertListDescription">' +
   		'<div style="font-size:18px"><b>{name}</b></div>' +
   		'职务：{title}<br>' +
   		'专业：{position}<br>' +
   		'单位：{company}<br>' +
   		'<div class="expert_description">简介：{description}' +
   		'</div></div>',
		//图片尺寸按常用照片尺寸（1寸 2.5cm*3.5cm 413像素*295像素）比例缩放。
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