'use strict';

const $screenSize = document.querySelector('.screen__size');
const $browserOuterSize = document.querySelector('.browser__outer-size');
const $browserInnerSize = document.querySelector('.browser__inner-size');
const $documentSize = document.querySelector('.document__size');
const $scrollBtn = document.querySelector('.scroll-btn');
const $box = document.querySelector('.box');

const setSizes = () => {
  $screenSize.textContent = `${window.screen.width} x ${window.screen.height}`;
  $browserOuterSize.textContent = `${window.outerWidth} x ${window.outerHeight}`;
  $browserInnerSize.textContent = `${window.innerWidth} x ${window.innerHeight}`;
  $documentSize.textContent = `${document.documentElement.clientWidth} x ${document.documentElement.clientHeight}`;
};

window.addEventListener('resize', () => {
  setSizes();
});

$scrollBtn.addEventListener('click', () => {
  $box.classList.toggle('show');
  setSizes();
});

setSizes();
