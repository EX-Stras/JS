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

/***/ "./js/Animacoes/InitTabNav.js"
/*!************************************!*\
  !*** ./js/Animacoes/InitTabNav.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(selector1, selector2, desativacao, animation) {\n    this.selector1 = document.querySelectorAll(selector1);\n    this.selector2 = document.querySelectorAll(selector2);\n    this.animation = animation;\n    this.desativacao = desativacao;\n  }\n  show(index) {\n    this.selector2.forEach(content => {\n      content.classList.remove(this.animation || content.dataset.anime);\n      content.classList.add(this.desativacao || 'desativo');\n    });\n    this.selector2[index].classList.add(this.animation || this.selector2[index].dataset.anime);\n    this.selector2[index].classList.remove(this.desativacao || 'desativo');\n  }\n  init() {\n    this.selector1.forEach((element, index) => {\n      element.addEventListener('click', () => {\n        this.show(index);\n      });\n    });\n    this.show(0);\n  }\n}\n\n/*\n  const imagens = document.querySelectorAll('[data-js=js-tabmenu] img');\n  const textos = document.querySelectorAll('[data-js=js-tabcontent] section.desativo');\n  textos[0].classList.add(textos[0].dataset.anime);\n  textos[0].classList.remove('desativo');\n\n  function ativarTAB(index) {\n    textos.forEach((item) => {\n      item.classList.remove(item.dataset.anime);\n      item.classList.add('desativo');\n    });\n    textos[index].classList.add(textos[index].dataset.anime);\n    textos[index].classList.remove('desativo');\n  }\n\n  imagens.forEach((item, index) => {\n    item.addEventListener('click', () => {\n      ativarTAB(index);\n    });\n  });\n*/\n\n//# sourceURL=webpack://babel/./js/Animacoes/InitTabNav.js?\n}");

/***/ },

/***/ "./js/Animacoes/accordion_list.js"
/*!****************************************!*\
  !*** ./js/Animacoes/accordion_list.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccordionList)\n/* harmony export */ });\nclass AccordionList {\n  constructor(selector, animationFor1, animationFor2) {\n    this.elements = document.querySelectorAll(selector);\n    this.animationFor1 = animationFor1;\n    this.animationFor2 = animationFor2;\n  }\n  show(element) {\n    const proximo = element.nextElementSibling;\n    element.classList.toggle(this.animationFor1 || element.dataset.anime);\n    proximo.classList.toggle(this.animationFor2 || proximo.dataset.anime);\n  }\n  init() {\n    this.elements.forEach(element => {\n      element.addEventListener('click', () => {\n        this.show(element);\n      });\n    });\n    const proximo0 = this.elements[0].nextElementSibling;\n    this.elements[0].classList.add(this.animationFor1 || this.elements[0].dataset.anime);\n    proximo0.classList.add(this.animationFor2 || proximo0.dataset.anime);\n    return this.elements;\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/accordion_list.js?\n}");

/***/ },

/***/ "./js/Animacoes/animaNums.js"
/*!***********************************!*\
  !*** ./js/Animacoes/animaNums.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNums)\n/* harmony export */ });\nfunction animaNums() {\n  const H2s = document.querySelectorAll('div.numeros h2');\n  function adicionar(p, total, incremento, intervalo) {\n    const campoDeTexto = p;\n    campoDeTexto.innerText = \"\".concat(+campoDeTexto.innerText + incremento);\n    if (+campoDeTexto.innerText > total) {\n      campoDeTexto.innerText = \"\".concat(total);\n      clearInterval(intervalo);\n    }\n  }\n  function alterar(dados) {\n    H2s.forEach(item => {\n      const incremento = Math.floor(dados[item.innerText.toLowerCase()] / 100);\n      const total = dados[item.innerText.toLowerCase()];\n      const interval = setInterval(() => {\n        adicionar(item.nextElementSibling, total, incremento, interval);\n      }, 25);\n    });\n  }\n  async function buscar() {\n    try {\n      const response = await fetch('./js/json/dados.json');\n      const dados = await response.json();\n      alterar(dados);\n    } catch (error) {\n      console.log(Error(error));\n    }\n  }\n  function iniciar() {\n    const mapa = document.querySelector('div.numeros').getBoundingClientRect();\n    if (mapa.y <= 500) {\n      buscar();\n      window.removeEventListener('scroll', iniciar);\n    }\n  }\n  window.addEventListener('scroll', iniciar);\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/animaNums.js?\n}");

/***/ },

/***/ "./js/Animacoes/animacao_scroll.js"
/*!*****************************************!*\
  !*** ./js/Animacoes/animacao_scroll.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animacaoScroll)\n/* harmony export */ });\nfunction animacaoScroll() {\n  const titles = document.querySelectorAll('[data-title]');\n  function HandleScroll() {\n    titles.forEach(title => {\n      const mapa = title.getBoundingClientRect();\n      if (mapa.y < 350) {\n        title.classList.add('reveal');\n        title.nextElementSibling.classList.add('reveal');\n      }\n    });\n  }\n  HandleScroll();\n  window.addEventListener('scroll', HandleScroll);\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/animacao_scroll.js?\n}");

