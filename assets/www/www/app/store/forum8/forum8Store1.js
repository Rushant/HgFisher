Ext.define('tuanFeng.store.forum8.forum8Store1', {
    extend:'Ext.data.Store',
    //currentPage:1,
    
    config:{
    model: 'tuanFeng.model.newsModel',
    pageSize:Global.newsPageSize,    
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getInfoTitle.jsp?categoryid=513',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});