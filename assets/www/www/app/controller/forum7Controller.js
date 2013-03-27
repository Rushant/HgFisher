Ext.define('tuanFeng.controller.forum7Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum7Icon:'#forum7Icon',
			ref_forum7:'v_forum7',
			ref_forum7Segmentbutton:'v_forum7 segmentedbutton',	
			ref_forum7List:'v_forum7 w_list',
			//ref_detailView:'v_detail'
		},
		control:{
			ref_forum7Icon:{
				tap:'getForum7View'
			},
			ref_forum7:{
				activeitemchange:'getPickedCaro7'
			},
			ref_forum7Segmentbutton:{
				toggle: 'getPickedSeg7'
			}
		}
	},
	
	getForum7View:function(){
		if(!this.forum7View)
			this.forum7View = Ext.create('tuanFeng.view.forum7View');
		if(!this.forum7View.getActiveItem().getStore().isLoaded())
			this.forum7View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum7View);
		Ext.Viewport.setActiveItem(this.forum7View);
	},
	
	getPickedCaro7:function(container, newItem, oldItem,opts){
		if(!newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum7Segmentbutton().setPressedButtons(newItem.getItemId());
		this.getRef_forum7().setActiveItemTitle(this.getRef_forum7Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg7:function(container, button, pressed){
		if(pressed){
			this.getRef_forum7().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum7().setActiveItemTitle(button.getText());
		}
	},
});	