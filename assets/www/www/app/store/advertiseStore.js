Ext.define('tuanFeng.store.advertiseStore', {
    extend:'Ext.data.Store',
    //currentPage:1,
    
    config:{
    model: 'tuanFeng.model.advertiseModel', 
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getAdvertise.jsp',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});