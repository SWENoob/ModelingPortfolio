"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPrevNextBtnsClickHandlers = void 0;
var addTogglePrevNextBtnsActive = function (emblaApi, prevBtn, nextBtn) {
    var togglePrevNextBtnsState = function () {
        if (emblaApi.canScrollPrev())
            prevBtn.removeAttribute('disabled');
        else
            prevBtn.setAttribute('disabled', 'disabled');
        if (emblaApi.canScrollNext())
            nextBtn.removeAttribute('disabled');
        else
            nextBtn.setAttribute('disabled', 'disabled');
    };
    emblaApi
        .on('select', togglePrevNextBtnsState)
        .on('init', togglePrevNextBtnsState)
        .on('reInit', togglePrevNextBtnsState);
    return function () {
        prevBtn.removeAttribute('disabled');
        nextBtn.removeAttribute('disabled');
    };
};
var addPrevNextBtnsClickHandlers = function (emblaApi, prevBtn, nextBtn) {
    var scrollPrev = function () {
        emblaApi.scrollPrev();
    };
    var scrollNext = function () {
        emblaApi.scrollNext();
    };
    prevBtn.addEventListener('click', scrollPrev, false);
    nextBtn.addEventListener('click', scrollNext, false);
    var removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(emblaApi, prevBtn, nextBtn);
    return function () {
        removeTogglePrevNextBtnsActive();
        prevBtn.removeEventListener('click', scrollPrev, false);
        nextBtn.removeEventListener('click', scrollNext, false);
    };
};
exports.addPrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers;
