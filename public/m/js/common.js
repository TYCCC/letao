$(function(){
    $("#footer div a").on('click',function(){

      $(this).parent().siblings('div').children('a').removeClass('active');
      $(this).addClass('active')
    })
})