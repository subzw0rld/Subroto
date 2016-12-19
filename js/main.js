//$(".parallax").parallax();
$('select').material_select();

//var currentModule = document.querySelector(".wrapper").className.split(" ")[2];
var windowHeight = window.innerHeight;
var headerHeight = $(".semi-transparent-nav").outerHeight();
var footerHeight = $("footer").outerHeight();

var cardPosition = "odd";
var initPosition = 20;
var verticalPosition = 15;

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
    
    $('.scrollspy').scrollSpy();
    initScroll($('.scrollspy-menu'));
}



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