/***/ },

/***/ "./js/Animacoes/bitcoin.js"
/*!*********************************!*\
  !*** ./js/Animacoes/bitcoin.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBitcoin)\n/* harmony export */ });\nfunction initBitcoin() {\n  const span = document.querySelector('span[data-bitcoin]');\n  async function buscar() {\n    try {\n      const response = await fetch('https://blockchain.info/ticker');\n      const dados = await response.json();\n      const total = (1000 / dados.BRL.buy).toFixed(4);\n      span.innerText = total;\n    } catch (error) {\n      console.log(Error(error));\n      span.parentElement.remove();\n    }\n  }\n  buscar();\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/bitcoin.js?\n}");

/***/ },

/***/ "./js/Animacoes/date.js"
/*!******************************!*\
  !*** ./js/Animacoes/date.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const p = document.querySelector('p[data-horario]');\n  const agora = new Date();\n  const horas = p.dataset.horario.split(',');\n  const dias = p.dataset.semana.split(',');\n  if (+horas[0] <= agora.getHours() && +horas[1] > agora.getHours()) {\n    if (+dias[0] <= agora.getDay() && +dias[1] > agora.getDay()) {\n      p.classList.add('aberto');\n    }\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/date.js?\n}");

/***/ },

/***/ "./js/Animacoes/dropDownMenu.js"
/*!**************************************!*\
  !*** ./js/Animacoes/dropDownMenu.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside.js */ \"./js/Animacoes/outside.js\");\n\nfunction dropDownMenu() {\n  const aSobre = document.querySelector('a[href=\"sobre.html\"]');\n  const divDrop = document.querySelector('div[data-drop]');\n  function initDropMenu(event) {\n    if (event.target === aSobre) {\n      event.preventDefault();\n    }\n    this.classList.add('drop');\n    (0,_outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event, () => {\n      this.classList.remove('drop');\n      this.removeAttribute('data-outside');\n    }, this);\n  }\n  divDrop.addEventListener('click', initDropMenu);\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/dropDownMenu.js?\n}");

/***/ },

/***/ "./js/Animacoes/form.js"
/*!******************************!*\
  !*** ./js/Animacoes/form.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initForms)\n/* harmony export */ });\nfunction initForms() {\n  const form = document.forms;\n  const email = form.modal.elements.email;\n  const senha = form.modal.elements.senha;\n  function HandleEvent() {\n    if (!this.checkValidity()) {\n      this.classList.remove('certo');\n      this.classList.add('errado');\n      console.log(this.getAttribute('name'));\n      this.nextElementSibling.innerText = \"*\".concat(this.validationMessage);\n    } else {\n      this.classList.add('certo');\n      this.classList.remove('errado');\n      this.nextElementSibling.innerText = '';\n      console.log(this);\n    }\n  }\n  email.addEventListener('keyup', HandleEvent);\n  senha.addEventListener('keyup', HandleEvent);\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/form.js?\n}");

/***/ },

/***/ "./js/Animacoes/menuMobile.js"
/*!************************************!*\
  !*** ./js/Animacoes/menuMobile.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside.js */ \"./js/Animacoes/outside.js\");\n\nfunction menuMobile() {\n  const div = document.querySelector('div[data-dropMobile]');\n  function dropDown(event) {\n    this.classList.add('drop');\n    (0,_outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event, () => {\n      this.classList.remove('drop');\n      this.removeAttribute('data-outside');\n    }, this);\n  }\n  div.addEventListener('click', dropDown);\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/menuMobile.js?\n}");

/***/ },

/***/ "./js/Animacoes/modal.js"
/*!*******************************!*\
  !*** ./js/Animacoes/modal.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModalP)\n/* harmony export */ });\nclass ModalP {\n  constructor(selector1, selector2, selector3, class1) {\n    this.selector1 = document.querySelector(selector1); // modal\n    this.selector2 = document.querySelector(selector2); // botão de abrir\n    this.selector3 = document.querySelector(selector3); // botão de fechar\n    this.class1 = class1;\n  }\n  outsideModal(event) {\n    if (event.target === this.selector1) this.toggleModal(event);\n  }\n  toggleModal(event) {\n    event.preventDefault();\n    this.selector1.classList.toggle(this.class1 || this.selector1.dataset.modal);\n  }\n  init() {\n    this.selector1.addEventListener('click', event => this.outsideModal(event));\n    this.selector2.addEventListener('click', event => this.toggleModal(event));\n    this.selector3.addEventListener('click', event => this.toggleModal(event));\n  }\n}\n\n// const modal = document.querySelector('section[data-modal=conteiner]');\n// const button = document.querySelector('header a[href^=https]');\n// const modalX = document.querySelector('section button[data-modal=fecharX]');\n//\n// function toogleModal(event) {\n// event.preventDefault();\n// modal.classList.toggle(modal.dataset.modal);\n// }\n//\n// function foraModal(event) {\n// if (event.target === modal) {\n// toogleModal(event);\n// }\n// }\n//\n// button.addEventListener('click', toogleModal);\n// modalX.addEventListener('click', toogleModal);\n// modal.addEventListener('click', foraModal);\n\n//# sourceURL=webpack://babel/./js/Animacoes/modal.js?\n}");

/***/ },

/***/ "./js/Animacoes/outside.js"
/*!*********************************!*\
  !*** ./js/Animacoes/outside.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutSide)\n/* harmony export */ });\nfunction clickOutSide(x, callback, element) {\n  const html = document.documentElement;\n  function OutSide(event) {\n    if (!element.contains(event.target)) {\n      callback();\n      html.removeEventListener('click', OutSide);\n    }\n  }\n  if (!element.hasAttribute('data-outside')) {\n    html.addEventListener('click', OutSide);\n  }\n  element.setAttribute('data-outside', '');\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/outside.js?\n}");

