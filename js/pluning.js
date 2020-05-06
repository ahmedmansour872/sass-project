$(document).ready(function(){

    $("body").niceScroll({
        cursorcolor:"#333",
        cursorwidth: "7px",
    });

    $('.timer1').countTo({
        from: 0,
        to: 5486,
        speed: 2000,
        refreshInterval: 50
    })
    $('.timer2').countTo({
        from: 0,
        to: 2451,
        speed: 2000,
        refreshInterval: 50
    })
    $('.timer3').countTo({
        from: 0,
        to: 200,
        speed: 2000,
        refreshInterval: 50
    })
    $('.timer4').countTo({
        from: 0,
        to: 2589,
        speed: 2000,
        refreshInterval: 50
    })
    $(".header-right .right span").click(function(){
        $(".header-right .right .lang").fadeToggle();
    })

    $(".placehold").focus(function(){
        if($(this).val()==""){
            $(this).next().css({
                position: "absolute",
                fontSize: "22px",
                top: "5px",
                left: "20px",
                color:"#999"
            })
        }else{
            $(this).next().css({
                position: "absolute",
                fontSize: "18px",
                top: "-35px",
                left: "40px",
                color: "#007bff",
            });
        }
    })
   
    $(".posit").delay(2500).fadeOut(1000);

    $(window).scroll(function(){
        if($(window).scrollTop()>250){
            $(".navbar-bottom").addClass("ahmed");
        }else{
            $(".navbar-bottom").removeClass("ahmed");
        }
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>250){
            $(".scroll").fadeIn(500);
        }else{
            $(".scroll").fadeOut(500);
        }
    })
    
    $(".scroll").click(function(){
        $("html").animate({
            scrollTop:0,
        },300)
    })
})