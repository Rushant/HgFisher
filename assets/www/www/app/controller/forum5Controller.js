Ext.define('tuanFeng.controller.forum5Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum5Icon:'#forum5Icon',
			ref_forum5:'v_forum5',
			ref_forum5Segmentbutton:'v_forum5 segmentedbutton',	
			ref_takePicBtn:'#takePicBtn',
			ref_getPicBtn:'#getPicBtn',
			ref_resetBtn:'#resetBtn',
			ref_submitBtn:'#submitBtn',
			ref_tradeForm:'w_tradeForm',
			ref_publishList:'w_publishList'
		},
		control:{
			ref_forum5Icon:{
				tap:'getForum5View'
			},
			ref_forum5:{
				activeitemchange:'getPickedCaro5'
			},
			ref_forum5Segmentbutton:{
				toggle: 'getPickedSeg5'
			},
			ref_takePicBtn:{
				tap:'takePictures'
			},
			ref_getPicBtn:{
				tap:'getPictures'
			},
			ref_resetBtn:{
				tap:'resetForm'
			},
			ref_submitBtn:{
				tap:'submitForm'
			},
			ref_publishList:{
				itemtap:'getDetail'
			}
		}
	},
	
	getForum5View:function(){
		if(!this.forum5View)
			this.forum5View = Ext.create('tuanFeng.view.forum5View');
		//处理信息列表与交互模块的差异
		if(this.forum5View.getActiveItem().getItemId() != 3 && !this.forum5View.getActiveItem().getStore().isLoaded())
			this.forum5View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum5View);
		Ext.Viewport.setActiveItem(this.forum5View);
	},
	
	getDetail:function(dataview, index, target, record, e, options){
		//先存储其父页面，以便处理回退
		var detailViewFather = Ext.Viewport.getActiveItem();
		//新建页面，以免替代旧页面的不良体验
		var detailView = Ext.create('tuanFeng.view.detailView');
		detailView.setFatherView(detailViewFather);
		//设置三级页面的标题
		var detailViewTitle = detailViewFather.getDockedComponent(0).getAt(0).getTitle()+
		"-"+ detailViewFather.getActiveItemTitle();
		detailView.getAt(0).getAt(0).setTitle(detailViewTitle);
		
		var publishId = record.get('id');
		var publishContent='';
		itemTaped(publishId);//记录点击次数
		var imgName='',imgHtml='',yStartPos=0,yMovePos=0;//赋初值
		 Ext.data.JsonP.request({
			 	url: Global.Website + '/Server/getPublishDetail.jsp',
	            callbackKey: 'callback',
	            params: {
	            	publishId:publishId,
	            	format: 'json',
	            },
	            timeout:5000,
	            success: function(result, request) {
	            	publishContent = result;
	            	var i;
	            	for(i = 1; i<=3; i++)
	        		{
	            		if( i==1 )  imgName = publishContent.imageurl1;
	            		else if( i==2 ) imgName = publishContent.imageurl2;
	            		else  imgName = publishContent.imageurl3;
	        		    if(imgName != "null" && imgName!="") 
	        		    {
	        		    	imgHtml += '<div><img class="detailImg" onerror=\"this.src=\'res/icon/default.png\'\" src="'+imgName +'"></div>'
	        		    }
	        		}
	            	detailView.setHtml(
	            			'<div class="detailTitleCls">'+ record.get('title') + '</div>'+
	            		    '<div class="detailDateCls">'+ record.get('publishtime') + '</div>'+
	            		    '<hr width=100% size=1 color=#00ffff align=center noshade>'+
	            		    '<div class="detailContentCls">'+
	            		    '<div>价格：'+ publishContent.price+'</div>'+		    
	            		    '<div>地区：'+ publishContent.area+'</div>'+
	            		    '<div>有效时间：'+ publishContent.validtime+'</div>'+		    
	            		    '<div>发布者：'+ publishContent.publisher+'</div>'+
	            		    '<div>联系方式：<a href="tel:'+publishContent.telephone+'">'+ publishContent.telephone+'</a></div>'+
	            		    '<div>浏览次数：'+ record.get('sharedtimes')+'</div>'+
	            		     imgHtml  +'<div>'+ publishContent.content + '</div></div><br><br>');	
	            	detailView.setMasked(false);	           
	            },
	            failure:function(){
	            	detailView.setHtml('<div class="detailTitleCls">'
        	    			+ record.get('title') +'</div>'+ 
        	    			'<div class="detailDateCls">'+ record.get('publishtime')+'</div>'
        	    			+'<hr width=100% size=1 color=#00ffff align=center noshade>'
        	    	    	+'<div class="detailContentFailedCls">︶︿︶ 内容加载失败！返回再试</div>');
	            	detailView.setMasked(false);
	    	    }	
		 });		
    	detailView.getScrollable().getScroller().scrollTo(0,0);
		Ext.Viewport.setActiveItem(detailView);
		//处理顶栏显示问题
 		detailView.getScrollable().getScroller().on('scrollstart',function(scroller,x,y1){
 			yStartPos = y1;
 		});
 		detailView.getScrollable().getScroller().on('scroll',function(scroller,x,y2){
				yMovePos = y2;
				if(yMovePos - yStartPos > 0  && yMovePos < scroller.maxPosition.y)//实现下滑隐藏顶栏，上滑显示顶栏
					detailView.getAt(0).setHidden(true);
				else
					detailView.getAt(0).setHidden(false);
			});
	},
	
	getPickedCaro5:function(container, newItem, oldItem,opts){
		this.getRef_forum5Segmentbutton().setPressedButtons(newItem.getItemId());
		if(newItem.getItemId() != 3 && !newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum5().setActiveItemTitle(this.getRef_forum5Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg5:function(container, button, pressed){
		if(pressed){
			this.getRef_forum5().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum5().setActiveItemTitle(button.getText());
		}
	},
	
	takePictures:function(){
		takePicture()
	},
	
	getPictures:function(){
		selectPicture()
	},
	
	resetForm:function(){
		this.getRef_tradeForm().reset();
		deletePic(1);
		deletePic(2);
		deletePic(3);
	},
	
	submitForm:function(){
		var systemId = Math.round(new Date().getTime()/1000);
		var formpanel = this.getRef_tradeForm();
			//系统自动分配编号，但手机号要用户输入
			if(formpanel.getValues().title==0)
			{
				Ext.Msg.alert("提示","请输入标题", Ext.emptyFn);
				return;
				//Ext.Msg.alert('提示','请输入',Ext.emptyFn);
			}
			else if(formpanel.getValues().content==0)
			{
				//alert("请输入内容");
				Ext.Msg.alert("提示","请输入内容", Ext.emptyFn);
				return;	 								
			}
			else if(formpanel.getValues().telephone==0)
			{
				//alert("请输入联系电话");
				Ext.Msg.alert("提示","请输入联系电话", Ext.emptyFn);
				return;	 								
			}
			else {
				Ext.Msg.confirm('提示','确定要发布吗？',

			      function(btn)
			      	{
				        if(btn=='yes')
				        {											      
							formpanel.setValues({publishId:systemId });
 							//alert("此条信息的编号为："+formpanel.getValues().publishId+" （建议保存）");
                            publish(formpanel,formpanel.getValues().publishId);
            			}
				        else
				        {
				        	return;
				        }
			      },this);
		}
	}
});	