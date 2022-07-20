$(function(){
    var open = true;
    $('.hdr').load('./inc/sanrio_header.html',function(){
        $('.nav>li:last').click(function(){
            if(open == true){
                $('.mnWrap').css({
                    opacity: '100%',
                    height: '100%'
                });
                $('body').addClass('menuOpen');
                open = false;
            }else if(open == false){
                $('.mnWrap').css({
                    opacity: '0',
                    height: '0'
                });
                $('body').removeClass('menuOpen');
                open = true;
            }
        });
    });
    $('.ftr').load('./inc/sanrio_footer.html',function(){
        $('.top').click(function(){
            $('html,body').stop().animate({
                scrollTop: 0
            },500);
        });
    });
});