Ext.define('tuanFeng.store.forum4.forum4Store1', {
    extend:'Ext.data.Store',
    //currentPage:1,
    
    config:{
    model: 'tuanFeng.model.questionModel',
    pageSize:Global.newsPageSize,    
    proxy: {
        type: 'jsonp',
        url : Global.Website + '/Server/getQuestionContent.jsp',
        reader: {
            type: 'json',
            successProperty: 'success'
        } 
    },
    autoLoad: false
    }
});