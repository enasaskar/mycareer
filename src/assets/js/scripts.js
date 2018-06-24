$(document).ready(function () {
    $(".addCarousel").click(function(){
        debugger;
        console.log("in function");
        // $('.owl-carousel').owlCarousel('add', '<div>HIIIIIIIIIIIIIIIIII</div>').owlCarousel('update');
        // $('.owl-carousel').append("<div class='owl-item'>hiii</div>");
    });
    $(".addMediaItem").click(function(){
        //debugger;
        $(this).next().append('<li class="col-md-3 col-sm-6 col-xs-12"><div class="removeThis"><i class="fa fa-minus-circle" aria-hidden="true"></i></div><div class="team-item thumbnail"><a href="#" class="thumb-info team"><img alt="" height="270" src="img/team/team-1.jpg"><span class="thumb-info-title"><span class="thumb-info-inner">C#</span><span class="thumb-info-type">Level1</span></span></a><p><strong><br>Review</strong></p><p><strong>Endorse</strong></p></div></li>');
    });
    $(".removeThis").click(function(){
        //debugger;
        $(this).parent().remove();
    });
});