Ext.define('tuanFeng.view.widget.adFloat',{
	extend:'Ext.Panel',
	xtype:'w_adFloat',
	
	config:{
		modal: true,
		align:'right',
		hidden:true,
		layout: 'fit',
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
        scrollable:'both',
        //zIndex:1000,
	}
});