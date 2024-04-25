'use strict';

const $textarea = document.querySelector('#textarea');
const $chatList = document.querySelector('.chat-list');

const MAX_HEIGHT = 120;

$textarea.addEventListener('input', () => {
  if ($textarea.scrollHeight <= MAX_HEIGHT) {
    $textarea.style.overflow = 'hidden';
    $textarea.style.height = 'auto';
    $textarea.style.height = $textarea.scrollHeight + 'px';
  } else {
    $textarea.style.overflow = 'auto';
  }
});

$textarea.addEventListener('keydown', (e) => {
  if (e.isComposing) return;
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const content = $textarea.value;
    if (!content) return;
    const $chat = document.createElement('div');
    $chat.classList.add('chat');
    $chat.innerText = content;
    $chatList.appendChild($chat);
    $textarea.value = '';
    $textarea.style.height = 'auto';
    $textarea.style.height = $textarea.scrollHeight + 'px';
  }
});
