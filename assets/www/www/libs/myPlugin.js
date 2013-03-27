var controller;
var image1Exist = false;
var image2Exist = false;
var image3Exist = false;
var image4Exist = false;
var image5Exist = false;
var image6Exist = false;
var image7Exist = false;
var image8Exist = false;
var image9Exist = false;


var videoName;

function setController(controllerPara) {
	controller=controllerPara;
} 

function setVideoName(videoNamePara){
	videoName = videoNamePara;
}

function itemTaped(id) {  
	Ext.Ajax.request({  
	    url:Global.Website+'/Server/itemTaped.jsp?id='+id,
	    method:'POST'
	}); 
}
 
function checkConnection() {
	var networkState = navigator.network.connection.type;
	//alert(networkState);
    if(networkState==null)
    {
    	//alert("网络异常，请检查网络是否连接");
    	Ext.Msg.alert("提示","网络异常，请检查网络是否连接",Ext.emptyFn);
    }
}

function eventBackButton() { //针对回退键设置，home键处理时得加setPara	
	controller.goBack();		
 }

function exitApp(){
	navigator.app.exitApp();
}

function onDeviceReady() {
	checkConnection();
	document.addEventListener("backbutton", eventBackButton, false);//返回键
}//监听android回退事件

function loadPlugins() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
//用户回答问题
function userAnswer(){
	 if(!this.answerFloatForm)
		 this.answerFloatForm = Ext.Viewport.add({xtype:'w_answerFloatForm'});
	 this.answerFloatForm.show();
}

function play(){//点击图标后播放视频
	//alert(videoName);
	window.plugins.videoPlayer.play(videoName);  
}
function setVideoName(videoNamePara){
	videoName = videoNamePara;
}//设置播放的视频

function getDisplayId() {
	if (!image1Exist) {
		image1Exist = true;
		return 1; 
	}
	else if (!image2Exist) {
		image2Exist = true;
		return 2; 
	}
	else if (!image3Exist) {
		image3Exist = true;
		return 3; 
	}
	else Ext.Msg.alert("提示","您已经选择了三张图片了！",Ext.emptyFn);
	
}

function getDisplayId2() {
	if (!image4Exist) {
		image4Exist = true;
		return 4; 
	}
	else if (!image5Exist) {
		image5Exist = true;
		return 5; 
	}
	else if (!image6Exist) {
		image6Exist = true;
		return 6; 
	}
	else Ext.Msg.alert("提示","您已经选择了三张图片了！",Ext.emptyFn);
	
}

function getDisplayId3() {
	if (!image7Exist) {
		image7Exist = true;
		return 7; 
	}
	else if (!image8Exist) {
		image8Exist = true;
		return 8; 
	}
	else if (!image9Exist) {
		image9Exist = true;
		return 9; 
	}
	else Ext.Msg.alert("提示","您已经选择了三张图片了！",Ext.emptyFn);
	
}
/**
 * Take picture 
 */
function takePicture() {
    navigator.camera.getPicture(
        function(uri) {
        	var id = getDisplayId();
            var img = document.getElementById('camera_image'+id);
            var del = document.getElementById('deleteBtn'+id);
            img.style.visibility = "visible";
            img.src = uri;            
            del.style.visibility = "visible";
            //img.style.display = "block";
            //document.getElementById('camera_status'+id).innerHTML = "照相成功<br>:)";
        },
        function(e) {
            console.log("Error getting picture: " + e);
            //document.getElementById('camera_status'+id).innerHTML = "未能获得图片 :(";
        },
        { 	quality: 30,  
            destinationType: navigator.camera.DestinationType.FILE_URI,
            targetWidth: 600, 
            targetHeight: 800 
          });
}

function takePicture2() {
    navigator.camera.getPicture(
        function(uri) {
        	var id = getDisplayId2();
            var img = document.getElementById('camera_image'+id);
            var del = document.getElementById('deleteBtn'+id);
            img.style.visibility = "visible";
            img.src = uri;
            del.style.visibility = "visible";
        },
        function(e) {
            console.log("Error getting picture: " + e);
        },
        { 	quality: 30,  
            destinationType: navigator.camera.DestinationType.FILE_URI,
            targetWidth: 600, 
            targetHeight: 800 
          });
}

