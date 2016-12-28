//$(".parallax").parallax();
$('select').material_select();
$('.drawer-tab').tabs();

var currentModule = document.querySelector(".wrapper").className.split(" ")[2];
var windowHeight = window.innerHeight;
var headerHeight = $(".semi-transparent-nav").outerHeight();
var footerHeight = $("footer").outerHeight();
var swiperHeight=$('.swiper-container').height();

var cardPosition = "odd";
var initPosition = 20;
var verticalPosition = 15;

var $barIcon=$('.burger-menu').find('.bar-icon');
var $closeIcon=$('.burger-menu').find('.close-icon');
var $drawerCloseBtn=$('.drawer').find('.close-btn');
var $signInBtn=$('.sign-in');

var destinationCollection = ["Arunachal Pradesh", "Spiti", "Leh", "Meghalaya", "Manipur", "Mizoram", "Stoke Kangri", "Manali", "McLeodGanj", "Mana Village", "Kerala", "Coorg", "Pondicherry", "Kashmir", "Ziro", "Nagaland", "Guwahati", "Pobitora", "Madhya Pradesh"];

var page = document.location.href;

var initScroll=function($iElement){
    var offsetY=$("header").height();
    var elementYPos=$iElement.position().top;
    $(window).on("scroll", function(event){
        var windowYPos=$(this).scrollTop();
        
        elementYPos=offsetY-windowYPos;
        
        if(elementYPos<=0){
            elementYPos=0;
        }
        
//        if(windowYPos>=offsetY){
//            elementYPos=0;
//        }else{
//            elementYPos=offsetY
//        }
        
        $iElement.css({
            "top": elementYPos 
        });
    });
}


if (page.indexOf("gallery")!== -1) {
    $('.fancybox').fancybox({
        "transitionIn": "elastic",
        "transitionOut": "elastic",
        "easingIn": "easeOutBack",
        "easingOut": "easeInBack",
        "scrolling": "no"
    });
    
    $('.scrollspy').scrollSpy({scrollOffset: 50});
    initScroll($('.scrollspy-menu'));
}

if (currentModule==="home") {
    var swiper = new Swiper('.swiper-container', {
        autoplay: 3500,
        speed: 1500,
        loop: true
    });
    
    var $arrow=$('.'+currentModule).find('.arrow');
    
    $arrow.addClass('active');
    $arrow.on("click", function(event){
        event.preventDefault();
        
        //$(window).scrollTop($('.swiper-container').height());
        $('body').animate({
            scrollTop: swiperHeight
        }, 900)
    });
}

$('.burger-menu').on('click',function(event){
    event.preventDefault();
    $('.header-nav').toggleClass('show');
    $barIcon.toggleClass('hidden');
    $closeIcon.toggleClass('show');
});

$(window).on('resize', function(event){
    //console.info($(this).width());
    if($(this).width()>992){
        if($('.header-nav').hasClass('show')){
            $('.header-nav').removeClass('show')
        }

        if($closeIcon.hasClass('show')){
            $closeIcon.removeClass('show');
            $barIcon.removeClass('hidden');
        }
    }
});

var toggleScrollTop=function(value) {
    if($(window).scrollTop()>=value){
        $('.scroll-top').show();
    }else{
        $('.scroll-top').hide();
    }
};

$(window).on('scroll', function(){
    if(currentModule==="home") {
        toggleScrollTop(swiperHeight/2);
    }else {
        toggleScrollTop(100);
    }
});

$('.scroll-top').on("click", function(event){
    event.preventDefault();

    $('body').animate({
        scrollTop: 0
    }, 900)
});


$signInBtn.on('click', function(event){
    $('.drawer').addClass('active');
});

$drawerCloseBtn.on('click', function(event){
    $('.drawer').removeClass('active');
});

$('.toc-link').on('click', function(event){
    event.preventDefault();
    console.info("called");
    //$('#tocTab').removeClass('disabled');
    //$('.drawer-tab.tabs').tabs('select_tab', 'tocTab');
    $('#tocTab').click();
});



//console.info($(window).height(),windowHeight);

//if(currentModule==="gallery"){
//    
//    var moduleHeight=windowHeight-(headerHeight+footerHeight);
//    $("."+currentModule).css({
//        "height":moduleHeight
//    });
//    
//    destinationCollection.forEach(function(element, index, arr){
//        $cardTemplate=$('<a href="#galleryModal" class="card"></a>');
//        $(".galleryContainer").append($cardTemplate);
//        var positionTop=(index*initPosition)+(verticalPosition*index)+verticalPosition;
//        $cardTemplate.css({
//            "top":positionTop
//        });
//        
//        $cardTemplate.html(element);
//        
//        //console.info($cardTemplate.html(), element);
//        
//        $cardTemplate.addClass(cardPosition);
//        if(cardPosition==="odd"){
//            cardPosition="even";
//        }else{
//            cardPosition="odd";
//        }
//        
//        $cardTemplate.on('click',function(){
//            $('.modal-title').html($(this).html()+" Gallery");
//            $('#galleryModal').openModal();
//        });
//        
//    });
//    
//    //$('.modal-trigger').leanModal();
//    $('.close-modal').on('click',function(){
//        $('#galleryModal').closeModal();
//    });
//    $(".galleryContainer").height($(".galleryContainer").height()+2*initPosition+verticalPosition);
//}