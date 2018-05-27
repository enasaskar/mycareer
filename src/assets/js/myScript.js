$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var clicked = 0;
   $('.info_edit_inplace').click(function(){
       if(clicked != 1)
       {
        var p =  $('.editablePara').text();
        console.log(p);
        $('.editablePara').css("display" , "none");
        //$('.hidden-textbox').css("display" , "block");
       $('.hidden-textbox').append('<textarea class = "msg col-md-12 col-sm-12 col-xs-12" name="msg" id="" rows="4">'+ p +'</textarea> <div class="col-md-12 on-fly-edit"><input id = "save" type="submit" value="Save" class="btn btn-primary pull-right push-bottom"><input type="button" value="Cancle" class="btn btn-primary pull-right push-bottom modal-cancle"></div>'
       );
       }
       clicked = 1;
   });


   $('.hidden-textbox').on('click','input[type = "submit"]',function(){

    var note = $('.msg').val();
    
    $('.msg').remove();
    $('.on-fly-edit').remove();
    //$('.editablePara').text("");
    $('.editablePara').text(note);
    $('.editablePara').css("display" , "block");
    clicked = 0;  
}); 

$('.hidden-textbox').on('click','input[type = "button"]',function(){
    
        $('.msg').remove();
        $('.on-fly-edit').remove();
        $('.editablePara').css("display" , "block");
        clicked = 0;  
    }); 

$('.switsh_to_arabic').click(function()
{
    if($('.switsh_to_arabic').text() == "عربي")
    {
        $('.switsh_to_arabic').text("English")
        $('.enterprise-view-one').addClass("arabic");
        $('.file-upload').text("تغير الصورة")
        $('.enterprise-view-one .thumb-info-social-icons .social').css("float","right");
        $('.main .enterprise-view-one .info_edit_inplace').css("float" ,"left");
        $('.enterprise-view-one .arabic-titile').text(" فودافون مؤسسة عالمية");
        $('.enterprise-view-one .arabic-titile').css("margin-left","70%");
        $('.enterprise-view-one .arabic-headline').text("الاتصالات");
        $('.enterprise-view-one .arabic-headline').css("margin-left","87%");
        $('.enterprise-view-one .editablePara').text("مرمى الذود المارق بال عن. لكل كل وجزر اتّجة وبداية, إذ لان الشطر جزيرتي تشيكوسلوفاكيا, هذه واتّجه واندونيسيا، ما. بـ به، الشهير مليارات. زهاء هاربر إستعمل أم دول. ذلك يتبقّ بمعارضة الجنرال بـ, معقل حالية المنتصر تم دون. أن الأمم والإتحاد لبولندا، يكن, بين مع أراضي لإعلان الطريق. كان الخاطفة وأكثرها شموليةً بـ, بلا بـ أملاً تكاليف العاصمة. دول موالية معاملة مسؤولية في. كل لان كرسي العناد. ثم كما كانت التنازلي الإكتفاء, ٣٠ لمّ الخاسر ومحاولة. لكل أن وقرى أحدث الدنمارك");
        $('.enterprise-view-one .editablePara').css("text-align", "right;");
        $('.enterprise-view-one .editablePara').css("margin-top", "3%");
        $('.main .enterprise-view-one .info_edit').css("float" ,"left");
        //$('.enterprise-view-one .panel-group .accordion-body').addClass('right');
        $('.enterprise-view-one .panel-group .panel-body').addClass('arabic2');
        $('.enterprise-view-one .panel-group .accordion-body h4').text('معلومات اكثر عن الشركة');
        $('.enterprise-view-one .panel-group .accordion-body .web').text('الموقع الالكتروني');
        $('.enterprise-view-one .panel-group .accordion-body .head').text('المركز الرئيسي');
        $('.enterprise-view-one .panel-heading a').text("أقرأ المزيد");

    }
    else if ($('.switsh_to_arabic').text() == "English")
    {
        location.reload();
    }
});


    // -------------------------------------------------------------------------------------------


var clicked_i;  
$('.feature-box > i').click(function()
{
    
    var clicked_i = $(this).data().id;
    $('#'+clicked_i).remove();
});


$('.save_work_form input[value = "Save"]').click(function()
{
   
})


});




