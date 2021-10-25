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