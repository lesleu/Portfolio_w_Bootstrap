$ (".leftItem").hover (function(){
    $(this).addClass("navHover");
}, function(){
    $(this).removeClass("navHover");
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
