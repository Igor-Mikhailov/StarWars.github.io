$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        navText: ['<img src="img/arrow-left.svg">', '<img src="img/arrow-right.svg">'],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $('.some__link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#yak1').offset().top }, 1000);
        e.preventDefault();
    });
});