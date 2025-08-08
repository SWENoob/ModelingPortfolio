"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embla_carousel_1 = __importDefault(require("embla-carousel"));
const embla_carousel_auto_scroll_1 = __importDefault(require("embla-carousel-auto-scroll"));
const EmblaCarouselArrowButtons_1 = require("./EmblaCarouselArrowButtons");
const EmblaCarouselAutoScroll_1 = require("./EmblaCarouselAutoScroll");
require("../css/base.css");
require("../css/sandbox.css");
require("../css/embla.css");
const OPTIONS = { loop: true };
const emblaNode = document.querySelector('.embla');
const viewportNode = emblaNode.querySelector('.embla__viewport');
const prevBtn = emblaNode.querySelector('.embla__button--prev');
const nextBtn = emblaNode.querySelector('.embla__button--next');
const playBtn = document.querySelector('.embla__play');
const emblaApi = (0, embla_carousel_1.default)(viewportNode, OPTIONS, [
    (0, embla_carousel_auto_scroll_1.default)({ playOnInit: false })
]);
const removePrevNextBtnsClickHandlers = (0, EmblaCarouselArrowButtons_1.addPrevNextBtnsClickHandlers)(emblaApi, prevBtn, nextBtn);
const removePlayBtnListeners = (0, EmblaCarouselAutoScroll_1.addPlayBtnListeners)(emblaApi, playBtn);
const removeNavBtnListeners = (0, EmblaCarouselAutoScroll_1.addNavBtnListeners)(emblaApi, prevBtn, nextBtn);
emblaApi
    .on('destroy', removePrevNextBtnsClickHandlers)
    .on('destroy', removePlayBtnListeners)
    .on('destroy', removeNavBtnListeners);
