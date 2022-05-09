import keys from './keys';

const keyboardLayout = [
  ['IntlBackslash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'NumpadSubtract', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['Lang1', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backquote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'NumpadDecimal', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'AltRight'],
];

let textarea;
let keyboard;
let header;
let text1;
let text2;

let language = 'en';

function render() {
  const container = document.createElement('div');
  container.classList.add('container');

  header = document.createElement('h1');
  header.innerText = 'RSS Virtual Keyboard';

  textarea = document.createElement('textarea');
  textarea.setAttribute('rows', 5);
  textarea.setAttribute('cols', 50);

  keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  text1 = document.createElement('p');
  text1.innerHTML = 'Клавиатура создана в операционной системе MacOS';
  text2 = document.createElement('p');
  text2.innerHTML = 'Для переключения языка комбинация: левый Shift + Space';

  document.body.appendChild(container);

  container.appendChild(header);
  container.appendChild(textarea);
  container.appendChild(keyboard);
  container.appendChild(text1);
  container.appendChild(text2);
}

function createKey(code) {
  const div = document.createElement('div');
  div.classList.add('key', code);
  div.dataset.code = code;

  div.innerText = keys[code][language].key;
  return div;
}

render();

keyboardLayout.forEach((keyboardRow) => {
  const row = document.createElement('div');
  row.classList.add('row');
  keyboardRow.forEach((code) => {
    row.appendChild(createKey(code));
  });
  keyboard.appendChild(row);
});

let isCapsLock = false;
let isShift = false;

let mouseDownEl = null;

function updateKeys() {
  Object.entries(keys).forEach(([code, key]) => {
    const keyEl = keyboard.querySelector(`[data-code="${code}"]`);
    let character = key[language][isShift ? 'shiftKey' : 'key'];
    if (isCapsLock) {
      character = !isShift ? character.toUpperCase() : character.toLowerCase();
    }
    keyEl.innerText = character;
  });
}
function setLocalStorage() {
  localStorage.setItem('language', language);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
    updateKeys();
  }
}

window.addEventListener('load', getLocalStorage);

function setShift(value) {
  if (isShift === value) {
    return;
  }
  isShift = value;
  updateKeys();
}

function removeLastCharacter() {
  const array = textarea.value.split('');
  array.pop();
  textarea.value = array.join('');
}

function addTab() {
  textarea.value += '\t';
}

function addEnter() {
  textarea.value += '\n';
}

function handleMouseDown(event) {
  const keyEl = event.target.closest('.key');

  if (!keyEl) {
    return;
  }

  mouseDownEl = keyEl;
  mouseDownEl.classList.add('active');

  if (keyEl.dataset.code === 'ShiftLeft' || keyEl.dataset.code === 'ShiftRight') {
    setShift(true);
  }
  if (keyEl.dataset.code === 'Lang1') {
    isCapsLock = isCapsLock ? false : true;
    updateKeys();
  }
}

function handleMouseUp() {
  if (!mouseDownEl) {
    return;
  }

  const { code } = mouseDownEl.dataset;
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    setShift(false);
  } else if (code === 'Space' && isShift) {
    language = language === 'en' ? 'ru' : 'en';
    updateKeys();
  } else if (code === 'Backspace') {
    removeLastCharacter();
  } else if (code === 'Tab') {
    addTab();
  } else if (code === 'Enter') {
    addEnter();
  } else if (code === 'Lang1') {
    textarea.value += '';
  } else if (isCapsLock) {
    textarea.value += keys[code][language]['key'].toUpperCase();
  } else {
    textarea.value += keys[code][language][isShift ? 'shiftKey' : 'key'];
  }

  mouseDownEl.classList.remove('active');
  mouseDownEl = null;
}

window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

function handleKeyEvent(event) {
  const keyEl = keyboard.querySelector(`[data-code="${event.code}"]`);

  if (!keyEl) {
    return;
  }

  if (event.type === 'keydown') {
    keyEl.classList.add('active');
  } else {
    keyEl.classList.remove('active');
  }

  setShift(event.getModifierState('Shift'));
}

window.addEventListener('keydown', handleKeyEvent);
window.addEventListener('keyup', handleKeyEvent);
