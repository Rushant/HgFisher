Ext.define('tuanFeng.controller.forum6Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum6Icon:'#forum6Icon',
			ref_forum6:'v_forum6',
			ref_forum6Segmentbutton:'v_forum6 segmentedbutton',	
			//ref_detailView:'v_detail'
		},
		control:{
			ref_forum6Icon:{
				tap:'getForum6View'
			},
			ref_forum6:{
				activeitemchange:'getPickedCaro6'
			},
			ref_forum6Segmentbutton:{
				toggle: 'getPickedSeg6'
			},
		}
	},
	
	getForum6View:function(){
		if(!this.forum6View)
			this.forum6View = Ext.create('tuanFeng.view.forum6View');
		if(!this.forum6View.getActiveItem().getStore().isLoaded())
			this.forum6View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum6View);
		Ext.Viewport.setActiveItem(this.forum6View);
	},
	
	getPickedCaro6:function(container, newItem, oldItem,opts){
		this.getRef_forum6Segmentbutton().setPressedButtons(newItem.getItemId());
		if(!newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum6().setActiveItemTitle(this.getRef_forum6Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg6:function(container, button, pressed){
		if(pressed){
			this.getRef_forum6().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum6().setActiveItemTitle(button.getText());
		}
	},
});	