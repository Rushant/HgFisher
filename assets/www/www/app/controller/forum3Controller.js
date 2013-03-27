Ext.define('tuanFeng.controller.forum3Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum3Icon:'#forum3Icon',
			ref_forum3:'v_forum3',
			ref_forum3Segmentbutton:'v_forum3 segmentedbutton',	
			//ref_detailView:'v_detail'
		},
		control:{
			ref_forum3Icon:{
				tap:'getForum3View'
			},
			ref_forum3:{
				activeitemchange:'getPickedCaro3'
			},
			ref_forum3Segmentbutton:{
				toggle: 'getPickedSeg3'
			},
		}
	},
	
	getForum3View:function(){
		if(!this.forum3View)
			this.forum3View = Ext.create('tuanFeng.view.forum3View');
		if(!this.forum3View.getActiveItem().getStore().isLoaded())
			this.forum3View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum3View);
		Ext.Viewport.setActiveItem(this.forum3View);
	},
	
	getPickedCaro3:function(container, newItem, oldItem,opts){
		if(!newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum3Segmentbutton().setPressedButtons(newItem.getItemId());
		this.getRef_forum3().setActiveItemTitle(this.getRef_forum3Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg3:function(container, button, pressed){
		if(pressed){
			this.getRef_forum3().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum3().setActiveItemTitle(button.getText());
		}
	},
});	