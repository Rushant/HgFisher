var screenWidth = Ext.Viewport.getWindowWidth();
var screeHeight = Ext.Viewport.getWindowHeight();
//alert(screenWidth);
//alert(screeHeight);
var adImgHeight = screenWidth*0.5;//设定图片宽和高
var tabWidth = screenWidth/3;
var tabHeight = (screeHeight - adImgHeight-41.6)/3;
//var adImg = Ext.create('tuanFeng.store.advertiseStore');
//adImg.load();
//alert(adImg.getAt(1).get('imageurl'));
Ext.define('tuanFeng.view.homeView', {
	extend: "Ext.Container",
    xtype : 'v_home',
    
    config : {
    	 fullscreen: true,
         cls:'homePageCls',
         layout: 'vbox',
        /* scrollable: {
 		    direction: 'vertical',
 		    directionLock: true
 		},*/
        items:
            [{
            	xtype:'titlebar',
        		docked:'top',
        		height:41,
        		cls:'topToolbarCls',
            	title:'水产e通'
              },           
              {
            	  xtype:'container',
            	  layout:'fit',
            	  width: screenWidth,
            	  height: adImgHeight,
            	  items:[{           	
              		xtype:'w_adCarousel', 
            		cls:'adCls',
            		centered:true,
            		width: screenWidth,
            		height:adImgHeight
                 }]
              },       	  
             {//此处必须用container将下面的连个小widget给固定在页面下面，用于解决4.0的
            	 //无法正常显示的问题，将页面的Layout设置为fit
            	 xtype:'container',
            	// border: 1,
    	        // style: 'border-color: red; border-style: solid;',
    	        // margin:'0 5',
            	 //docked:'bottom',
            	 layout:'vbox',
            	 items:[{
                	xtype:'container',
                	width:screenWidth,
                	height:tabHeight,
                	//border: 1,
        	        //style: 'border-color: red; border-style: solid;',
        	        layout:'hbox',
        	        defaults: 
                    {   	    
                    	xtype:'container',
                    	width:tabWidth,
                    	height:tabHeight,
                    	defaults: 
	                       {   	    
	                       	xtype:'image',
	                       	centered:true,
	                       	width:84,
	                       	height:84,
	                       },    
                    	//border: 1,
            	      //  style: 'border-color: red; border-style: solid;',
                    },    
        	        items:[{
        	        	items:[{
	     	        		src:'res/images/1.png', 
                           	id : 'forum1Icon'
	     	        	}]
        	        },{
        	        	items:[{
	     	        		src:'res/images/2.png', 
                           	id : 'forum2Icon'
	     	        	}]
        	        },{
        	        	items:[{
	     	        		src:'res/images/3.png', 
                           	id : 'forum3Icon'
	     	        	}]
        	        }]
                   },
                   {
                   	xtype:'container',
                   	width:screenWidth,
                   	height:tabHeight,
                   //	border: 1,
           	       // style: 'border-color: red; border-style: solid;',
	           	     layout:'hbox',
	     	        defaults: 
	                 {   	    
	                 	xtype:'container',
	                 	width:tabWidth,
	                 	height:tabHeight,
	                 	defaults: 
	                       {   	    
	                       	xtype:'image',
	                       	centered:true,
	                       	width:84,
	                       	height:84,
	                       },    
	                 //	border: 1,
	         	      //  style: 'border-color: red; border-style: solid;',
	                 },    
	     	        items:[{
	     	        	items:[{
	     	        		src:'res/images/4.png', 
                           	id : 'forum4Icon'
	     	        	}]
	     	        },{
	     	        	items:[{
	     	        		src:'res/images/5.png', 
                           	id : 'forum5Icon'
	     	        	}]
	     	        },{
	     	        	items:[{
	     	        		src:'res/images/6.png', 
                           	id : 'forum6Icon'
	     	        	}]
	     	        }]
                      },
                  {
                  	xtype:'container',
                  	width:screenWidth,
                  	height:tabHeight,
                  //	border: 1,
          	       // style: 'border-color: red; border-style: solid;',
	          	      layout:'hbox',
	      	        defaults: 
	                  {   	    
	                  	xtype:'container',
	                  	width:tabWidth,
	                  	height:tabHeight,
	                  	defaults: 
	                       {   	    
	                       	xtype:'image',
	                       	centered:true,
	                       	width:84,
	                       	height:84,
	                       },    
	                  //	border: 1,
	          	      //  style: 'border-color: red; border-style: solid;',
	                  },    
	      	        items:[{
	      	        	items:[{
	     	        		src:'res/images/7.png', 
                           	id : 'forum7Icon'
	     	        	}]
	      	        },{
	      	        	items:[{
	     	        		src:'res/images/8.png', 
                           	id : 'forum8Icon'
	     	        	}]
	      	        },{
	      	        	items:[{
	     	        		src:'res/images/9.png', 
                           	id : 'forum9Icon'
	     	        	}]
	      	        }]
                     },
                     ]
             }]
    },
    
 	getPageNum: function(){//设置页面的级数
		this.pageNum = 0;
		return this.pageNum;
	},
	
	initialize: function(){
		this.isOut = false;
	}
});
 