'use strict';
const documentReady = () => {
  // Start Header
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
  // End Header
};

document.addEventListener('DOMContentLoaded', documentReady);