/***/ },

/***/ "./js/Animacoes/scroll_suave.js"
/*!**************************************!*\
  !*** ./js/Animacoes/scroll_suave.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(seletor) {\n    this.elementos = document.querySelectorAll(seletor);\n    this.push = function scroll(event) {\n      event.preventDefault();\n      const href = event.currentTarget.getAttribute('href');\n      const section = document.querySelector(href);\n      const top = section.offsetTop;\n      window.scrollTo({\n        top,\n        behavior: 'smooth'\n      });\n    };\n  }\n  get elements() {\n    return this.elementos;\n  }\n  set elements(seletor) {\n    this.elementos = document.querySelectorAll(seletor);\n  }\n  addAnimation() {\n    this.elementos.forEach(item => {\n      item.addEventListener('click', this.push);\n    });\n  }\n  removeAnimation() {\n    this.elementos.forEach(item => {\n      item.removeEventListener('click', this.push);\n    });\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/scroll_suave.js?\n}");

/***/ },

/***/ "./js/Animacoes/tooltip.js"
/*!*********************************!*\
  !*** ./js/Animacoes/tooltip.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    tooltipBox.classList.add('tooltip');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n  const onMouseLeave = {\n    tooltipbox: '',\n    handleEvent() {\n      this.tooltipbox.remove();\n    }\n  };\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipbox.setAttribute('style', \"left:\".concat(event.pageX + 20, \"px; top:\").concat(event.pageY + 20, \"px\"));\n    }\n  };\n  function onMouseOver() {\n    const tooltipbox = criarTooltipBox(this);\n    onMouseMove.tooltipbox = tooltipbox;\n    onMouseLeave.tooltipbox = tooltipbox;\n    this.addEventListener('mouseleave', onMouseLeave);\n    this.addEventListener('mousemove', onMouseMove);\n  }\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n  tooltips.forEach(item => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/tooltip.js?\n}");

/***/ },

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animacoes_InitTabNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animacoes/InitTabNav.js */ \"./js/Animacoes/InitTabNav.js\");\n/* harmony import */ var _Animacoes_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animacoes/accordion_list.js */ \"./js/Animacoes/accordion_list.js\");\n/* harmony import */ var _Animacoes_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animacoes/animacao_scroll.js */ \"./js/Animacoes/animacao_scroll.js\");\n/* harmony import */ var _Animacoes_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animacoes/scroll_suave.js */ \"./js/Animacoes/scroll_suave.js\");\n/* harmony import */ var _Animacoes_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Animacoes/modal.js */ \"./js/Animacoes/modal.js\");\n/* harmony import */ var _Animacoes_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Animacoes/tooltip.js */ \"./js/Animacoes/tooltip.js\");\n/* harmony import */ var _Animacoes_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Animacoes/dropDownMenu.js */ \"./js/Animacoes/dropDownMenu.js\");\n/* harmony import */ var _Animacoes_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Animacoes/menuMobile.js */ \"./js/Animacoes/menuMobile.js\");\n/* harmony import */ var _Animacoes_date_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Animacoes/date.js */ \"./js/Animacoes/date.js\");\n/* harmony import */ var _Animacoes_form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Animacoes/form.js */ \"./js/Animacoes/form.js\");\n/* harmony import */ var _Animacoes_animaNums_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Animacoes/animaNums.js */ \"./js/Animacoes/animaNums.js\");\n/* harmony import */ var _Animacoes_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Animacoes/bitcoin.js */ \"./js/Animacoes/bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.clear();\nconst tabNav = new _Animacoes_InitTabNav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-js=js-tabmenu] img', '[data-js=js-tabcontent] section.desativo');\ntabNav.init();\nconst accordion = new _Animacoes_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div.faq h2', 'mudar', 'show-right');\naccordion.init();\n(0,_Animacoes_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst scroll = new _Animacoes_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('header a[href^=\"#\"');\nscroll.addAnimation();\nconst modal = new _Animacoes_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('section[data-modal=conteiner]', 'header a[href^=https]', 'section button[data-modal=fecharX]');\nmodal.init();\n(0,_Animacoes_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_Animacoes_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_Animacoes_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_Animacoes_date_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_Animacoes_form_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_Animacoes_animaNums_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_Animacoes_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n//# sourceURL=webpack://babel/./js/script.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
/******/ 	let __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;