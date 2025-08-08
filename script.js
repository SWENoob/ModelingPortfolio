var reels = document.querySelectorAll('video');
var carousels = document.querySelectorAll(".div-carousel");
var buttonLeft = document.querySelector('#left.svg');
var buttonRight = document.querySelector('#right.svg');
reels.forEach(function (video) {
    video.addEventListener('mouseenter', function () {
        video.play();
    });
    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });
    video.addEventListener("click", function () {
        var link = video.dataset.src;
        window.open(link);
    });
});
buttonLeft.addEventListener('click', function () {
    var container = document.getElementById('insta');
    container.scrollLeft -= 180;
});
buttonRight.addEventListener('click', function () {
    var container = document.getElementById('insta');
    container.scrollLeft += 180;
});
carousels.forEach(function (carousel) {
    var scrollCenter = (carousel.scrollWidth - carousel.clientWidth) / 2;
    carousel.scrollTo(scrollCenter, 0);
});
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}
function addAnimation() {
    carousels.forEach(function (carousel) {
        carousel.setAttribute("data-animated", 'true');
        var carouselContainer = carousel.querySelector(".div-carousel-container");
        var scrollerContent = Array.from(carouselContainer.children);
        scrollerContent.forEach(function (item) {
            var duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", 'true');
            carouselContainer.appendChild(duplicatedItem);
        });
    });
}
