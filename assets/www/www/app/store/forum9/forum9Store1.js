Ext.define('tuanFeng.store.forum9.forum9Store1', {
    extend:'Ext.data.Store',
    //currentPage:1,
    
    config:{
    model: 'tuanFeng.model.travelsModel',
    pageSize:Global.newsPageSize,    
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getTravelsTitle.jsp',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});