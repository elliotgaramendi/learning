'use strict';
const documentReady = () => {
  // Start header
  const headerScroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('header--scroll', window.scrollY > 0);
  };
  window.addEventListener('scroll', headerScroll);

  const openMenu = () => {
    const hnLinkList = document.querySelector('.header-nav__link-list');
    hnLinkList.classList.add('header-nav__link-list--open');
  };
  const hnMenuIcon = document.querySelector('.header-nav__menu-icon');
  hnMenuIcon.addEventListener('click', openMenu);

  const closeMenu = () => {
    const hnLinkList = document.querySelector('.header-nav__link-list');
    hnLinkList.classList.remove('header-nav__link-list--open');
  };
  const hnCloseIcon = document.querySelector('.header-nav__close-icon');
  hnCloseIcon.addEventListener('click', closeMenu);
  // End header

  // Start testimony
  const sliders = [...document.querySelectorAll('.testimony__body')];
  const arrowBefore = document.querySelector('#arrowBefore');
  const arrowAfter = document.querySelector('#arrowAfter');
  let value;

  const changePosition = (change) => {
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
    value = Number(currentTestimony);
    value += change;

    sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
    if (value === sliders.length + 1 || value === 0) {
      value = (value === 0 ? sliders.length : 1);
    }
    sliders[value - 1].classList.add('testimony__body--show');
  }

  arrowAfter.addEventListener('click', () => {
    changePosition(1);
  });
  arrowBefore.addEventListener('click', () => {
    changePosition(-1);
  });

  // End testimony
};

document.addEventListener('DOMContentLoaded', documentReady);