function takePicture3() {
    navigator.camera.getPicture(
        function(uri) {
        	var id = getDisplayId3();
            var img = document.getElementById('camera_image'+id);
            var del = document.getElementById('deleteBtn'+id);
            img.style.visibility = "visible";
            img.src = uri;
            del.style.visibility = "visible";
        },
        function(e) {
            console.log("Error getting picture: " + e);
        },
        { 	quality: 30,  
            destinationType: navigator.camera.DestinationType.FILE_URI,
            targetWidth: 600, 
            targetHeight: 800 
          });
}
/**
 * Select picture from library
 */

function selectPicture() {
    navigator.camera.getPicture(
        function(uri) {
        	var id = getDisplayId();
            var img = document.getElementById('camera_image'+id);
            var del = document.getElementById('deleteBtn'+id);
            img.style.visibility = "visible";
            img.src = uri;          
            del.style.visibility = "visible";
            //document.getElementById('camera_status'+id).innerHTML = "图片" + id + "选择成功 :)";
        },
        function(e) {
            console.log("Error getting picture: " + e);
            //document.getElementById('camera_status'+id).innerHTML = "未能获得图片 :(";
        },
        { quality: 30, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
}

function selectPicture2() {
    navigator.camera.getPicture(
        function(uri) {
        	var id = getDisplayId2();
            var img = document.getElementById('camera_image'+id);
            var del = document.getElementById('deleteBtn'+id);
            img.style.visibility = "visible";
            img.src = uri;
            del.style.visibility = "visible";
        },
        function(e) {
            console.log("Error getting picture: " + e);
        },
        { quality: 30, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
}

function selectPicture3() {
    navigator.camera.getPicture(
        function(uri) {
        	var id = getDisplayId3();
            var img = document.getElementById('camera_image'+id);
            var del = document.getElementById('deleteBtn'+id);
            img.style.visibility = "visible";
            img.src = uri;
            del.style.visibility = "visible";
        },
        function(e) {
            console.log("Error getting picture: " + e);
        },
        { quality: 30, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
}
/**
 *Delete picture
 */
function deletePic(id) 
{ 
	if(id==1) image1Exist = false;
	else if(id==2) image2Exist = false;
	else image3Exist = false;
	
	var img = document.getElementById('camera_image'+id);
	var del = document.getElementById('deleteBtn'+id);
	img.style.visibility = "hidden";
	del.style.visibility = "hidden"; 
	img.src = "lxt/index.html";
	
	document.getElementById('camera_status'+id).innerHTML = "";
}

function deletePic2(id) 
{ 
	if(id==4) image4Exist = false;
	else if(id==5) image5Exist = false;
	else image6Exist = false;
    
    var img = document.getElementById('camera_image'+id);
    var del = document.getElementById('deleteBtn'+id);
    img.style.visibility = "hidden";
    del.style.visibility = "hidden";
    img.src = "lxt/index.html";
    
    document.getElementById('camera_status'+id).innerHTML = "";
}

function deletePic3(id) 
{ 
	if(id==7) image7Exist = false;
	else if(id==8) image8Exist = false;
	else image9Exist = false;
    
    var img = document.getElementById('camera_image'+id);
    var del = document.getElementById('deleteBtn'+id);
    img.style.visibility = "hidden";
    del.style.visibility = "hidden";
    img.src = "lxt/index.html";
    
    document.getElementById('camera_status'+id).innerHTML = "";
}
/**
 * Publish Form
 */
function publish(publishForm, publishId) {
 	var formpanel = publishForm;
        formpanel.setUrl(Global.Website + '/Server/publish.jsp')
        formpanel.submit({
        	waitMsg : {message:'信息发布中...'},
        	success:function(){
        		Ext.Msg.alert("提示", "信息已上传，审核中...",Ext.emptyFn);
        		return;
        	},
        	failure:function(){
        		Ext.Msg.alert("提示", "发布失败！",Ext.emptyFn);
        		return;
        	}
        });
    	
    imageURI1 = document.getElementById('camera_image1').src;
    imageURI2 = document.getElementById('camera_image2').src;
    imageURI3 = document.getElementById('camera_image3').src;
    /*image1 = imageURI1.substr(imageURI1.lastIndexOf('/')+1);
    image2 = imageURI2.substr(imageURI2.lastIndexOf('/')+1);
    image3 = imageURI3.substr(imageURI3.lastIndexOf('/')+1);  */  
    //if(image1=="index.html" && image2=="index.html" && image3=="index.html")
    if(imageURI1.substr(imageURI1.lastIndexOf('/')+1)!="index.html"){
    	uploadPic(1,imageURI1,publishId);
    }
    if(imageURI2.substr(imageURI2.lastIndexOf('/')+1)!="index.html"){
    	uploadPic(2,imageURI2,publishId);
    }
    if(imageURI3.substr(imageURI3.lastIndexOf('/')+1)!="index.html"){
    	uploadPic(3,imageURI3,publishId);
    }
    
}

function publishQA(publishForm, qaId) {
 	var formpanel = publishForm;
        formpanel.setUrl(Global.Website + '/Server/publishQuestion.jsp')
        formpanel.submit({
        	waitMsg : {message:'信息发布中...'},
        	success:function(){
        		Ext.Msg.alert("提示", "信息已上传，审核中...",Ext.emptyFn);
        		return;
        	},
        	failure:function(){
        		Ext.Msg.alert("提示", "发布失败！",Ext.emptyFn);
        		return;
        	}
        });
    	
    imageURI4 = document.getElementById('camera_image4').src;
    imageURI5 = document.getElementById('camera_image5').src;
    imageURI6 = document.getElementById('camera_image6').src;
    /*image1 = imageURI4.substr(imageURI4.lastIndexOf('/')+1);
    image2 = imageURI5.substr(imageURI5.lastIndexOf('/')+1);
    image3 = imageURI6.substr(imageURI6.lastIndexOf('/')+1);  */  
    //if(image1=="index.html" && image2=="index.html" && image3=="index.html")
    if(imageURI4.substr(imageURI4.lastIndexOf('/')+1)!="index.html"){
    	uploadPic2(4,imageURI4,qaId);
    }
    if(imageURI5.substr(imageURI5.lastIndexOf('/')+1)!="index.html"){
    	uploadPic2(5,imageURI5,qaId);
    }
    if(imageURI6.substr(imageURI6.lastIndexOf('/')+1)!="index.html"){
    	uploadPic2(6,imageURI6,qaId);
    }
    
}

function publishTravels(publishForm, travelsId) {
 	var formpanel =  publishForm;
        formpanel.setUrl(Global.Website + '/Server/travelsPublish.jsp')
        formpanel.submit({
        	waitMsg : {message:'信息发布中...'},
        	success:function(){
        		Ext.Msg.alert("提示", "信息已上传，审核中...",Ext.emptyFn);
        		return;
        	},
        	failure:function(){
        		Ext.Msg.alert("提示", "发布失败！",Ext.emptyFn);
        		return;
        	}
        });
    	
    imageURI7 = document.getElementById('camera_image7').src;
    imageURI8 = document.getElementById('camera_image8').src;
    imageURI9 = document.getElementById('camera_image9').src;
    /*image1 = imageURI7.substr(imageURI7.lastIndexOf('/')+1);
    image2 = imageURI8.substr(imageURI8.lastIndexOf('/')+1);
    image3 = imageURI9.substr(imageURI9.lastIndexOf('/')+1);  */  
    //if(image1=="index.html" && image2=="index.html" && image3=="index.html")
    if(imageURI7.substr(imageURI7.lastIndexOf('/')+1)!="index.html"){
    	uploadPic3(7,imageURI7,travelsId);
    }
    if(imageURI8.substr(imageURI8.lastIndexOf('/')+1)!="index.html"){
    	uploadPic3(8,imageURI8,travelsId);
    }
    if(imageURI9.substr(imageURI9.lastIndexOf('/')+1)!="index.html"){
    	uploadPic3(9,imageURI9,travelsId);
    }
    
}

function uploadPic(id,imageURI,publishId) {
        var options = new FileUploadOptions();
			var params = new Object(); 
		params.id = id;  
		params.publishId = publishId;  
        //alert(imageURI.substr(imageURI.lastIndexOf('/')+1));
            options.fileKey="file";
            
		var extension=imageURI.substr(imageURI.lastIndexOf('.')+1).toUpperCase();
			if(extension=="PNG")
		         options.mimeType="image/png";
		    else if(extension)
		         options.mimeType="image/gif";
		    else
		    	options.mimeType="image/jpeg";
            options.chunkedMode = false;
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.params = params; 
        var ft = new FileTransfer();
        server = Global.Website + "/UploadServlet";
            //document.getElementById('camera_status'+id).innerHTML = "正在上传第"+id+"张图片...";            	
            ft.upload(imageURI, server, function(r) {
                document.getElementById('camera_status'+id).innerHTML = "图片"+id+"上传成功";//+r.bytesSent+" 字节被传送";            	
				return true;
            }, function(error) {
                document.getElementById('camera_status'+id).innerHTML = "图片"+id+"上传失败 ";//+error.code + "（" +  error.message+"）";
                return false;
            }, options);
}

function uploadPic2(id,imageURI,qaId) {
    var options = new FileUploadOptions();
		var params = new Object(); 
	params.id = id-3;  //在此处处理，后台处理为字符型还得转换
	params.qaId = qaId;  
    //alert(imageURI.substr(imageURI.lastIndexOf('/')+1));
        options.fileKey="file";
        
	var extension=imageURI.substr(imageURI.lastIndexOf('.')+1).toUpperCase();
		if(extension=="PNG")
	         options.mimeType="image/png";
	    else if(extension)
	         options.mimeType="image/gif";
	    else
	    	options.mimeType="image/jpeg";
        options.chunkedMode = false;
		options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
		options.params = params; 
    var ft = new FileTransfer();
    server = Global.Website + "/QAServlet";
        //document.getElementById('camera_status'+id).innerHTML = "正在上传第"+id+"张图片...";            	
        ft.upload(imageURI, server, function(r) {
            document.getElementById('camera_status'+id).innerHTML = "图片"+(id-3)+"上传成功";//+r.bytesSent+" 字节被传送";            	
			return true;
        }, function(error) {
            document.getElementById('camera_status'+id).innerHTML = "图片"+(id-3)+"上传失败 ";//+error.code + "（" +  error.message+"）";
            return false;
        }, options);
}

function uploadPic3(id,imageURI,photoId) {
    var options = new FileUploadOptions();
		var params = new Object(); 
	params.id = id-6;  //在此处处理，后台处理为字符型还得转换
	params.photoId = photoId;  
    //alert(imageURI.substr(imageURI.lastIndexOf('/')+1));
        options.fileKey="file";
        
	var extension=imageURI.substr(imageURI.lastIndexOf('.')+1).toUpperCase();
		if(extension=="PNG")
	         options.mimeType="image/png";
	    else if(extension)
	         options.mimeType="image/gif";
	    else
	    	options.mimeType="image/jpeg";
        options.chunkedMode = false;
		options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
		options.params = params; 
    var ft = new FileTransfer();
    server = Global.Website + "/PhotosServlet";
        //document.getElementById('camera_status'+id).innerHTML = "正在上传第"+id+"张图片...";            	
        ft.upload(imageURI, server, function(r) {
            document.getElementById('camera_status'+id).innerHTML = "图片"+(id-6)+"上传成功";//+r.bytesSent+" 字节被传送";            	
			return true;
        }, function(error) {
            document.getElementById('camera_status'+id).innerHTML = "图片"+(id-6)+"上传失败 ";//+error.code + "（" +  error.message+"）";
            return false;
        }, options);
}
