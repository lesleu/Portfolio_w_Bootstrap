$ (".leftItem").hover (function(){
    $(this).addClass("navHover");
}, function(){
    $(this).removeClass("navHover");
});
$ (".topNavLeft").hover (function(){
    $(this).addClass("topNavHover");
}, function(){
    $(this).removeClass("topNavHover");
});
$ (".topNavRight").hover (function(){
    $(this).addClass("topNavHover");
}, function(){
    $(this).removeClass("topNavHover");
});

$ (".projectBox").hover (function(){
    $(this).addClass("projectHover");
}, function(){
    $(this).removeClass("projectHover");
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-left a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-left leftItem ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

jQuery(document).ready(function($){

    $('.project4').on({
         'click': function(){
             $('#change-video').attr('src','./vid/AAMF/AAMF_2021_Netsky_InstagramPost_1.mp4');
         }
     });
     
    $('.project5').on({
         'click': function(){
             $('#change-video').attr('src','./vid/AAMF/AAMF_2021_Wreckno_InstagramPost_1.mp4');
         }
     });
     
    $('.project6').on({
         'click': function(){
             $('#change-video').attr('src','./vid/AAMF/AAMF_2021_Rusko_InstagramPost_1.mp4');
         }
     });
});



const scrollOffset = 300;

const scrollElements = document.querySelector(".textScroll");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = () => {
    scrollElements.classList.add("scrolled");
}

const hideScrollElement = () => {
    scrollElements.classList.remove("scrolled");
}

const handleScrollAnimation = () => {
        if (elementInView(scrollElements,scrollOffset)){
            displayScrollElement();
        } else {
            hideScrollElement();
        }
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})

$(document).ready(function() {
    //change the integers below to match the height of your upper div, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $(window).scroll(function () { 
  
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() > 1000) {
        $('.projectNav').addClass('navbarFixed');
      }
  
      if ($(window).scrollTop() < 1001) {
        $('.projectNav').removeClass('navbarFixed');
      }
    });
  });

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}