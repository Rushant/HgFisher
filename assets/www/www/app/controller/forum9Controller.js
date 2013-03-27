Ext.define('tuanFeng.controller.forum9Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum9Icon:'#forum9Icon',
			ref_forum9:'v_forum9',
			ref_forum9Segmentbutton:'v_forum9 segmentedbutton',	
			ref_forum9List:'v_forum9 w_travelsList',
			ref_takePicBtn3:'#takePicBtn3',
			ref_getPicBtn3:'#getPicBtn3',
			ref_resetBtn3:'#resetBtn3',
			ref_submitBtn3:'#submitBtn3',
			ref_travelsForm:'w_travelsForm'
			//ref_detailView:'v_detail'
		},
		control:{
			ref_forum9Icon:{
				tap:'getForum9View'
			},
			ref_forum9:{
				activeitemchange:'getPickedCaro9'
			},
			ref_forum9Segmentbutton:{
				toggle: 'getPickedSeg9'
			},
			ref_forum9List:{
				itemtap:'getDetail'
			},
			ref_takePicBtn3:{
				tap:'takePictures'
			},
			ref_getPicBtn3:{
				tap:'getPictures'
			},
			ref_resetBtn3:{
				tap:'resetForm'
			},
			ref_submitBtn3:{
				tap:'submitForm'
			}
		}
	},
	
	getForum9View:function(){
		if(!this.forum9View)
			this.forum9View = Ext.create('tuanFeng.view.forum9View');
		if(this.forum9View.getActiveItem().getItemId() != 2 && !this.forum9View.getActiveItem().getStore().isLoaded())
			this.forum9View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum9View);
		Ext.Viewport.setActiveItem(this.forum9View);
	},
	
	//三级页面
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
		var travelsId = record.get('id');
		//console.log(travelsId);
		var travelsContent='',videoName='',yStartPos=0,yMovePos=0;
		var i=1,imgName='',imgHtml='';
		 Ext.data.JsonP.request({
			 	url: Global.Website + '/Server/getTravelsDetail.jsp',
	            callbackKey: 'callback',
	            params: {
	            	travelsId: travelsId,
	            	format: 'json',
	            },
	            timeout:5000,
	            success: function(result, request) {		            	
	            	travelsContent = result;    
	            	
	            	for(i = 1; i<=3; i++)
	        		{
	            		if( i==1 )  imgName = record.get('imageurl1');
	            		else if( i==2 ) imgName = travelsContent.imageurl2;
	            		else  imgName = travelsContent.imageurl3;
	        		    if(imgName != "null" && imgName!="") 
	        		    {
	        		    	imgHtml += '<div><img class="detailImg" onerror=\"this.src=\'res/icon/default.png\'\" src="'+imgName +'"></div>'
	        		    }
	        		}
	            	//console.log(travelsContent.content);
	        			detailView.setHtml('<div class="detailTitleCls">'
	        	    			+ record.get('title') +'</div>'+ 
	        	    			'<div class="detailDateCls">'+ record.get('datetime')+'&nbsp;&nbsp;作者:'+record.get('publisher')+'</div>'
	        	    	    	+'<div class="detailContentCls">'+imgHtml
	        	    			+'<div>'+travelsContent.content+'</div></div>'
	        	    	    	+'<br><br>');	
	        			detailView.setMasked(false);
	            },
	            failure:function(){	            	
	            	detailView.setHtml('<div class="detailTitleCls">'
        	    			+ record.get('title') +'</div>'+ 
        	    			'<div class="detailDateCls">'+ record.get('datetime')+'&nbsp;&nbsp;作者:'+record.get('publisher')+'</div>'
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
		//console.log(this.getRef_detailView().pageNum());
	},	
	
	getPickedCaro9:function(container, newItem, oldItem,opts){
		if(newItem.getItemId() != 2 && !newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum9Segmentbutton().setPressedButtons(newItem.getItemId());
		this.getRef_forum9().setActiveItemTitle(this.getRef_forum9Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg9:function(container, button, pressed){
		if(pressed){
			this.getRef_forum9().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum9().setActiveItemTitle(button.getText());
		}
	},
	
	takePictures:function(){
		takePicture3()
	},
		
	getPictures:function(){
		selectPicture3()
	},
		
	resetForm:function(){
		this.getRef_travelsForm().reset();
		deletePic3(1);
		deletePic3(2);
		deletePic3(3);
	},
	
	submitForm:function(){
		var systemId = Math.round(new Date().getTime()/1000);
		var formpanel = this.getRef_travelsForm();
			//系统自动分配编号，但手机号要用户输入
		if(formpanel.getValues().photoTitle==0)
		{
			Ext.Msg.alert("提示","请输入标题", Ext.emptyFn);
			return;
			//Ext.Msg.alert('提示','请输入',Ext.emptyFn);
		}
		else {
			Ext.Msg.confirm('提示','确定要发布吗？',
		      function(btn)
		      	{
			        if(btn=='yes')
			        {											      
						formpanel.setValues({travelsId:systemId });
						//alert("此条信息的编号为："+formpanel.getValues().publishId+" （建议保存）");
						publishTravels(formpanel,formpanel.getValues().travelsId);
        			}
			        else
			        {
			        	return;
			        }
		      },this);
		}
	}
});	