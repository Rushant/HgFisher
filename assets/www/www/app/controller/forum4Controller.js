Ext.define('tuanFeng.controller.forum4Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum4Icon:'#forum4Icon',
			ref_forum4:'v_forum4',
			ref_forum4Segmentbutton:'v_forum4 segmentedbutton',	
			ref_questionList:'w_questionList',
			ref_expertList:'w_expertList',
			ref_takePicBtn2:'#takePicBtn2',
			ref_getPicBtn2:'#getPicBtn2',
			ref_resetBtn2:'#resetBtn2',
			ref_submitBtn2:'#submitBtn2',
			ref_questionForm:'w_questionForm',
			ref_resetBtn4:'#resetBtn4',
			ref_submitBtn4:'#submitBtn4',
			ref_answerForm:'w_answerFloatForm'
		},
		control:{
			ref_forum4Icon:{
				tap:'getForum4View'
			},
			ref_forum4:{
				activeitemchange:'getPickedCaro4'
			},
			ref_forum4Segmentbutton:{
				toggle: 'getPickedSeg4'
			},
			ref_questionList:{
				itemtap:'getDetail'
			},
			ref_expertList:{
				itemtap:'getExpertDetail'
			},
			ref_takePicBtn2:{
				tap:'takePictures'
			},
			ref_getPicBtn2:{
				tap:'getPictures'
			},
			ref_resetBtn2:{
				tap:'resetForm'
			},
			ref_submitBtn2:{
				tap:'submitForm'
			},
			ref_resetBtn4:{
				tap:'resetAnswerForm'
			},
			ref_submitBtn4:{
				tap:'submitAnswerForm'
			}
		}
	},
	
	getForum4View:function(){
		if(!this.forum4View)
			this.forum4View = Ext.create('tuanFeng.view.forum4View');
		//处理信息列表与交互模块的差异
		if(this.forum4View.getActiveItem().getItemId() != 3 && !this.forum4View.getActiveItem().getStore().isLoaded())
			this.forum4View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum4View);
		Ext.Viewport.setActiveItem(this.forum4View);
	},
	
	getPickedCaro4:function(container, newItem, oldItem,opts){
		if(newItem.getItemId() != 3 && !newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum4Segmentbutton().setPressedButtons(newItem.getItemId());
		this.getRef_forum4().setActiveItemTitle(this.getRef_forum4Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg4:function(container, button, pressed){
		if(pressed){
			this.getRef_forum4().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum4().setActiveItemTitle(button.getText());
		}
	},
	
	getDetail:function(dataview, index, target, record, e, options){

		//先存储其父页面，以便处理回退
		var detailViewFather = Ext.Viewport.getActiveItem();
		//新建页面，以免替代旧页面的不良体验
		var questionDetailView = Ext.create('tuanFeng.view.questionDetailView');
		questionDetailView.setFatherView(detailViewFather);
		//设置三级页面的标题
		var detailViewTitle = detailViewFather.getDockedComponent(0).getAt(0).getTitle()+
		"-"+ detailViewFather.getActiveItemTitle();
		questionDetailView.getAt(0).setTitle(detailViewTitle);		
		
		this.questionId = record.get('id');
		var answerContent='';
    	var questionImgUrl='',imgHtml='',answerImgHtml='',answerImageUrl='',answerHtml='';	
    	var answerStore = Ext.create('tuanFeng.store.forum4.forum4Store3');
		answerStore.setProxy({
    		url : Global.Website + '/Server/getAnswer.jsp?questionId='
    				+this.questionId
    	});	   
		answerStore.load({
		    callback: function(records, operation, success) {
		    	questionDetailView.setMasked(false);
		    	var i,j,k;
		    	if(records.length!=0)
			   	{
    				for(i = 0; i<records.length; i++)
    				{
    					answerImgHtml="";
				    	for(j = 1; j<=3; j++)
						{
				 		 	answerImageUrl = records[i].get('imageurl'+j);
						    if(answerImageUrl != "null" && answerImageUrl!="") 
						    {
						    	answerImgHtml += '<div><img class="detailImgCls" onerror=\"this.src=\'res/icon/default.png\'\" src="'+answerImageUrl +'"></div>'
						    }
						}
				    	answerHtml += 
						    '<hr width=100% size=1 color=#00ffff align=center noshade>'+
						    '<div class="detailContentCls">回答者：'+ records[i].get('publisher')+'</div>'+
						    '<div class="detailContentCls">回答时间：' + records[i].get('publishtime') +'</div>'+
						    '<div class="detailContentCls">联系方式：<a href="tel:'+records[i].get('telephone')+'">'+ records[i].get('telephone')+'</a></div>'+
						    '<div class="detailContentCls">具体答案：<br>'+ records[i].get('answer')+'</div>'+
						    '<div class="detailContentCls">'+ answerImgHtml+'</div>';
    				}
			   		
				}	
				else
				{
					answerHtml =
						    '<hr width=100% size=1 color=#00ffff align=center noshade>'+
							'<div class="detailContentCls">暂无回答</div>';
				}
		    	for(k = 1; k<=3; k++)
				{
		 		 	questionImgUrl = record.get('imageurl'+k);
				    if(questionImgUrl != "null" && questionImgUrl!="") 
				    {
				    	imgHtml += '<div><img class="detailImgCls" onerror=\"this.src=\'res/icon/default.png\'\" src="'+questionImgUrl +'"></div>'
				    }
				}		    	
		    	questionDetailView.getAt(1).setHtml('<div class="detailTitleCls">'+ record.get('question') + '</div>'+
					    '<div class="detailDateCls">'+ record.get('publishtime') + '</div>'+
					    '<div class="detailContentCls">发布者：'+ record.get('publisher')+'</div>'+
					    '<div class="detailContentCls">联系方式：<a href="tel:'+record.get('telephone')+'">'+ record.get('telephone')+'</a></div>'+				     
					    '<div class="detailContentCls">'+ imgHtml+'</div>');
		    	questionDetailView.getAt(3).setHtml( answerHtml+'<br><br>');
		    }});   	
		
		questionDetailView.getScrollable().getScroller().scrollTo(0,0);
		Ext.Viewport.setActiveItem(questionDetailView);
		//处理顶栏显示问题
		questionDetailView.getScrollable().getScroller().on('scrollstart',function(scroller,x,y1){
 			yStartPos = y1;
 		});
		questionDetailView.getScrollable().getScroller().on('scroll',function(scroller,x,y2){
				yMovePos = y2;
				if(yMovePos - yStartPos > 0  && yMovePos < scroller.maxPosition.y)//实现下滑隐藏顶栏，上滑显示顶栏
					questionDetailView.getAt(0).setHidden(true);
				else
					questionDetailView.getAt(0).setHidden(false);
			});
	},
	
	 getExpertDetail: function(dataview, index, target, record, e, options){
		//先存储其父页面，以便处理回退
		var detailViewFather = Ext.Viewport.getActiveItem();
		//新建页面，以免替代旧页面的不良体验
		var detailView = Ext.create('tuanFeng.view.detailView');
		detailView.setFatherView(detailViewFather);		
		//设置三级页面的标题
		var detailViewTitle = detailViewFather.getDockedComponent(0).getAt(0).getTitle()+
		"-"+ detailViewFather.getActiveItemTitle();
		detailView.getAt(0).getAt(0).setTitle(detailViewTitle);		
		detailView.setHtml(
    			'<img class="expertDetailImage" onerror=\"this.src=\'res/icon/expert.png\'\" src="' +record.get('imageurl') +'">'+
    			'<div class="detailContentCls">'+
    			"姓名："+ record.get('name')+   
    			"<br>出生年月："+record.get('birthday')+
    			"<br>职务："+record.get('title')+
    			"<br>专业："+record.get('position')+
    			'<br>电话1：<a href="tel:'+record.get('mobilephone')+'">'+record.get('mobilephone')+'</a>'+
    			'<br>电话2：<a href="tel:'+record.get('telephone')+'">'+record.get('telephone')+'</a>'+
    			"<br>简介："+record.get('description')+'</div><br><br>');
		detailView.setMasked(false);
		Ext.Viewport.setActiveItem(detailView);  
	   	detailView.getScrollable().getScroller().scrollTo(0,0);
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
 		//进入打电话界面
 	//	window.location = "tel:" + record.get('telephone');
	 },
	 
	 takePictures:function(){
			takePicture2()
		},
		
		getPictures:function(){
			selectPicture2()
		},
		
		resetForm:function(){
			this.getRef_questionForm().reset();
			deletePic2(1);
			deletePic2(2);
			deletePic2(3);
		},
		
		submitForm:function(){
			var questionId = Math.round(new Date().getTime()/1000);
			var formpanel = this.getRef_questionForm();
				//系统自动分配编号，但手机号要用户输入
				if(formpanel.getValues().qaContent==0)
				{
					Ext.Msg.alert("提示","请输入问题描述", Ext.emptyFn);
					return;
					//Ext.Msg.alert('提示','请输入',Ext.emptyFn);
				}
				else if(formpanel.getValues().qaTelephone==0)
				{
					//alert("请输入内容");
					Ext.Msg.alert("提示","请输入联系电话", Ext.emptyFn);
					return;	 								
				}
				else {
					Ext.Msg.confirm('提示','确定要发布吗？',

				      function(btn)
				      	{
					        if(btn=='yes')
					        {											      
								formpanel.setValues({qaId:questionId });
	 							//alert("此条信息的编号为："+formpanel.getValues().publishId+" （建议保存）");
								publishQA(formpanel,formpanel.getValues().qaId);
	            			}
					        else
					        {
					        	return;
					        }
				      },this);
				}
		},
		
		resetAnswerForm: function(){
			this.getRef_answerForm().reset();
		},
	
		submitAnswerForm: function(){
			var me = this;
			var formpanel = this.getRef_answerForm();
			var systemId = Math.round(new Date().getTime()/1000);
			//系统自动分配编号，但手机号要用户输入
			if(formpanel.getValues().answerContent==0)
			{
				//Ext.Msg.setZIndex(999);
				Ext.Msg.defaultAllowedConfig.zIndex = 1000;
				Ext.Msg.alert("提示","请输入答案",Ext.emptyFn);				
				return;
				//Ext.Msg.alert('提示','请输入',Ext.emptyFn);
			}
			else if(formpanel.getValues().answerTelephone==0)
			{
				//alert("请输入内容");
				Ext.Msg.defaultAllowedConfig.zIndex = 1000;
				Ext.Msg.alert("提示","请输入联系电话", Ext.emptyFn);
				return;	 								
			}
			else {
				//make sure floating views display on the top;
				Ext.Msg.defaultAllowedConfig.zIndex = 1000;
				Ext.Msg.confirm('提示','确定要发布吗？',

			      function(btn)
			      	{
				        if(btn=='yes')
				        {											      
							formpanel.setValues({answerId:systemId,
								questionId:me.questionId
							});
							formpanel.setUrl(Global.Website + '/Server/publishAnswer.jsp')
					        formpanel.submit({
					        	waitMsg : {message:'信息发布中...'},
					        	success:function(){
					        		Ext.Msg.alert("提示", "信息已上传，审核中...",Ext.emptyFn);
					        		return;
					        	},
					        	failure:function(){
					        		Ext.Msg.alert("提示", "发布失败！",Ext.emptyFn);
					        		return;
					        	}
					        });
            			}
				        else
				        {
				        	return;
				        }
			      },this);
			}
			
		}
});	

