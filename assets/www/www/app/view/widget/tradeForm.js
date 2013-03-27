 Ext.define('tuanFeng.view.widget.tradeForm',{
	extend:'Ext.form.Panel',
	xtype:'w_tradeForm',
	
	config:{
	        	cls:'publish',
	        	scrollable: {
	    		    direction: 'vertical',
	    		    directionLock: true
	    		},
	        	items:[
						{
						  xtype:'fieldset',
						  defaults:{	    
					      labelWidth:'35%',
						  labelAlign:'left',
						  labelCls:'labelCls'
						 },
	        	      items:[
	        	             {
		        	        	 xtype:'selectfield',
		        	        	 minHeight: 0,
		        	        	 usePicker:false,
		        	        	 id:'selectfield1',
		                         height:35,
		        	        	 name:'category',
		        	        	 label:'发布类型',
		        	        	 options:[	        	        	          
		        	        	          {
		        	        	        	  text:'求购',
		        	        	        	  value:'1'
		        	        	          },
		        	        	          {
		        	        	        	  text:'供应',
		        	        	        	  value:'0'
		        	        	          }
		        	        	         ]
		        	         },
	        	         {
	        	        	 xtype:'textfield',		
	        	        	 id:'titleTextField',
	        	        	 name:'title',
	        	        	 minHeight: 0,
	                         height:35,
	        	        	 label:'标&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp题',
	        	        	 placeHolder:'该项为必填项'
	        	         },
	        	         {
	        	        	 xtype:'textareafield',
	        	        	 id:'contentTextAreaField',
	        	        	 name:'content',
	        	        	 maxRows:'4',
	        	        	 label:'内&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp容',
	        	        	 placeHolder:'该项为必填项'
	        	         },
	        	         {
	        	        	 xtype:'textfield',
	        	        	 id:'priceTextField',
	        	        	 name:'price',
	        	        	 minHeight: 0,
	                         height:35,
	        	             label:'价&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp格',
	        	             value:'面议'
	        	         },
	        	         {
	        	        	 xtype:'textfield',
	        	        	 id:'areaTextField',
	        	        	 name:'area',
	        	        	 minHeight: 0,
	                         height:35,
	        	        	 label:'地&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp区'
	        	         },
	        	         {
	        	        	 xtype:'numberfield',
	        	        	 id:'validTimeTextField',
	        	        	 name:'validtime',
	        	        	 minHeight: 0,
	                         height:35,
	        	        	 label:'有效时间(天)',
	        	        	 value:'90'
	        	         },
	        	         {
	        	        	 xtype:'textfield',
	        	        	 id:'publisherTextField',
	        	        	 name:'publisher',
	        	        	 minHeight: 0,
	                         height:35,
	        	        	 label:'联&nbsp&nbsp系&nbsp&nbsp人'
	        	         },
	        	         {
	        	        	 xtype:'numberfield',
	        	        	 id:'telephoneNumberField',
	        	        	 name:'telephone',
	        	        	 minHeight: 0,
	                         height:35,
	        	        	 label:'联系电话',
	        	        	 placeHolder:'该项为必填项'
	        	         },
                        {
				            xtype: 'numberfield',
                        	hidden:true,
				            name: 'publishId',
                        }
                        ]
						},			
						{
							 xtype:'panel',
				        	  layout:{
				        		  type:'hbox'
				        	  },
				        	  defaults:{
						    		xtype:'button',
						    		style: 'margin:0.5em',
						    		flex:1,
						    	},
				        	  items:[{
				        		  	text:'照相',				        	        
			        	        	ui: 'round',
			        	        	id:'takePicBtn'
				        	  },{
				        			text:'相册',				        	        
			        	        	ui: 'round',
			        	        	id:'getPicBtn'
				        	  }]
						},
						 {
				        	xtype:'panel',
				        	html:'<body>' +								
				        		'<div class="box">' +
				        		
								'<h1><center  class="takePic">最多上传3张图片<center></h1>' +
								
								'<div style="width:30%;position:absolute;left:2%;">' +
								'<span id="camera_status1"></span><br>' +
								'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image1" src="" /><br>' +
								'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn1" onclick="deletePic(1);" value="删除" />' +
								'</div>'+
								
								'<div style="width:30%;position:absolute;left:34%;">' +
								'<span id="camera_status2"></span><br>' +
								'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image2" src="" /><br>' +
								'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn2" onclick="deletePic(2);" value="删除" />' +
								'</div>'+
								
								'<div style="width:30%;position:absolute;left:66%;">' +
								'<span id="camera_status3"></span><br>' +
								'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image3" src="" /><br>' +
								'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn3" onclick="deletePic(3);" value="删除" />' +
								'</div>'+
			 					
								'</div>'+
								'</body>'
				          },	          
				          {
				        	  xtype:'panel',
				        	  layout:{
				        		  type:'hbox'
				        	  },
				        	  defaults:{
						    		xtype:'button',
						    		style: 'margin:0.1em',
						    		flex:1,
						    	},
				        	  items:[
					        	     {					        	     		        	     	
				        	        	text:'重置',				        	        
				        	        	ui: 'confirm',
				        	        	id:'resetBtn'
				        	         },
					        	     {
					        	        text:'提交',
					        	        ui: 'action',
					        	        id:'submitBtn'
					        	     }
					        	     ]
				          },
				          {
					        	xtype:'panel',
					        	html:'<br><br>'
					          }
	        	       ]
	}
 });     	    