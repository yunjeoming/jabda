'use strict';

const $input = document.querySelector('#name');

document.onselectstart = function () {
  return false;
};

document.addEventListener('mousedown', (e) => {
  if (e.target.closest('.name')) {
    const originX = e.pageX;
    const originValue = +$input.value;
    const onMouseMove = (e) => {
      const currX = e.pageX;
      $input.value = originValue + currX - originX;
      document.body.style.cursor = 'ew-resize';
      $input.style.cursor = 'ew-resize';
    };
    document.addEventListener('mousemove', onMouseMove);
    document.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = null;
      document.body.style.cursor = 'auto';
      $input.style.cursor = 'auto';
    };
  }
});
