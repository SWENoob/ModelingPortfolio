"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var embla_carousel_1 = require("embla-carousel");
var embla_carousel_auto_scroll_1 = require("embla-carousel-auto-scroll");
var EmblaCarouselArrowButtons_1 = require("./EmblaCarouselArrowButtons");
var EmblaCarouselAutoScroll_1 = require("./EmblaCarouselAutoScroll");
require("./css/base.css");
require("./css/sandbox.css");
require("./css/embla.css");
// Carousel
var OPTIONS = { loop: true };
var emblaNode = document.querySelector('.embla');
var viewportNode = emblaNode.querySelector('.embla__viewport');
var prevBtn = emblaNode.querySelector('.embla__button--prev');
var nextBtn = emblaNode.querySelector('.embla__button--next');
var playBtn = document.querySelector('.embla__play');
// Original Functionality
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
var emblaApi = (0, embla_carousel_1.default)(viewportNode, OPTIONS, [
    (0, embla_carousel_auto_scroll_1.default)({ playOnInit: false })
]);
var removePrevNextBtnsClickHandlers = (0, EmblaCarouselArrowButtons_1.addPrevNextBtnsClickHandlers)(emblaApi, prevBtn, nextBtn);
var removePlayBtnListeners = (0, EmblaCarouselAutoScroll_1.addPlayBtnListeners)(emblaApi, playBtn);
var removeNavBtnListeners = (0, EmblaCarouselAutoScroll_1.addNavBtnListeners)(emblaApi, prevBtn, nextBtn);
emblaApi
    .on('destroy', removePrevNextBtnsClickHandlers)
    .on('destroy', removePlayBtnListeners)
    .on('destroy', removeNavBtnListeners);
