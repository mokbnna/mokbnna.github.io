//滚动高度侦测
$(document).ready(function(){
    var navOffset = $('nav').offset();//在文档中的高度
    console.log(navOffset);

    $(window).scroll(function(){
        var scrollOffset = $(window).scrollTop();

        if(scrollOffset>navOffset.top){
            console.log(scrollOffset);
            $('nav').addClass('navFixed');
        }else{
            $('nav').removeClass('navFixed');
        }
        
    })
})