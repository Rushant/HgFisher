Ext.define('tuanFeng.store.forum4.forum4Store3', {
    extend:'Ext.data.Store',
    
    config:{
    model: 'tuanFeng.model.answerModel',
    pageSize:Global.newsPageSize,
    proxy: {
        type: 'jsonp',
        reader: {
     		type: 'json',
            successProperty: 'success'
        } 
    }
    }
});