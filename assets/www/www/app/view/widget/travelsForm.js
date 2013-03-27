 Ext.define('tuanFeng.view.widget.travelsForm',{
	extend:'Ext.form.Panel',
	xtype:'w_travelsForm',
	
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
							xtype:'textfield',
						    id:'travelsTitle',
						    name:'travelsTitle',
						    minHeight: 0,
						    height:35,
						    label:'标&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp题',
						    placeHolder:'该项为必填项'
						},
						{
					    	 xtype:'textareafield',
					    	 id:'travelsDescription',
					    	 name:'travelsDescription',
					    	 maxRows:'4',
					    	 label:'描&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp述',
					    	// placeHolder:'该项为必填项'
						}, 
						{
	    			    	xtype:'textfield',
	    			    	id:'travelsPublisher',
	    			    	name:'travelsPublisher',
	    			    	minHeight: 0,
	    			    	height:35,
	    			    	label:'发&nbsp&nbsp布&nbsp&nbsp人'
	    			    },
	    			    {
	    			    	xtype: 'numberfield',
	    			    	hidden:true,
	    			    	name: 'travelsId'
	    			    },
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
			        	        	id:'takePicBtn3'
				        	  },{
				        			text:'相册',				        	        
			        	        	ui: 'round',
			        	        	id:'getPicBtn3'
				        	  }]
						},
						 {
				        	xtype:'panel',
				        	html:'<body>' +								
				        	'<div class="box">' +
			        		
							'<h1><center  class="takePic">最多上传3张图片<center></h1>' +
							
							'<div style="width:30%;position:absolute;left:2%;">' +
							'<span id="camera_status7"></span><br>' +
							'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image7" src="" /><br>' +
							'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn7" onclick="deletePic3(7);" value="删除" />' +
							'</div>'+
							
							'<div style="width:30%;position:absolute;left:34%;">' +
							'<span id="camera_status8"></span><br>' +
							'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image8" src="" /><br>' +
							'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn8" onclick="deletePic3(8);" value="删除" />' +
							'</div>'+
							
							'<div style="width:30%;position:absolute;left:66%;">' +
							'<span id="camera_status9"></span><br>' +
							'<img style="width:90px;height:90px;visibility:hidden;" id="camera_image9" src="" /><br>' +
							'&nbsp;&nbsp;<input type="button" style="visibility:hidden;" id="deleteBtn9" onclick="deletePic3(9);" value="删除" />' +
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
				        	        	id:'resetBtn3'
				        	         },
					        	     {
					        	        text:'提交',
					        	        ui: 'action',
					        	        id:'submitBtn3'
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