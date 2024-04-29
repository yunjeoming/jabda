'use strict';

const $input = document.querySelector('.toast-input');
const $button = document.querySelector('.add-toast-btn');
const $toastList = document.querySelector('.toast-list');

const TOAST_DURATION = 5000;
const TRANSITION_DURATION = 300;

function makeToast() {
  const toastContent = $input.value;
  $input.value = '';

  const $toast = document.createElement('div');
  $toast.classList.add('toast');
  $toast.textContent = toastContent;
  $toastList.append($toast);

  requestAnimationFrame(() => {
    $toast.classList.add('fade-in');
  });

  setTimeout(() => {
    $toast.classList.add('fade-out');

    setTimeout(() => {
      $toast.remove();
    }, TRANSITION_DURATION);
  }, TOAST_DURATION);
}

$input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.isComposing) {
    makeToast();
  }
});

$button.addEventListener('click', () => {
  makeToast();
});
