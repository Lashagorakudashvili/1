/**/
let countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);

let countdownFunction = setInterval(function() {

  let now = new Date().getTime();

  let timeDifference = countDownDate - now;

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("Days").innerHTML = days;
  document.getElementById("Hours").innerHTML = hours;
  document.getElementById("Minutes").innerHTML = minutes;
  document.getElementById("Seconds").innerHTML = seconds;

  if (timeDifference < 0) {
    clearInterval(countdownFunction);
    document.getElementById("Days").innerHTML = "0";
    document.getElementById("Hours").innerHTML = "0";
    document.getElementById("Minutes").innerHTML = "0";
    document.getElementById("Seconds").innerHTML = "0";
  }

}, 1000);
/**/


/*/*/
/*1*/
let isScrolling = false;
let startX;

function scrollCarousel(direction) {
  if (isScrolling) return;
  isScrolling = true;

  const carousel = document.querySelector('.card-group-carousel');
  const card = document.querySelector('#card');
  const cardWidth = card.offsetWidth;
  const scrollAmount = cardWidth  + 15;
  
  const totalCards = carousel.querySelectorAll('#card').length;
  const maxScrollLeft = (totalCards * scrollAmount) - carousel.offsetWidth;

  let currentScrollLeft = carousel.scrollLeft;

  if (direction === 1) {
    const newScrollLeft = currentScrollLeft + scrollAmount;
    
    if (newScrollLeft > maxScrollLeft) {
      carousel.scrollTo({
        left: 0,
        behavior: 'auto'
      });
    } else {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  } else {
    const newScrollLeft = currentScrollLeft - scrollAmount;

    if (newScrollLeft < 0 && currentScrollLeft !== 0) {
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else if (newScrollLeft < 0 && currentScrollLeft === 0) {
      carousel.scrollTo({
        left: maxScrollLeft,
        behavior: 'auto'
      });
    } 
    else {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  setTimeout(() => {
    isScrolling = false;
  }, 700);
}


let autoScrollInterval = setInterval(() => {
  scrollCarousel(1);
}, 4000);

const carousel = document.querySelector('.carousel-container');
carousel.addEventListener('mouseenter', () => {
  clearInterval(autoScrollInterval);
});
carousel.addEventListener('mouseleave', () => {
  autoScrollInterval = setInterval(() => {
    scrollCarousel(1);
  }, 4000);
});
/*1*/

/*2*/
let isTouching = false;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isTouching = true;

  clearInterval(autoScrollInterval);
});

carousel.addEventListener('touchmove', (e) => {
  // Prevent default scrolling behavior on touch devices
  e.preventDefault();

  clearInterval(autoScrollInterval);
}, { passive: false });

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  // If the swipe is significant enough
  if (Math.abs(deltaX) > 20) {
    if (deltaX > 0) {
      scrollCarousel(0);
    } else {
      scrollCarousel(1);
    }
  }

  isTouching = false; // Reset the flag when touch ends

  autoScrollInterval = setInterval(() => {
    scrollCarousel(1);
  }, 4000);
});
/*2*/
/*/*/


/**/
const lineContnr = document.getElementById("line-contnr");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const ulList2Div = document.getElementById("ul-list-2-div");
const ulList2 = document.getElementById("ul-list-2");

let isRotating = false;

lineContnr.onclick = () => {
    if (!isRotating) {
        line2.classList.add("hidden");

        line1.style.animation = "rotate-down 0.2s ease-in forwards";
        line3.style.animation = "rotate-up 0.2s ease-in forwards";
        isRotating = true;

        ulList2Div.style.maxHeight = ulList2.scrollHeight + "px";
    } else {
        line2.classList.remove("hidden");

        line1.style.animation = "re-rotate-down 0.2s ease-in forwards";
        line3.style.animation = "re-rotate-up 0.2s ease-in forwards";
        isRotating = false;

        ulList2Div.style.maxHeight = "0";
    }
};
/**/








/*//////////////////////////////////*/
