<script>
var docao=$(windown).height();
$('.top1').css({'height':docao})
.$('windown').resize(function(){
    var docao=$(windown).height();
    $('.top1').css({'height':docao})
    })
$('.nutmenu').click(function(){
    $('.menuphai').addClass('ra');
    return false;
    })
$('.tat').click(function(){
    $('.menuphai').removeClass('ra');
    return false;
    })
</script>