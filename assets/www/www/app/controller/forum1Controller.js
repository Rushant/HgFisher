Ext.define('tuanFeng.controller.forum1Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum1Icon:'#forum1Icon',
			ref_forum1:'v_forum1',
			ref_forum1Segmentbutton:'v_forum1 segmentedbutton',	
			ref_forum1List:'v_forum1 w_list',
			//ref_detailView:'v_detail'
		},
		control:{
			ref_forum1Icon:{
				tap:'getForum1View'
			},
			ref_forum1:{
				activeitemchange:'getPickedCaro1'
			},
			ref_forum1Segmentbutton:{
				toggle: 'getPickedSeg1'
			}
		}
	},
	
	getForum1View:function(){
		if(!this.forum1View)
			this.forum1View = Ext.create('tuanFeng.view.forum1View');
		if(!this.forum1View.getActiveItem().getStore().isLoaded())
			this.forum1View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum1View);
		//console.log(this.forum1View.getActiveItem().getStore().getTotalCount());
		Ext.Viewport.setActiveItem(this.forum1View);
	},
	
	getPickedCaro1:function(container, newItem, oldItem,opts){
		if(!newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum1Segmentbutton().setPressedButtons(newItem.getItemId());
		this.getRef_forum1().setActiveItemTitle(this.getRef_forum1Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg1:function(container, button, pressed){
		if(pressed){
			this.getRef_forum1().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum1().setActiveItemTitle(button.getText());
		}
	},
});	