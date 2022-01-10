'use strict';
const documentReady = () => {
  // Start header
  const headerScroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('header--scroll', window.scrollY > 0);
  };
  window.addEventListener('scroll', headerScroll);

  const openMenu = () => {
    const navLinkList = document.querySelector('.header-nav__link-list');
    navLinkList.classList.add('header-nav__link-list--open');
  };
  const navMenuIcon = document.querySelector('.header-nav__menu-icon');
  navMenuIcon.addEventListener('click', openMenu);

  const closeMenu = () => {
    const navLinkList = document.querySelector('.header-nav__link-list');
    navLinkList.classList.remove('header-nav__link-list--open');
  };
  const navCloseIcon = document.querySelector('.header-nav__close-icon');
  navCloseIcon.addEventListener('click', closeMenu);
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

  // Start questions
  const questions = [...document.querySelectorAll('.questions__question')];
  questions.map((question) => {
    question.addEventListener('click', () => {
      let height = 0;
      let answer = question.nextElementSibling;

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.classList.toggle('questions__answer--open');
      question.children[1].classList.toggle('questions__arrow--rotate-180');
      answer.style.height = `${height}px`;
    });
  });
  // End questions
};

document.addEventListener('DOMContentLoaded', documentReady);
