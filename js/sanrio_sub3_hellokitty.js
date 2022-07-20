$(function(){
    var imageGroup = $('.imageGroup')
    
    // 메인 슬라이드
    function slide (){
        imageGroup.animate({
            marginLeft : '-100%'
        },500,function(){
            imageGroup.find('.image:first').appendTo(imageGroup);
            imageGroup.css({
                marginLeft : '0%'
            });
        });
    }

    var auto = setInterval(slide,3000);
    // 컨텐츠
    $('.img').click(function(){
        var ind = $(this).index();
        console.log(ind)
        var i = ind+1;
        $('.artBtm').removeClass('show');
        $('.ab'+i).addClass('show');
    });
});