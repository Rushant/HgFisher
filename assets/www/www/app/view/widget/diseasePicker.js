Ext.define('tuanFeng.view.widget.diseasePicker',{
	extend:'Ext.Container',
	xtype:'w_diseasePicker',
	
	config:{
		layout:'vbox',
		items:[
		       {
		    	   xtype:'container',	
		    	   layout: 'hbox',
		    	   width: Ext.Viewport.getWindowWidth(),
				   height: 50,			
		    	   defaults: {
						xtype: 'button',
						padding: '0 2',
						pressedCls: 'btnPressed',
						pressedDelay: true,
						ui:'plain',
						width: Ext.Viewport.getWindowWidth()*0.4,
						height: 50,
					},			
		    	   items:[
		    	          {
		    	        	  icon: 'res/icon/1.png',
		    	        	  iconAlign: 'left',
		    	        	  cls: 'disease1Cls',
		    	        	  iconCls: 'diseaseIconCls',
		    	        	  text: '黄鳝',
 	        	        	  id: 'areaType1'
		    	          },
		    	          {
		    	        	  icon: 'res/icon/1.png',
		    	        	  iconAlign: 'left',
		    	        	  cls: 'disease2Cls',
		    	        	  iconCls: 'diseaseIconCls',
		    	        	  text: '泥鳅',
 	        	        	  id: 'areaType2'
		    	          },
		    	          {
		    	        	  iconAlign: 'left',
		    	        	  iconMask: true,
		    	        	  id: 'arrowBtn',
		    	        	  iconCls: 'arrow_down',
		    	        	  width: Ext.Viewport.getWindowWidth()*0.2,
		    	          }
		    	          ]
		       },
		       {
		    	   xtype:'container',	
		    	   id: 'areaMore',
		    	   hidden: true,
		    	   layout: 'vbox',
		    	   defaults: {
		    		   xtype: 'container',
		    		   layout: 'hbox',
		    		   width: Ext.Viewport.getWindowWidth(),
					   height: 50,			
					   defaults: {
						   xtype: 'button',
							padding: '0 2',
							pressedCls: 'btnPressed',
							pressedDelay: true,
							ui:'plain',
							width: Ext.Viewport.getWindowWidth()/3,
							height: 50,
					   },
		    	   },
		    	   items:[
							{
								   items:[
								          {
								        	  icon: 'res/icon/1.png',
								        	  iconAlign: 'left',
								        	  cls: 'disease3Cls',
								        	  iconCls: 'diseaseIconCls',
								        	  text: '草鱼',
								        	  id: 'areaType3'
								          },
								          {
								        	  icon: 'res/icon/1.png',
								        	  iconAlign: 'left',
								        	  cls: 'disease4Cls',
								        	  iconCls: 'diseaseIconCls',
								        	  text: '青鱼',
								        	  id: 'areaType4'
								          },
								          {
								        	  icon: 'res/icon/1.png',
								        	  iconAlign: 'left',
								        	  cls: 'disease4Cls',
								        	  iconCls: 'diseaseIconCls',
								        	  text: '青鱼',
								        	  id: 'areaType5'
								          },
								          ]
							},
							{
								   items:[
								          {
								        	  icon: 'res/icon/1.png',
								        	  iconAlign: 'left',
								        	  cls: 'disease3Cls',
								        	  iconCls: 'diseaseIconCls',
								        	  text: '草鱼',
								        	  id: 'areaType6'
								          },
								          {
								        	  icon: 'res/icon/1.png',
								        	  iconAlign: 'left',
								        	  cls: 'disease4Cls',
								        	  iconCls: 'diseaseIconCls',
								        	  text: '青鱼',
								        	  id: 'areaType7'
								          },
								          {
								        	  icon: 'res/icon/1.png',
								        	  iconAlign: 'left',
								        	  cls: 'disease4Cls',
								        	  iconCls: 'diseaseIconCls',
								        	  text: '青鱼',
								        	  id: 'areaType8'
								          },
								          ]
							},
		    	          ]
		    	   
		       },		       
		       ]
	}
});