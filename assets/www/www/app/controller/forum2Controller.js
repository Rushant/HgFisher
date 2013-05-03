Ext.define('tuanFeng.controller.forum2Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum2Icon:'#forum2Icon',
			ref_forum2:'v_forum2',
			ref_forum2Segmentbutton:'v_forum2 segmentedbutton',	
			ref_dType: 'w_diseasePicker button',
			ref_w_diseasePicker: 'v_forum2 w_diseasePicker',
			ref_arrowBtn: 'v_forum2 #arrowBtn',
			ref_areaMore: 'v_forum2 #areaMore',
		},
		control:{
			ref_forum2Icon:{
				tap:'getForum2View'
			},
			ref_forum2:{
				activeitemchange:'getPickedCaro2'
			},
			ref_forum2Segmentbutton:{
				toggle: 'getPickedSeg2'
			},
			ref_dType: {
				tap: 'getList'
			},
			ref_arrowBtn: {
				tap: 'showMore'
			}
		}
	},
	
	getForum2View:function(){
		if(!this.forum2View)
			this.forum2View = Ext.create('tuanFeng.view.forum2View');	
		if(!this.forum2View.getActiveItem().getStore().isLoaded())
			this.forum2View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum2View);
		Ext.Viewport.setActiveItem(this.forum2View);
	},
	
	getPickedCaro2:function(container, newItem, oldItem,opts){
		if(newItem.getItemId() == 3)
			this.getRef_w_diseasePicker().show();
		else
			this.getRef_w_diseasePicker().hide();
		if(!newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);	
		this.getRef_forum2Segmentbutton().setPressedButtons(newItem.getItemId());
		this.getRef_forum2().setActiveItemTitle(this.getRef_forum2Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg2:function(container, button, pressed){
		if(pressed){
			this.getRef_forum2().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum2().setActiveItemTitle(button.getText());
		}
	},
	
	getList: function(btn){
		var key = btn.getText();
		console.log(key);
		var url = Global.Website + '/Server/getPickedInfoTitle.jsp?categoryid=521&key= ' + key;
		url = encodeURI(url);
		url = encodeURI(url);
		this.forum2View.getActiveItem().getStore().setProxy({
			type: 'jsonp',
	        url : url,
	        reader: {
	            type: 'json',
	            successProperty: 'success'
	        } 
		});
		this.forum2View.getActiveItem().getStore().loadPage(1);
	},
	
	showMore: function(){
		//console.log('dd');
		if(this.getRef_areaMore().getHidden() == true){
			this.getRef_areaMore().show();
			this.getRef_arrowBtn().setIconCls('arrow_up');
		}
		else{
			this.getRef_areaMore().hide();
			this.getRef_arrowBtn().setIconCls('arrow_down');
		}
			
	},
});	