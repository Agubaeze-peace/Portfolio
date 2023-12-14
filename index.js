// fetch DOM elements
const menuopen = document.querySelector('#mobile-menu-open');
const menuclose = document.querySelector('#mobile-menu-close');
const menu = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('#menu a');
const scrollToTopButton = document.querySelector('.scroll-to-top');

// add event listeners
menuopen.addEventListener('click', openMenu);
menuclose.addEventListener('click', closeMenu);
menuLinks.forEach((item) => item.addEventListener('click', closeMenu));
scrollToTopButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', onScroll);

// event listener function definitions
function openMenu() {
  menu.classList.add('open');
}

function closeMenu() {
  menu.classList.remove('open');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function onScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

onScroll();
