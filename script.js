'use strict';

/**
 * element toggle function
 */

const toggleElem = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}



/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});



/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}



/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}



/**
 * Slider: clone first slide to create seamless forward loop
 * - Targets `.slider-frame[data-slider]` and appends a clone of the first <li>.
 * - Adds class `slide-clone` to the cloned node to avoid duplicating again.
 */
(function () {
  const slider = document.querySelector('.slider-frame[data-slider]');
  if (!slider) return; // no slider on page

  const ul = slider.querySelector('ul');
  if (!ul) return;

  // if already cloned (either manually or previously), skip
  if (ul.querySelector('.slide-clone')) return;

  const firstSlide = ul.querySelector('li');
  if (!firstSlide) return;

  const clone = firstSlide.cloneNode(true);
  clone.classList.add('slide-clone');
  ul.appendChild(clone);
})();