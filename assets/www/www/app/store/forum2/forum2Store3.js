Ext.define('tuanFeng.store.forum2.forum2Store3', {
    extend:'Ext.data.Store',
    //currentPage:1,
    
    config:{
    model: 'tuanFeng.model.newsModel',
    pageSize:Global.infoPageSize,    
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getInfoTitle.jsp?categoryid=505',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});