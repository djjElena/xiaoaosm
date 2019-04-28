$(function(){
    //医疗团队 图片尺寸
    var dswid=$('.med-box li.med-ds img').width();
    $('.med-box li img').css('width',dswid+'px');
    //医疗团队悬停
    if($(window).width()>1024){
        $('.med-box').on('mouseover','ul li.med-ds a',function(){
            $(this).css('transform','scale(1.15,1.15)').css('z-index','100');
            $(this).find('.med-txt').css('opacity','1');
        }).on('mouseleave','ul li.med-ds a',function(){
            $(this).css('transform','scale(1,1)').css('z-index','2');
            $(this).find('.med-txt').css('opacity','0');
        });
    }
});