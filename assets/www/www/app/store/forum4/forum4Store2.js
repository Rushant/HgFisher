Ext.define('tuanFeng.store.forum4.forum4Store2', {
    extend:'Ext.data.Store',
    //currentPage:1,
    
    config:{
    model: 'tuanFeng.model.expertModel',
    pageSize:Global.newsPageSize,    
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getExpert.jsp',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});