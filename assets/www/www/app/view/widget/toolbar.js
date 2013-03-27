Ext.define('tuanFeng.view.widget.toolbar',{
	extend:'Ext.TitleBar',
	xtype:'w_toolbar',
	
	config:{
		cls:'topToolbarCls',
		docked:'top',
		height:41,
		items:[{
			iconMask: true,
			ui:'plain',
    		id:'backBtn',
    		align:'left',
    		iconCls:'reply'
		}]
	}
});