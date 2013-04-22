 Ext.define('tuanFeng.view.widget.questionForm',{
	extend:'Ext.form.Panel',
	xtype:'w_questionForm',
	
	config:{
	        	cls:'publish',
	        	scrollable: {
	    		    direction: 'vertical',
	    		    directionLock: true,
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
							id:'selectfield2',
							height:35,
							name:'qaSelect',
							label:'问题类型',
							options:[
							{
								text:'养殖技术',
								value:'养殖技术'
							},
							{
								text:'渔药渔病',
								value:'渔药渔病'
							},
							{
								text:'贮藏保鲜',
								value:'贮藏保鲜'
							},
							{
								text:'其他问题',
								value:'其他问题'
							}
							]
						},
						{
							xtype:'textareafield',
							id:'qaContentId',
							name:'qaContent',
							maxRows:6,
							label:'问题描述',
							placeHolder:'该项为必填项'
						},
						{
							xtype:'textfield',
							id:'qaPublisherId',
							name:'qaPublisher',
							height:35,
							label:'发&nbsp&nbsp布&nbsp&nbsp人'
						},
						{
							xtype:'numberfield',
							id:'qaTelephoneId',
							name:'qaTelephone',
							height:35,
							label:'联系电话',
							placeHolder:'该项为必填项'
						},
						{
							xtype: 'numberfield',
							hidden:true,
							name: 'qaId'
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
			        	        	id:'takePicBtn2'
				        	  },{
				        			text:'相册',				        	        
			        	        	ui: 'round',
			        	        	id:'getPicBtn2'
				        	  }]
						},
						 {
				        	xtype:'panel',
				        	html:'<body>' +								
				        	'<div class="box">' +
				        	
							'<h1><center  class="takePic">最多上传3张图片<center></h1>' +
							
							'<div style="width:30%;position:absolute;left:2%;">' +
							'<span id="camera_status4"></span><br>' +
							'<img style="width:90px;height:90px;visibility:hidden; " id="camera_image4" src="" /><br>' +
							'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn4" onclick="deletePic2(4);" value="删除" />' +
							'</div>'+
							
							'<div style="width:30%;position:absolute;left:34%;">' +
							'<span id="camera_status5"></span><br>' +
							'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image5" src="" /><br>' +
							'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn5" onclick="deletePic2(5);" value="删除" />' +
							'</div>'+
								
							'<div style="width:30%;position:absolute;left:66%;">' +
							'<span id="camera_status6"></span><br>' +
							'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image6" src="" /><br>' +
							'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn6" onclick="deletePic2(6);" value="删除" />' +
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
				        	        	id:'resetBtn2'
				        	         },
					        	     {
					        	        text:'提交',
					        	        ui: 'action',
					        	        id:'submitBtn2'
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