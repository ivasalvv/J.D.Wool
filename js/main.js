'use strict';

// Main page
var swiper = new Swiper('.mainSwiper', {
  //     loop: true,
  //   autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  pagination: {
    el: '.swiper-pagination',
  },
});

// Item card page
var swiper = new Swiper('.itemCardSwiper1', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.itemCardSwiper2', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

// Header section

const burger = document.getElementById('burger');
const popupMenu = document.getElementById('popupMenu');

function toggleMenu() {
  popupMenu.classList.toggle('active');
  burger.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);

// Function to switch tabs
function openTab(event, tabName) {
  // Get all tab contents and hide them
  var tabContents = document.getElementsByClassName(
    'item-card--container__size-chart'
  );
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  // Remove the active class from all tab links
  var tabLinks = document.getElementsByClassName(
    'item-card--container__info__button'
  );
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  // Show the selected tab content and mark it as active
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}
