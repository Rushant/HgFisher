Ext.define('tuanFeng.controller.forum8Controller',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			ref_forum8Icon:'#forum8Icon',
			ref_forum8:'v_forum8',
			ref_forum8Segmentbutton:'v_forum8 segmentedbutton',	
			ref_forum8List:'v_forum8 w_list',
			//ref_detailView:'v_detail'
		},
		control:{
			ref_forum8Icon:{
				tap:'getForum8View'
			},
			ref_forum8:{
				activeitemchange:'getPickedCaro8'
			},
			ref_forum8Segmentbutton:{
				toggle: 'getPickedSeg8'
			}
		}
	},
	
	getForum8View:function(){
		if(!this.forum8View)
			this.forum8View = Ext.create('tuanFeng.view.forum8View');
		if(!this.forum8View.getActiveItem().getStore().isLoaded())
			this.forum8View.getActiveItem().getStore().loadPage(1);
		//this.getRef_detailView().setFatherView(this.forum8View);
		Ext.Viewport.setActiveItem(this.forum8View);
	},
	
	getPickedCaro8:function(container, newItem, oldItem,opts){
		if(!newItem.getStore().isLoaded())
			newItem.getStore().loadPage(1);
		this.getRef_forum8Segmentbutton().setPressedButtons(newItem.getItemId());
		this.getRef_forum8().setActiveItemTitle(this.getRef_forum8Segmentbutton().getAt(newItem.getItemId()-1).getText());
	},
	
	getPickedSeg8:function(container, button, pressed){
		if(pressed){
			this.getRef_forum8().setActiveItem(button.getItemId()-1);	//carousel的items从0开始			
			this.getRef_forum8().setActiveItemTitle(button.getText());
		}
	},
});	