$(function(){
//开始事件
    searchGoods()
    queryHistory()
    deleteHistory()
    clearHistory()
//开始事件


    function searchGoods(){
        $('.search-form .btn-search').on('click',function(){
           

            var searchHtml = $('.search-form input').val();
           
            if(!searchHtml){
                return false;
            }else{
         
                var historyData = localStorage.getItem('historyData');
                if(historyData){
                    historyData = JSON.parse(historyData)  
              
                }else{
                    historyData = [];
                }

            }

            if(historyData.indexOf(searchHtml)==-1){
                historyData.push(searchHtml)
                localStorage.setItem('historyData',JSON.stringify(historyData))
            }

            queryHistory()
            $('.search-form input').val('');
        })
      
     
    }


    function queryHistory(){
        var historyData = localStorage.getItem('historyData');
        if(historyData){
            historyData = JSON.parse(historyData);
        }else{
            historyData = [];
        }

        historyData = historyData.reverse();

        var html = template('search-HistoryTmp',{rows:historyData})
      
       $('.search-history ul').html(html)
    }

    function deleteHistory(){
        $('.mui-table-view').on('click','.btn-delete',function(){
            console.log($(this));
            var history = $(this).data('history');
            var historyData =  localStorage.getItem('historyData')
            historyData = JSON.parse(historyData);
            var historyIndex = historyData.indexOf(history + "");
           ;
   
            historyData.splice(historyIndex, 1)

            localStorage.setItem('historyData', JSON.stringify(historyData));

            queryHistory();
            
        })
    }

    
function clearHistory() {
    $('.btn-clear').on('click', function() {
        // 直接把本地存储historyData的值设置为空字符串
        localStorage.setItem('historyData', '');
        // 删除了一次历史记录就查询一次
        queryHistory();
    });
}

})