Ext.define('tuanFeng.controller.mainController',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_backBtn:'#backBtn',
			ref_setBtn:'#setBtn',
			ref_fontSettingBar:'v_detail toolbar',
			ref_fontSegmentBtn:'v_detail segmentedbutton',
			ref_List:'w_list',//此处不能用id单独引用，容易引起混淆、出错？
			ref_noImgList:'w_noImgList',
			ref_homeView:'v_home',
			ref_adCarousel:'w_adCarousel',
			ref_adImg:'w_adCarousel image',
			ref_selectfield1:'#selectfield1',
			ref_selectfield2:'#selectfield2',
			ref_answerImage:'#answerImage',
			ref_answerForm:'w_answerFloatForm',
			ref_detailView:'v_detail'
		},
		control:{
			ref_backBtn:{
				tap:'goBack'
			},
			ref_setBtn:{
				tap:'showSetFontBar'
			},
			ref_fontSegmentBtn:{
				toggle: 'setFont'
			},
			ref_List:{
				itemtap:'getDetail'
			},
			ref_noImgList:{
				itemtap:'getDetail'
			},
			ref_adImg:{
				tap:'getImg'
			},
			ref_selectfield1:{
				focus:'selectfield1Show'
			},
			ref_selectfield2:{
				focus:'selectfield2Show'
			},
			ref_answerImage:{
				tap:'getAnswerForm'
			}
		}
	},	
	
	selectfield1Show:function(){
		this.selectfield1Show = 1;
	},
	
	selectfield2Show:function(){
		this.selectfield2Show = 1;
	},
	
	//初始化时加载外部库函数，用来处理android自带的回退键
    init:function(){   	
    	loadPlugins();
    	setController(this); 
    	var me = this;
    	this.selectfield1Show = 0;
    	this.selectfield2Show = 0;
    	var adStore = Ext.create('tuanFeng.store.advertiseStore');
    	adStore.load({
		    callback: function(records, operation, success) {
		    	if(records.length!=0)
		    	{				    	
		    		var adNum = 0;
		    		for (var key in records) {
		    			adNum++;//计算广告的数量
		    			me.getRef_adCarousel().add(Ext.create("Ext.Img", {
							src:records[key].get('imageurl'),
							cls:'adImgCls',
		            		width: screenWidth,
		            		height:adImgHeight,
					        styleHtmlContent: true,					        
						}));		
		    		}	
		    		var t = 0;
					setInterval(function () {
						if (t == adNum) {
							t = 0;
						} else {
							t = t + 1;
						}
						me.getRef_adCarousel().setActiveItem(t);
					}, 5000);
		    	}	
		    	else
		    	{
		    		me.getRef_adCarousel().add(Ext.create("Ext.Img", {
						src:'res/img/10.jpg',
						cls:'adImgCls',
						width: screenWidth,
	            		height:adImgHeight,
				        styleHtmlContent: true,
				        html:'<span class="weatherInfo">获取天气失败！</span>'
	    	    			 +'<span class="adWords">打造百亿水产，智慧水产'
	      	        		+'<div>实现种苗名市，水产强市</div></span>' ,
					}));
		    	}
		    }
		});
    	Ext.data.JsonP.request({
    	    url: Global.Website+'/Server/getWeather.jsp',
    	    callbackKey: 'callback',
    	    success: function(result) {
    	        var weather = result;
    	        if (weather) {
    	        		Global.weather1Short = '<span class="weatherInfo">'        		
        	    		+'<div>'+weather.weatherinfo.week +'</div>'
        	    		+'<div>'+weather.weatherinfo.weather1 +'</div>'
        	    	   +'<div>'+weather.weatherinfo.temp1+'</div></span>'
        	    	   +'<span class="adWords"><div>打造百亿水产，智慧水产</div>'
    	        		+'<div>实现种苗名市，水产强市</div></span>'; 

    	        		Global.weather1Detail ='<div class="weather1"><div>今天:</div><img src='+Global.weatherImgUrl+weather.weatherinfo.img1+'.gif>'        		
    	        		+'<div class="weatherForecast">'+weather.weatherinfo.weather1
                	    +'<br>'+weather.weatherinfo.temp1+'</div>'
    					+'<div class="weatherDetail">'+weather.weatherinfo.wind1+'&nbsp;&nbsp;'+weather.weatherinfo.fl1
                		+'<br>舒适度：'+ weather.weatherinfo.index
                		+'<br>温馨提醒：'+weather.weatherinfo.index_d+'</div>'
    					+'<br>'
                		+'<div>明天:</div><img  src='+Global.weatherImgUrl+weather.weatherinfo.img3+'.gif>' 
    					+'<div class="weatherForecast">'+weather.weatherinfo.weather2
    					+'<br>'+weather.weatherinfo.temp2+'</div>'
     					+'<div class="weatherDetail">'+weather.weatherinfo.wind2+'&nbsp;&nbsp;'+weather.weatherinfo.fl1
                 		+'<br>舒适度：'+ weather.weatherinfo.index48
                 		+'<br>温馨提醒：'+weather.weatherinfo.index48_d+'</div></div>';	        
    	        }
    	        if(me.getRef_adImg())
    	        me.getRef_adImg().setHtml(Global.weather1Short);
    	    },
    	    failure:function(){
    	    }
    	});
    },
	
	getAnswerForm: function(){
		//console.log(this.getRef_answerImage().getId());
		 if(!this.answerFormView)
    		 this.answerFormView = Ext.Viewport.add({xtype:'w_answerFloatForm'});
		 this.getRef_answerForm().reset();
		 this.answerFormView.show();
	},
	
	showSetFontBar: function(){
		if(this.getRef_fontSettingBar().isHidden())
			this.getRef_fontSettingBar().show();
		else
			this.getRef_fontSettingBar().hide();
	},
	
	setFont: function(container, button, pressed){
		if(pressed){
			//console.log(this.getRef_detailView().getBaseCls());
			if(button.getText() == '小')
				this.getRef_detailView().setBaseCls('detailView_SmallCls');
			else if(button.getText() == '中')
				this.getRef_detailView().setBaseCls('detailViewCls');
			else
				this.getRef_detailView().setBaseCls('detailView_LargeCls');
		}
	},
	
	goBack:function(){//每一个回退键的处理
		Ext.Msg.hide();
		var thisView = Ext.Viewport.getActiveItem();		
		if(this.adImgView && !this.adImgView.isHidden())
			this.adImgView.hide();		//确保浮动页面回退时隐藏	
		if(this.answerFormView && !this.answerFormView.isHidden())
			this.answerFormView.hide();		//确保浮动页面回退时隐藏	
		else{
			if(thisView.getPageNum() == 2)//判断当前页面级数	
				{
				Ext.Viewport.setActiveItem(thisView.getFatherView());	
				}						
			else if(thisView.getPageNum() == 1)
				{
					if(1 == this.selectfield1Show && this.getRef_selectfield1().isFocused)
						{
							this.getRef_selectfield1().isFocused = false;
							this.getRef_selectfield1().onListTap()
						}						
					else if(1 == this.selectfield2Show && this.getRef_selectfield2().isFocused)
						{
							this.getRef_selectfield2().onListTap();
							this.getRef_selectfield2().isFocused = false
						}
					else
						Ext.Viewport.setActiveItem(this.getRef_homeView());
					this.getRef_homeView().isOut = false
				}
			else  {
				if(thisView.isOut == false)
					{
					thisView.isOut = true;	
					}
				else{
					thisView.isOut = false;
					exitApp()
				}
			}
					
		}		
	},
	//三级页面
	getDetail:function(dataview, index, target, record, e, options){
		
		var me = this;		
		//新建页面，以免替代旧页面的不良体验
		if(!me.detailView)
			me.detailView = Ext.create('tuanFeng.view.detailView');
		else
			me.detailView.setBaseCls(me.getRef_detailView().getBaseCls());
		me.detailView.setHtml('');
		me.detailView.setMasked({
		    xtype: 'loadmask',
		    message: '信息加载中...'
		});
		me.getRef_setBtn().show();
		me.getRef_fontSettingBar().hide();
		
		var infoId = record.get('id');
		var infoContent='',videoName='',yStartPos=0,yMovePos=0;
		 Ext.data.JsonP.request({
			 	url: Global.Website + '/Server/getInfoDetail.jsp',
	            callbackKey: 'callback',
	            params: {
	            	infoId:infoId,
	            	format: 'json',
	            },
	            timeout:5000,
	            success: function(result, request) {		            	
	            	infoContent = result;
	            	videoName = infoContent.videourl;
	        		setVideoName(videoName);
	        		if(videoName != "" && videoName != "null")
	        			me.detailView.setHtml('<div class="detailTitleCls">'
	        	    			+ record.get('title') +'</div>'+ 
	        	    			'<div class="detailDateCls">'+ record.get('datetime')+'&nbsp;&nbsp;来源:'+record.get('publisher')+'</div>'
	        	    			+'<center><input class="detailVideoCls"  type="button" onclick="play();" /></center>' 
	        	    	    	+'<div class="detailContentCls">'+infoContent.content+'</div>'
	        	    	    	+'<br><br>');
	        		else
	        			me.detailView.setHtml('<div class="detailTitleCls">'
	        	    			+ record.get('title') +'</div>'+ 
	        	    			'<div class="detailDateCls">'+ record.get('datetime')+'&nbsp;&nbsp;来源:'+record.get('publisher')+'</div>'
	        	    	    	+'<div class="detailContentCls">'+infoContent.content+'</div>'
	        	    	    	+'<br><br>');	
	        		me.detailView.setMasked(false);
	            },
	            failure:function(){	            	
	            	me.detailView.setHtml('<div class="detailTitleCls">'
        	    			+ record.get('title') +'</div>'+ 
        	    			'<div class="detailDateCls">'+ record.get('datetime')+'&nbsp;&nbsp;来源:'+record.get('publisher')+'</div>'
        	    			+'<hr width=100% size=1 color=#00ffff align=center noshade>'
        	    	    	+'<div class="detailContentFailedCls">︶︿︶ 内容加载失败！返回再试</div>');	
	            	me.detailView.setMasked(false);
	    	    }	     
		 });	
		//先存储其父页面，以便处理回退   放在此处，为回退时页面乱的bug处理
		var detailViewFather = Ext.Viewport.getActiveItem();
		me.detailView.setFatherView(detailViewFather);		
		//设置三级页面的标题
		var detailViewTitle = detailViewFather.getDockedComponent(0).getAt(0).getTitle()+
		"-"+ detailViewFather.getActiveItemTitle();
		me.detailView.getAt(0).getAt(0).setTitle(detailViewTitle);
		 me.detailView.getScrollable().getScroller().scrollTo(0,0);
 		Ext.Viewport.setActiveItem(me.detailView);
 		//处理顶栏显示问题
 		me.detailView.getScrollable().getScroller().on('scrollstart',function(scroller,x,y1){
 			me.getRef_fontSettingBar().hide();
 			yStartPos = y1;
 		});
 		me.detailView.getScrollable().getScroller().on('scroll',function(scroller,x,y2){
				yMovePos = y2;
				if(yMovePos - yStartPos > 0  && yMovePos < scroller.maxPosition.y)//实现下滑隐藏顶栏，上滑显示顶栏
					me.detailView.getAt(0).setHidden(true);
				else
					me.detailView.getAt(0).setHidden(false);
			});
		//console.log(this.getRef_detailView().pageNum());
	},	
	
	getImg:function(img){
		var adimgurl = img.getSrc();
		//alert(img.getSrc());
		 if(!this.adImgView)
    		 this.adImgView = Ext.Viewport.add({xtype:'w_adFloat'});
    		// this.adImgView.getAt(0).setSrc(adimgurl);
    		// this.adImgView.getAt(0).show();
		 this.adImgView.setHtml('<img onerror=\"this.src=\'res/img/ad.jpg\'\"'+
 	        	'src="'+adimgurl+'"/>'+ Global.weather1Detail);
    	 this.adImgView.show();
    	 this.getRef_homeView().isOut = false
	}
});