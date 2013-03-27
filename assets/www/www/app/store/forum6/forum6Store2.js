Ext.define('tuanFeng.store.forum6.forum6Store2', {
    extend:'Ext.data.Store',
    //currentPage:6,
    
    config:{
    model: 'tuanFeng.model.newsModel',
    pageSize:Global.newsPageSize,    
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getInfoTitle.jsp?categoryid=510',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});