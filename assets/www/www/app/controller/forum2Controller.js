Ext.define('tuanFeng.controller.forum2Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum2Icon:'#forum2Icon',
			ref_forum2:'v_forum2',
			ref_forum2Segmentbutton:'v_forum2 segmentedbutton',	
			//ref_detailView:'v_detail'
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
});	