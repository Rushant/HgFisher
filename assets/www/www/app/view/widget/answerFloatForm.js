Ext.define('tuanFeng.view.widget.answerFloatForm',{
	extend:'Ext.form.Panel',
	xtype:'w_answerFloatForm',
	
	config:{
		modal: true,
		align:'right',
		hidden:true,
		cls:'publish',
		padding:5,
		url:Global.Website + '/Server/publishAnswer.jsp',
		onItemDisclosure:true,
        hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        width: Ext.os.deviceType == 'Phone' ? Ext.Viewport.getWindowWidth()*0.9 : 400,
                height: Ext.os.deviceType == 'Phone' ? Ext.Viewport.getWindowHeight()*0.6 : 400,
        centered: true,
        scrollable:'vertical',
        items:[{
        	docked:'top',
        	xtype:'toolbar',
        	title:'我来回答'
        	},
			{
			  xtype:'fieldset',
			  defaults:{	    
		      labelWidth:'35%',
			  labelAlign:'left',
			  labelCls:'labelCls'
			 },
		      items:[
					{
						xtype:'textareafield',
						id:'answerContentId',
						name:'answerContent',
						maxRows:6,
						label:'答&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp案',
						placeHolder:'该项为必填项'
					},
					{
						xtype:'numberfield',
						id:'answerTelephoneId',
						name:'answerTelephone',
						height:35,
						label:'联系电话',
						placeHolder:'该项为必填项'
					},
					 {
		        	 xtype:'textfield',
		        	 id:'answerPublisherTextField',
		        	 name:'answerPublisher',
		             height:35,
		        	 label:'发&nbsp&nbsp布&nbsp&nbsp人',
		        	 value:'匿名用户'
		            },
		            {
						xtype: 'numberfield',
						hidden:true,
						name: 'questionId'
					},
					{
						xtype: 'numberfield',
						hidden:true,
						name: 'answerId'
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
			    		style: 'margin:0.1em',
			    		flex:1,
			    	},
	        	  items:[
		        	     {					        	     		        	     	
	        	        	text:'重置',				        	        
	        	        	ui: 'confirm',
	        	        	id:'resetBtn4'
	        	         },
		        	     {
		        	        text:'提交',
		        	        ui: 'action',
		        	        id:'submitBtn4'
		        	     }
		        	     ]
	          }]
	}
});