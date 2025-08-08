import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import {
  addPlayBtnListeners,
  addNavBtnListeners
} from './EmblaCarouselAutoScroll'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
// Carousel
const OPTIONS: EmblaOptionsType = { loop: true }

const emblaNode = <HTMLElement>document.querySelector('.embla')
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')
const prevBtn = <HTMLElement>emblaNode.querySelector('.embla__button--prev')
const nextBtn = <HTMLElement>emblaNode.querySelector('.embla__button--next')
const playBtn = <HTMLElement>document.querySelector('.embla__play')
// Original Functionality
const reels: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video');
const carousels: NodeListOf<HTMLDivElement> = document.querySelectorAll(".div-carousel");
const buttonLeft : HTMLImageElement | null = document.querySelector('#left.svg');
const buttonRight : HTMLImageElement | null = document.querySelector('#right.svg');

reels.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  video.addEventListener("click", () => {
    let link:any = video.dataset.src;
    window.open(link);
  });
});

buttonLeft!.addEventListener('click', function() {
    const container : HTMLElement = document.getElementById('insta')!;
    container.scrollLeft -= 180;
});

buttonRight!.addEventListener('click', function() {
    const container : HTMLElement = document.getElementById('insta')!;
    container.scrollLeft += 180;
});

carousels.forEach((carousel) => {
    let scrollCenter = (carousel.scrollWidth - carousel.clientWidth) / 2;
    carousel.scrollTo(scrollCenter, 0)
});

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [
  AutoScroll({ playOnInit: false })
])

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn
)
const removePlayBtnListeners = addPlayBtnListeners(emblaApi, playBtn)
const removeNavBtnListeners = addNavBtnListeners(emblaApi, prevBtn, nextBtn)

emblaApi
  .on('destroy', removePrevNextBtnsClickHandlers)
  .on('destroy', removePlayBtnListeners)
  .on('destroy', removeNavBtnListeners)
 

