$(function(){
    var btn4 = $('.cnt04 .texts>.btn');
    var btn5 = $('.cnt05 article .btns');
    var lb1btn = $('.cnt05 .lb1 .btns');
    var lbimageGroup =$('.cnt05 .lb1 .imageGroup');
    var artGroup1 = $('.cnt01 .artGroup');
    var imageGroup2 =$('.cnt02 .imageGroup');
    var imageGroup5 =$('.cnt05 article .imageGroup');
    var article5 = $('.cnt05 article');
    var boxBtm = $('.boxBtm');
    var btn3 = $('.cnt03 .resultBtm .btns')
    var cnt03lb = $('.cnt03 .lightBoxWrap')
    var b = 0;

    var wd = $(window).width();
    var mvLeft1 = 0;
    var mvLeft2 = 0;

    if(wd > 1024){
        mvLeft1 = 25;
        mvLeft2 = 13;
    }else if(wd >= 420 && wd <= 1024){
        mvLeft1 = 33;
        mvLeft2 = 17.5;
    }else{
        mvLeft1 = 50;
        mvLeft2 = 26.5;
    }

    // 컨텐츠1
    function slide (){
        artGroup1.animate({
            marginLeft : -mvLeft1+'%'
        },900,function(){
            artGroup1.find('article:first').appendTo(artGroup1);
            artGroup1.css({
                marginLeft : '0%'
            });
        });
    };
    // 컨텐츠2
    function slideimage (){
        imageGroup2.animate({
            marginLeft : -mvLeft2+'%'
        },900,function(){
            imageGroup2.find('.image:first').appendTo(imageGroup2);
            imageGroup2 .css({
                marginLeft : '0%'
            });
        }); 
    };
    var auto = setInterval(slide,3000);
    var auto = setInterval(slideimage,5000);
    // 컨텐츠3
    $('.cnt03 article .btn').click(function(){
        b = 0;
        $('.cnt03 .lightBox>.box').css({
            display:'block'
        })
        $('.cnt03 .resultBox').css({
            display:'none'
        })
        cnt03lb.css({
            height: '100vh'
        });
        $('html,body').stop().animate({
            scrollTop: 0
        },800);
        boxBtm.removeClass('active');
        boxBtm.eq(b).addClass('active');
        $('.bar').css('width',0+'%')
        $('.bars>.image').css('left',-7+'%')
    });
    $('.boxTop>.btn').click(function(){
        cnt03lb.css({
            height: '0vh'
        });
    })
    $('.resultBox>.btn').click(function(){
        cnt03lb.css({
            height: '0vh'
        });
    });
    boxBtm.find('.btn').click(function(){
        b++;
        if(b>=3){
            b=3;
            $('.cnt03 .lightBox>.box').css({
                display:'none'
            })
            $('.cnt03 .resultBox').css({
                display:'block'
            })
        }
        boxBtm.removeClass('active');
        boxBtm.eq(b).addClass('active');
        $({per:(100/3)*(b-1)}).animate({per:(100/3)*b},{
            duration:800,
            progress:function(){
                
                $('.bar').css('width',this.per+'%');
                $('.bars>.image').css('left',this.per-7+'%');
            }
        })
    });
    btn3.find('.btn:first').click(function(){
        b = 0;
        $('.cnt03 .lightBox>.box').css({
            display:'block'
        })
        $('.cnt03 .resultBox').css({
            display:'none'
        })
        boxBtm.eq(b).addClass('active');
        $('.bar').css('width',0+'%');
        $('.bars>.image').css('left',-7+'%');
    });
    btn3.find('.btn:last').click(function(){
        $('.cnt03 .lightBoxWrap').css({
            height: '0vh'
        });
    });
    // 컨텐츠4
    $('main>.btn').click(function(){
        $('.mainWrap>.lightBoxWrap').css({
            height: '100vh'
        });
    });
    btn4.eq(0).click(function(){
        $('.cnt04 .lb1').css({
            height: '100vh'
        });
    });
    btn4.eq(1).click(function(){
        $('.cnt04 .lb2').css({
            height: '100vh'
        });
    });
    btn4.eq(2).click(function(){
        $('.cnt04 .lb3').css({
            height: '100vh'
        });
    });


    $('.lightBoxWrap>.btn').click(function(){
        $('.lightBoxWrap').css({
            height: '0vh'
        });
    });
    var i = 0;
    // 컨텐츠5
    btn5.find('i:first').click(function(){
        i--;
        if(i <= 0){
            i = 0;
        }
        imageGroup5.css('marginLeft',i*-100+'%');
    });
    btn5.find('i:last').click(function(){
        i++;
        if(i >= 7){
            i = 6
        }
        imageGroup5.css('marginLeft',i*-100+'%');
    });
    article5.find('.images').click(function(){
        $('.cnt05 .lb1').css({
            height: '100vh'
        });
    });
    article5.find('.i8').click(function(){
        $('.cnt05 .lb2').css({
            height: '100vh'
        });
    });
    article5.find('.i9').click(function(){
        $('.cnt05 .lb3').css({
            height: '100vh'
        });
    });

    lb1btn.find('i:first').click(function(){
        i--;
        if(i <= 0){
            i = 0;
        }
        lbimageGroup.css('marginLeft',i*-100+'%');
    });
    lb1btn.find('i:last').click(function(){
        i++;
        if(i >= 7){
            i = 6
        }
        lbimageGroup.css('marginLeft',i*-100+'%');
    });
    


    $('.lightBoxWrap .lightBox>.btn').click(function(){
        $('.lightBoxWrap').css({
            height: '0vh'
        });
    });
});