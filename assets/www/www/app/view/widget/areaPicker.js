Ext.define('tuanFeng.view.widget.areaPicker',{
	extend:'Ext.Container',
	xtype:'w_areaPicker',
	
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
		    	        	  text: '国内',
 	        	        	  id: 'areaType1'
		    	          },
		    	          {
		    	        	  icon: 'res/icon/1.png',
		    	        	  iconAlign: 'left',
		    	        	  cls: 'disease2Cls',
		    	        	  iconCls: 'diseaseIconCls',
		    	        	  text: '本地',
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
							width: Ext.Viewport.getWindowWidth()/4,
							height: 50,
					   },
		    	   },
		    	   items:[
							{
								   items:[
								          {
								        	  text: '黄州区',
								        	  id: 'areaType3'
								          },
								          {
								        	  text: '团风县',
								        	  id: 'areaType4'
								          },
								          {
								        	  text: '红安县',
								        	  id: 'areaType5'
								          },
								          {
								        	  text: '麻城市',
								        	  id: 'areaType6'
								          },
								          ]
							},
							{
								   items:[
								          {
								        	  text: '罗田县',
								        	  id: 'areaType7'
								          },
								          {
								        	  text: '英山县',
								        	  id: 'areaType8'
								          },
								          {
								        	  text: '浠水县',
								        	  id: 'areaType9'
								          },
								          {
								        	  text: '蕲春县',
								        	  id: 'areaType10'
								          },
								          ]
							},
							{
								   items:[
								          {
								        	  text: '武穴市',
								        	  id: 'areaType11'
								          },
								          {
								        	  text: '黄梅县',
								        	  id: 'areaType12'
								          },
								          {
								        	  text: '龙感湖',
								        	  id: 'areaType13'
								          },
								          {
								        	  text: '开发区',
								        	  id: 'areaType14'
								          },
								          ]
							},
		    	          ]
		    	   
		       },		       
		       ]
	}
});