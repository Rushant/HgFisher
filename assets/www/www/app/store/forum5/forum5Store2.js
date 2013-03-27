Ext.define('tuanFeng.store.forum5.forum5Store2', {
    extend:'Ext.data.Store',
    //currentPage:1,
    
    config:{
    model: 'tuanFeng.model.publishModel',
    pageSize:Global.infoPageSize,    
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getPublishTitle.jsp?category=0',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});