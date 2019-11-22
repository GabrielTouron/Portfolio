// sidebar 

$('.dropdown-btn').click(function() {
    $('.submenu').slideToggle('fast');
        
});

// image header
$('.img-about-before')
    .mouseenter(function() {
        $(this).hide().stop();
        $('.img-about-after').show().stop();
    })
    .mouseleave(function() {
        $(this).show().stop();
        $('.img-about-after').hide().stop();
    });

// hide nav when scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if(currentScrollPos == 0){
    document.getElementById("nav").style.top = "0";
       prevScrollpos = currentScrollPos;
    }else{
    if (prevScrollpos > currentScrollPos) { 
           document.getElementById("nav").style.top = "0";
       } else {
           document.getElementById("nav").style.top = "-85px";
       }
       prevScrollpos = currentScrollPos;
    }
}

// sidebar navmobile

$(".burger").click(function() {
    $('#nav-mobile').css('transform','translateX(0)');
    $('.sidenav-overlay').show().css('opacity','1');
})

$(".sidenav-overlay").click(function() {
    $('#nav-mobile').css('transform','translateX(-150%)');
    $('.sidenav-overlay').hide().css('opacity','0');
})

$("a").click(function() {
    $('#nav-mobile').css('transform','translateX(-150%)');
    $('.sidenav-overlay').hide().css('opacity','0');
})


