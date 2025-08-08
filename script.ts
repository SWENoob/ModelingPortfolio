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

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
    carousels.forEach((carousel) => {
    carousel.setAttribute("data-animated", 'true');

    const carouselContainer = carousel.querySelector(".div-carousel-container");
    const scrollerContent = Array.from(carouselContainer!.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      (duplicatedItem as Element).setAttribute("aria-hidden", 'true');
      carouselContainer!.appendChild(duplicatedItem);
    });
  });
}

