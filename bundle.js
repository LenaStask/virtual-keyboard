/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./js/keys.js\");\n\n\nconst keyboardLayout = [\n  ['IntlBackslash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'NumpadSubtract', 'Equal', 'Backspace'],\n  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],\n  ['Lang1', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],\n  ['ShiftLeft', 'Backquote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'NumpadDecimal', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],\n  ['ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'AltRight'],\n];\n\nlet textarea;\nlet keyboard;\n\nlet language = 'en';\n\nfunction render() {\n  const container = document.createElement('div');\n  container.classList.add('container');\n\n  textarea = document.createElement('textarea');\n  textarea.setAttribute('rows', 5);\n  textarea.setAttribute('cols', 50);\n\n  keyboard = document.createElement('div');\n  keyboard.classList.add('keyboard');\n\n  document.body.appendChild(container);\n\n  container.appendChild(textarea);\n  container.appendChild(keyboard);\n}\n\nfunction createKey(code) {\n  const div = document.createElement('div');\n  div.classList.add('key', code);\n  div.dataset.code = code;\n\n  div.innerText = _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"][code][language].key;\n  return div;\n}\n\nrender();\n\nkeyboardLayout.forEach((keyboardRow) => {\n  const row = document.createElement('div');\n  row.classList.add('row');\n  keyboardRow.forEach((code) => {\n    row.appendChild(createKey(code));\n  });\n  keyboard.appendChild(row);\n});\n\nlet isCapsLock = false;\nlet isShift = false;\n\nlet mouseDownEl = null;\n\nfunction updateKeys() {\n  Object.entries(_keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).forEach(([code, key]) => {\n    const keyEl = keyboard.querySelector(`[data-code=\"${code}\"]`);\n    let character = key[language][isShift ? 'shiftKey' : 'key'];\n    if (isCapsLock) {\n      character = !isShift ? character.toUpperCase() : character.toLowerCase();\n    }\n    keyEl.innerText = character;\n  });\n}\n\nfunction setShift(value) {\n  if (isShift === value) {\n    return;\n  }\n  isShift = value;\n  updateKeys();\n}\n\nfunction removeLastCharacter() {\n  const array = textarea.value.split('');\n  array.pop();\n  textarea.value = array.join('');\n}\n\nfunction addTab() {\n  textarea.value += '\\t';\n}\n\nfunction addEnter() {\n  textarea.value += '\\n';\n}\n\nfunction handleMouseDown(event) {\n  const keyEl = event.target.closest('.key');\n\n  if (!keyEl) {\n    return;\n  }\n\n  mouseDownEl = keyEl;\n  mouseDownEl.classList.add('active');\n\n  if (keyEl.dataset.code === 'ShiftLeft' || keyEl.dataset.code === 'ShiftRight') {\n    setShift(true);\n  }\n  if (keyEl.dataset.code === 'Lang1') {\n    isCapsLock = isCapsLock ? false : true;\n    updateKeys();\n  }\n}\n\nfunction handleMouseUp() {\n  if (!mouseDownEl) {\n    return;\n  }\n\n  const { code } = mouseDownEl.dataset;\n  if (code === 'ShiftLeft' || code === 'ShiftRight') {\n    setShift(false);\n  } else if (code === 'Space' && isShift) {\n    language = language === 'en' ? 'ru' : 'en';\n    updateKeys();\n  } else if (code === 'Backspace') {\n    removeLastCharacter();\n  } else if (code === 'Tab') {\n    addTab();\n  } else if (code === 'Enter') {\n    addEnter();\n  } else if (code === 'Lang1') {\n    textarea.value += '';\n  } else if (isCapsLock) {\n    textarea.value += _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"][code][language]['key'].toUpperCase();\n  } else {\n    textarea.value += _keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"][code][language][isShift ? 'shiftKey' : 'key'];\n  }\n\n  mouseDownEl.classList.remove('active');\n  mouseDownEl = null;\n}\n\nwindow.addEventListener('mousedown', handleMouseDown);\nwindow.addEventListener('mouseup', handleMouseUp);\n\nfunction handleKeyEvent(event) {\n  const keyEl = keyboard.querySelector(`[data-code=\"${event.code}\"]`);\n\n  if (!keyEl) {\n    return;\n  }\n\n  if (event.type === 'keydown') {\n    keyEl.classList.add('active');\n  } else {\n    keyEl.classList.remove('active');\n  }\n\n  setShift(event.getModifierState('Shift'));\n}\n\nwindow.addEventListener('keydown', handleKeyEvent);\nwindow.addEventListener('keyup', handleKeyEvent);\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/keys.js":
/*!********************!*\
  !*** ./js/keys.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keys = {\n  KeyA: {\n    en: {\n      key: 'a',\n      shiftKey: 'A',\n    },\n    ru: {\n      key: 'ф',\n      shiftKey: 'Ф',\n    },\n  },\n  Lang1: {\n    en: {\n      key: 'Caps Lock',\n      shiftKey: 'Caps Lock',\n    },\n    ru: {\n      key: 'Caps Lock',\n      shiftKey: 'Caps Lock',\n    },\n  },\n  IntlBackslash: {\n    en: {\n      key: '§',\n      shiftKey: '±',\n    },\n    ru: {\n      key: '>',\n      shiftKey: '<',\n    },\n  },\n  Digit1: {\n    en: {\n      key: '1',\n      shiftKey: '!',\n    },\n    ru: {\n      key: '1',\n      shiftKey: '!',\n    },\n  },\n  Digit2: {\n    en: {\n      key: '2',\n      shiftKey: '@',\n    },\n    ru: {\n      key: '2',\n      shiftKey: '\"',\n    },\n  },\n  Digit3: {\n    en: {\n      key: '3',\n      shiftKey: '#',\n    },\n    ru: {\n      key: '3',\n      shiftKey: '№',\n    },\n  },\n  Digit4: {\n    en: {\n      key: '4',\n      shiftKey: '$',\n    },\n    ru: {\n      key: '4',\n      shiftKey: '%',\n    },\n  },\n  Digit5: {\n    en: {\n      key: '5',\n      shiftKey: '%',\n    },\n    ru: {\n      key: '5',\n      shiftKey: ':',\n    },\n  },\n  Digit6: {\n    en: {\n      key: '6',\n      shiftKey: '^',\n    },\n    ru: {\n      key: '6',\n      shiftKey: ',',\n    },\n  },\n  Digit7: {\n    en: {\n      key: '7',\n      shiftKey: '&',\n    },\n    ru: {\n      key: '7',\n      shiftKey: '.',\n    },\n  },\n  Digit8: {\n    en: {\n      key: '8',\n      shiftKey: '*',\n    },\n    ru: {\n      key: '8',\n      shiftKey: ';',\n    },\n  },\n  Digit9: {\n    en: {\n      key: '9',\n      shiftKey: '(',\n    },\n    ru: {\n      key: '9',\n      shiftKey: '(',\n    },\n  },\n  Digit0: {\n    en: {\n      key: '0',\n      shiftKey: ')',\n    },\n    ru: {\n      key: '0',\n      shiftKey: ')',\n    },\n  },\n  NumpadSubtract: {\n    en: {\n      key: '-',\n      shiftKey: '_',\n    },\n    ru: {\n      key: '-',\n      shiftKey: '_',\n    },\n  },\n  Equal: {\n    en: {\n      key: '=',\n      shiftKey: '+',\n    },\n    ru: {\n      key: '=',\n      shiftKey: '+',\n    },\n  },\n  Backspace: {\n    en: {\n      key: 'Backspace',\n      shiftKey: 'Backspace',\n    },\n    ru: {\n      key: 'Backspace',\n      shiftKey: 'Backspace',\n    },\n  },\n  Tab: {\n    en: {\n      key: 'Tab',\n      shiftKey: 'Tab',\n    },\n    ru: {\n      key: 'Tab',\n      shiftKey: 'Tab',\n    },\n  },\n  KeyQ: {\n    en: {\n      key: 'q',\n      shiftKey: 'Q',\n    },\n    ru: {\n      key: 'й',\n      shiftKey: 'Й',\n    },\n  },\n  KeyW: {\n    en: {\n      key: 'w',\n      shiftKey: 'W',\n    },\n    ru: {\n      key: 'ц',\n      shiftKey: 'Ц',\n    },\n  },\n  KeyE: {\n    en: {\n      key: 'e',\n      shiftKey: 'E',\n    },\n    ru: {\n      key: 'у',\n      shiftKey: 'У',\n    },\n  },\n  KeyR: {\n    en: {\n      key: 'r',\n      shiftKey: 'R',\n    },\n    ru: {\n      key: 'к',\n      shiftKey: 'К',\n    },\n  },\n  KeyT: {\n    en: {\n      key: 't',\n      shiftKey: 'T',\n    },\n    ru: {\n      key: 'е',\n      shiftKey: 'Е',\n    },\n  },\n  KeyY: {\n    en: {\n      key: 'y',\n      shiftKey: 'Y',\n    },\n    ru: {\n      key: 'н',\n      shiftKey: 'Н',\n    },\n  },\n  KeyU: {\n    en: {\n      key: 'u',\n      shiftKey: 'U',\n    },\n    ru: {\n      key: 'г',\n      shiftKey: 'Г',\n    },\n  },\n  KeyI: {\n    en: {\n      key: 'i',\n      shiftKey: 'I',\n    },\n    ru: {\n      key: 'ш',\n      shiftKey: 'Ш',\n    },\n  },\n  KeyO: {\n    en: {\n      key: 'o',\n      shiftKey: 'O',\n    },\n    ru: {\n      key: 'щ',\n      shiftKey: 'Щ',\n    },\n  },\n  KeyP: {\n    en: {\n      key: 'p',\n      shiftKey: 'P',\n    },\n    ru: {\n      key: 'з',\n      shiftKey: 'З',\n    },\n  },\n  BracketLeft: {\n    en: {\n      key: '[',\n      shiftKey: '{',\n    },\n    ru: {\n      key: 'х',\n      shiftKey: 'Х',\n    },\n  },\n  BracketRight: {\n    en: {\n      key: ']',\n      shiftKey: '}',\n    },\n    ru: {\n      key: 'ъ',\n      shiftKey: 'Ъ',\n    },\n  },\n  ShiftLeft: {\n    en: {\n      key: 'Shift',\n      shiftKey: 'Shift',\n    },\n    ru: {\n      key: 'Shift',\n      shiftKey: 'Shift',\n    },\n  },\n  ShiftRight: {\n    en: {\n      key: 'Shift',\n      shiftKey: 'Shift',\n    },\n    ru: {\n      key: 'Shift',\n      shiftKey: 'Shift',\n    },\n  },\n  Backquote: {\n    en: {\n      key: '`',\n      shiftKey: '~',\n    },\n    ru: {\n      key: ']',\n      shiftKey: '[',\n    },\n  },\n  KeyS: {\n    en: {\n      key: 's',\n      shiftKey: 'S',\n    },\n    ru: {\n      key: 'ы',\n      shiftKey: 'Ы',\n    },\n  },\n  KeyD: {\n    en: {\n      key: 'd',\n      shiftKey: 'D',\n    },\n    ru: {\n      key: 'в',\n      shiftKey: 'В',\n    },\n  },\n  KeyF: {\n    en: {\n      key: 'f',\n      shiftKey: 'F',\n    },\n    ru: {\n      key: 'а',\n      shiftKey: 'А',\n    },\n  },\n  KeyG: {\n    en: {\n      key: 'g',\n      shiftKey: 'G',\n    },\n    ru: {\n      key: 'п',\n      shiftKey: 'П',\n    },\n  },\n  KeyH: {\n    en: {\n      key: 'h',\n      shiftKey: 'H',\n    },\n    ru: {\n      key: 'р',\n      shiftKey: 'Р',\n    },\n  },\n  KeyJ: {\n    en: {\n      key: 'j',\n      shiftKey: 'J',\n    },\n    ru: {\n      key: 'о',\n      shiftKey: 'О',\n    },\n  },\n  KeyK: {\n    en: {\n      key: 'k',\n      shiftKey: 'K',\n    },\n    ru: {\n      key: 'л',\n      shiftKey: 'Л',\n    },\n  },\n  KeyL: {\n    en: {\n      key: 'l',\n      shiftKey: 'L',\n    },\n    ru: {\n      key: 'д',\n      shiftKey: 'Д',\n    },\n  },\n  Semicolon: {\n    en: {\n      key: ';',\n      shiftKey: ':',\n    },\n    ru: {\n      key: 'ж',\n      shiftKey: 'Ж',\n    },\n  },\n  Quote: {\n    en: {\n      key: '\\'',\n      shiftKey: '\"',\n    },\n    ru: {\n      key: 'э',\n      shiftKey: 'Э',\n    },\n  },\n  Backslash: {\n    en: {\n      key: '\\\\',\n      shiftKey: '|',\n    },\n    ru: {\n      key: 'ё',\n      shiftKey: 'Ё',\n    },\n  },\n  KeyZ: {\n    en: {\n      key: 'z',\n      shiftKey: 'Z',\n    },\n    ru: {\n      key: 'я',\n      shiftKey: 'Я',\n    },\n  },\n  KeyX: {\n    en: {\n      key: 'x',\n      shiftKey: 'X',\n    },\n    ru: {\n      key: 'ч',\n      shiftKey: 'Ч',\n    },\n  },\n  KeyC: {\n    en: {\n      key: 'c',\n      shiftKey: 'C',\n    },\n    ru: {\n      key: 'с',\n      shiftKey: 'С',\n    },\n  },\n  KeyV: {\n    en: {\n      key: 'v',\n      shiftKey: 'V',\n    },\n    ru: {\n      key: 'м',\n      shiftKey: 'М',\n    },\n  },\n  KeyB: {\n    en: {\n      key: 'b',\n      shiftKey: 'B',\n    },\n    ru: {\n      key: 'и',\n      shiftKey: 'И',\n    },\n  },\n  KeyN: {\n    en: {\n      key: 'n',\n      shiftKey: 'N',\n    },\n    ru: {\n      key: 'т',\n      shiftKey: 'Т',\n    },\n  },\n  KeyM: {\n    en: {\n      key: 'm',\n      shiftKey: 'M',\n    },\n    ru: {\n      key: 'ь',\n      shiftKey: 'Ь',\n    },\n  },\n  NumpadDecimal: {\n    en: {\n      key: ',',\n      shiftKey: '<',\n    },\n    ru: {\n      key: 'б',\n      shiftKey: 'Б',\n    },\n  },\n  Period: {\n    en: {\n      key: '.',\n      shiftKey: '>',\n    },\n    ru: {\n      key: 'ю',\n      shiftKey: 'Ю',\n    },\n  },\n  ControlLeft: {\n    en: {\n      key: 'Control',\n      shiftKey: 'Control',\n    },\n    ru: {\n      key: 'Control',\n      shiftKey: 'Control',\n    },\n  },\n  AltLeft: {\n    en: {\n      key: 'Alt',\n      shiftKey: 'Alt',\n    },\n    ru: {\n      key: 'Alt',\n      shiftKey: 'Alt',\n    },\n  },\n  MetaLeft: {\n    en: {\n      key: 'Command',\n      shiftKey: 'Command',\n    },\n    ru: {\n      key: 'Command',\n      shiftKey: 'Command',\n    },\n  },\n  Space: {\n    en: {\n      key: ' ',\n      shiftKey: ' ',\n    },\n    ru: {\n      key: ' ',\n      shiftKey: ' ',\n    },\n  },\n  MetaRight: {\n    en: {\n      key: 'Command',\n      shiftKey: 'Command',\n    },\n    ru: {\n      key: 'Command',\n      shiftKey: 'Command',\n    },\n  },\n  AltRight: {\n    en: {\n      key: 'Alt',\n      shiftKey: 'Alt',\n    },\n    ru: {\n      key: 'Alt',\n      shiftKey: 'Alt',\n    },\n  },\n  ArrowLeft: {\n    en: {\n      key: '←',\n      shiftKey: '←',\n    },\n    ru: {\n      key: '←',\n      shiftKey: '←',\n    },\n  },\n  ArrowDown: {\n    en: {\n      key: '↓',\n      shiftKey: '↓',\n    },\n    ru: {\n      key: '↓',\n      shiftKey: '↓',\n    },\n  },\n  ArrowRight: {\n    en: {\n      key: '→',\n      shiftKey: '→',\n    },\n    ru: {\n      key: '→',\n      shiftKey: '→',\n    },\n  },\n  ArrowUp: {\n    en: {\n      key: '↑',\n      shiftKey: '↑',\n    },\n    ru: {\n      key: '↑',\n      shiftKey: '↑',\n    },\n  },\n  Enter: {\n    en: {\n      key: 'Enter',\n      shiftKey: 'Enter',\n    },\n    ru: {\n      key: 'Enter',\n      shiftKey: 'Enter',\n    },\n  },\n  Slash: {\n    en: {\n      key: '/',\n      shiftKey: '?',\n    },\n    ru: {\n      key: '/',\n      shiftKey: '?',\n    },\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);\n\n\n//# sourceURL=webpack:///./js/keys.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;