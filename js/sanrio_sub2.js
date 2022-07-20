$(function(){
    var art = $('article');
    var img = $('article .images');
    var lbBtn = $('.boxFront>.btn');
    var boxFront = $('.boxFront');
    var boxBack = $('.boxBack');
    var lbWrap = $('.lightBoxWrap');
    var lb = $('.lightBox');
    var num = 0;
    // 컨텐츠
    function slide(){
        art.find('.image:first').fadeOut(10,function(){
            $(this).appendTo($('.images'));
            $(this).removeClass('show');
            $(this).fadeIn(0,function(){
                art.find('.image:first').addClass('show');
            });
        });
    }
    var auto = setInterval(slide,1000);

    // function random(){
    //     num = Math.floor(Math.random() * 5 + 1);
    //     console.log(num);
    //     lbWrap.css({
    //         height : '100vh'
    //     });
    //     $('.lb').css({
    //         height : '100%'
    //     })
    // }
    // $('.texts>.btn').click(random);
    $('.texts>.btn').click(function(){
        num = Math.floor(Math.random() * 6 + 1);
        console.log(num);
        lbWrap.css({
            height : '100vh'
        });
        lb.css({
            height : '0'
        });
        $('.lb'+num).css({
            height : '100%'
        });
    });

    lbBtn.click(function(){
        boxFront.css({
            transform : 'rotateY(180deg)'
        });
        boxBack.css({
            transform : 'rotateY(0deg)'
        })
    });
    $('.boxBack>.btn').click(function(){
        lbWrap.css({
            height : 0
        });
        boxFront.css({
            transform : 'rotateY(0deg)'
        });
        boxBack.css({
            transform : 'rotateY(180deg)'
        })
    });
}); 