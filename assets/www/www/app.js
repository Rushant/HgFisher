var Global = {
	Author:'Rushant',
	//Website : 'http://59.69.65.153:8080/HgFisherServer',
	//http://zhny.0713.me:8080/WiseAgServer
	//Website : 'http://59.69.65.180:8080/HgFisherServer',
	Website : 'http://zhny.0713.me:8080/HgFisherServer',
	//AdImgUrl:'http://59.69.65.153:8080/HgFisherServer/upload/adImg',
	loadingText:'加载中...',
	weatherImgUrl:'http://m.weather.com.cn/img/d',
	weather1Short:'',
	weather1Detail:'',
	newsPageSize: 7,
	infoPageSize: 9
};

Ext.application({
    name: 'tuanFeng',   
    models:['newsModel','publishModel','advertiseModel','expertModel',
            'questionModel','answerModel','travelsModel'],
    stores:['advertiseStore',
            'forum1.forum1Store1','forum1.forum1Store2','forum1.forum1Store3',
            'forum2.forum2Store1','forum2.forum2Store2','forum2.forum2Store3',
            'forum3.forum3Store1','forum3.forum3Store2','forum3.forum3Store3',
            'forum4.forum4Store1','forum4.forum4Store2','forum4.forum4Store3',
            'forum5.forum5Store1','forum5.forum5Store2','forum5.forum5Store3',
            'forum6.forum6Store1','forum6.forum6Store2','forum6.forum6Store3',
            'forum7.forum7Store1','forum7.forum7Store2','forum7.forum7Store3',
            'forum8.forum8Store1','forum8.forum8Store2','forum8.forum8Store3',
            'forum9.forum9Store1'
            ],
    views:[ 'widget.list','widget.noImgList','widget.toolbar','widget.tradeForm','widget.publishList',
            'widget.questionList','widget.answerFloatForm','widget.travelsForm','widget.travelsList',
            'widget.adCarousel','widget.adFloat','widget.questionForm','widget.expertList','widget.diseasePicker',
            'forum1View','forum2View','forum3View',
            'forum4View','forum5View','forum6View',
            'forum7View','forum8View','forum9View',
            'homeView','detailView','questionDetailView'],
    controllers:['forum1Controller','forum2Controller','forum3Controller',
                 'forum4Controller','forum5Controller','forum6Controller',
                 'forum7Controller','forum8Controller','forum9Controller',
                 'mainController'
                 ],
    
    launch: function() {   	    	
    	Ext.Viewport.add({xtype:'v_home'});
    	if(Ext.os.deviceType == 'Phone'){
    		window.plugins.IMSI.GetIMSI(function (IMSI) {
        		//alert(IMSI);
        		Ext.Ajax.request({
        		url : Global.Website + "/Server/recordUser.jsp",
        		params : {
        		"imsi" : IMSI,
        		"appid" : '1',
        		},
        		});
        		}, function (Error) {
        		console.log(Error);
        		});
    	}   	
    }

});

