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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(r, a) {\n  (null == a || a > r.length) && (a = r.length);\n  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\n  return n;\n}\n\n\n//# sourceURL=webpack://babel/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithHoles)\n/* harmony export */ });\nfunction _arrayWithHoles(r) {\n  if (Array.isArray(r)) return r;\n}\n\n\n//# sourceURL=webpack://babel/./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArrayLimit)\n/* harmony export */ });\nfunction _iterableToArrayLimit(r, l) {\n  var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"];\n  if (null != t) {\n    var e,\n      n,\n      i,\n      u,\n      a = [],\n      f = !0,\n      o = !1;\n    try {\n      if (i = (t = t.call(r)).next, 0 === l) {\n        if (Object(t) !== t) return;\n        f = !1;\n      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n    } catch (r) {\n      o = !0, n = r;\n    } finally {\n      try {\n        if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n      } finally {\n        if (o) throw n;\n      }\n    }\n    return a;\n  }\n}\n\n\n//# sourceURL=webpack://babel/./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableRest)\n/* harmony export */ });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n\n//# sourceURL=webpack://babel/./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _slicedToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(r, e) {\n  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://babel/./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(r, a) {\n  if (r) {\n    if (\"string\" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r, a);\n    var t = {}.toString.call(r).slice(8, -1);\n    return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r, a) : void 0;\n  }\n}\n\n\n//# sourceURL=webpack://babel/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?\n}");

/***/ },

/***/ "./js/Animacoes/InitTabNav.js"
/*!************************************!*\
  !*** ./js/Animacoes/InitTabNav.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(selector1, selector2, class1, class2) {\n    this.selector1 = document.querySelectorAll(selector1); // recebe o click\n    this.selector2 = document.querySelectorAll(selector2); // reage ao click\n    this.class1 = class1; // classe de desativação\n    this.class2 = class2; // classe de animação\n    this.$ = ''; // variável auxiliar\n  }\n  show(index) {\n    this.selector2.forEach(content => {\n      this.$ = content.classList;\n      this.$.remove(this.class2 || content.dataset.anime);\n      this.$.add(this.class1 || 'desativo');\n    });\n    this.$ = this.selector2[index];\n    this.$.classList.add(this.class2 || this.$.dataset.anime);\n    this.$.classList.remove(this.class1 || 'desativo');\n  }\n  init() {\n    if (this.selector1.length && this.selector2.length) {\n      this.selector1.forEach((element, index) => {\n        element.addEventListener('click', () => this.show(index));\n      });\n      this.show(0);\n    }\n    return this;\n  }\n}\n\n/*\n  const imagens = document.querySelectorAll('[data-js=js-tabmenu] img');\n  const textos = document.querySelectorAll('[data-js=js-tabcontent] section.desativo');\n  textos[0].classList.add(textos[0].dataset.anime);\n  textos[0].classList.remove('desativo');\n\n  function ativarTAB(index) {\n    textos.forEach((item) => {\n      item.classList.remove(item.dataset.anime);\n      item.classList.add('desativo');\n    });\n    textos[index].classList.add(textos[index].dataset.anime);\n    textos[index].classList.remove('desativo');\n  }\n\n  imagens.forEach((item, index) => {\n    item.addEventListener('click', () => {\n      ativarTAB(index);\n    });\n  });\n*/\n\n//# sourceURL=webpack://babel/./js/Animacoes/InitTabNav.js?\n}");

/***/ },

/***/ "./js/Animacoes/accordion_list.js"
/*!****************************************!*\
  !*** ./js/Animacoes/accordion_list.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccordionList)\n/* harmony export */ });\nclass AccordionList {\n  constructor(selector1, class1, class2) {\n    this.selector1 = document.querySelectorAll(selector1);\n    this.class1 = class1; // animação do receptor\n    this.class2 = class2; // animação do reagente\n    this.$ = ''; // variável auxiliar\n  }\n  show(element) {\n    this.$ = element.nextElementSibling;\n    element.classList.toggle(this.class1 || element.dataset.anime);\n    this.$.classList.toggle(this.class2 || this.$.dataset.anime);\n  }\n  init() {\n    if (this.selector1.length) {\n      this.selector1.forEach(element => {\n        element.addEventListener('click', () => this.show(element));\n      });\n      this.$ = this.selector1[0].nextElementSibling;\n      this.selector1[0].classList.add(this.class1 || this.selector1[0].dataset.anime);\n      this.$.classList.add(this.class2 || this.$.dataset.anime);\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/accordion_list.js?\n}");

/***/ },

/***/ "./js/Animacoes/animaNums.js"
/*!***********************************!*\
  !*** ./js/Animacoes/animaNums.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNums)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\nclass AnimaNums {\n  constructor(selector1, selector2, json1) {\n    this.selector1 = document.querySelectorAll(selector1);\n    this.selector2 = document.querySelector(selector2); // pai do elemento\n    this.json1 = json1; // link para os dados\n\n    this.handleScroll = this.handleScroll.bind(this);\n  }\n  static push(element, increase, total, interval) {\n    element.innerText = \"\".concat(+element.innerText + increase);\n    if (+element.innerText > total) {\n      element.innerText = \"\".concat(total);\n      clearInterval(interval);\n    }\n  }\n  handleScroll() {\n    const _this$selector2$getBo = this.selector2.getBoundingClientRect(),\n      y = _this$selector2$getBo.y;\n    if (y < 500) {\n      this.selector1.forEach(item => {\n        const increase = Math.floor(this.json1[item.dataset.anime] / 100);\n        const total = this.json1[item.dataset.anime];\n        const interval = setInterval(() => {\n          this.constructor.push(item, increase, total, interval);\n        }, 25);\n      });\n      window.removeEventListener('scroll', this.handleScroll);\n    }\n  }\n  async init() {\n    if (this.selector1 && this.selector2) {\n      try {\n        const response = await fetch(this.json1);\n        const json = await response.json();\n        var _json = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json, 1);\n        this.json1 = _json[0];\n        window.addEventListener('scroll', this.handleScroll);\n      } catch (error) {\n        console.log(Error(error));\n      }\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/animaNums.js?\n}");

/***/ },

/***/ "./js/Animacoes/animacao_scroll.js"
/*!*****************************************!*\
  !*** ./js/Animacoes/animacao_scroll.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoScroll)\n/* harmony export */ });\nclass AnimacaoScroll {\n  constructor(selector1, class1) {\n    this.selector1 = Array.from(document.querySelectorAll(selector1));\n    this.class1 = class1;\n    this.$ = []; // variável auxiliar\n\n    this.handleScroll = this.handleScroll.bind(this);\n  }\n  add(item) {\n    item.classList.add(this.class1 || item.dataset.anime);\n  }\n  getDistance() {\n    this.$ = this.selector1.map(item => {\n      const y = item.offsetTop;\n      return {\n        item,\n        y: Math.floor(y - window.innerHeight * 0.6)\n      };\n    });\n    console.log(this.$);\n  }\n  handleScroll() {\n    this.$.forEach(data => {\n      console.log(window.pageYOffset);\n      const distance = window.pageYOffset;\n      if (data.y < distance) {\n        this.add(data.item);\n      }\n    });\n  }\n  init() {\n    this.getDistance();\n    window.addEventListener('scroll', this.handleScroll);\n    this.add(this.selector1[0]);\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/animacao_scroll.js?\n}");

/***/ },

/***/ "./js/Animacoes/bitcoin.js"
/*!*********************************!*\
  !*** ./js/Animacoes/bitcoin.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bitcoin)\n/* harmony export */ });\nclass Bitcoin {\n  constructor(selector1, value1, coin1) {\n    this.selector1 = document.querySelector(selector1); // elemento que vai exibir\n    this.value1 = +value1; // valor em bitcoin\n    this.coin1 = coin1 || 'BRL';\n  }\n  async init() {\n    if (this.selector1) {\n      try {\n        const response = await fetch('https://blockchain.info/ticker');\n        const json = await response.json();\n        const total = (this.value1 / json[this.coin1].buy).toFixed(4);\n        this.selector1.innerText = total;\n      } catch (error) {\n        console.log(Error(error));\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/bitcoin.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModalP)\n/* harmony export */ });\nclass ModalP {\n  constructor(selector1, selector2, selector3, class1) {\n    this.selector1 = document.querySelector(selector1); // modal\n    this.selector2 = document.querySelector(selector2); // botão de abrir\n    this.selector3 = document.querySelector(selector3); // botão de fechar\n    this.class1 = class1;\n  }\n  outsideModal(event) {\n    if (event.target === this.selector1) this.toggleModal(event);\n  }\n  toggleModal(event) {\n    event.preventDefault();\n    this.selector1.classList.toggle(this.class1 || this.selector1.dataset.anime);\n  }\n  init() {\n    if (this.selector1 && this.selector2 && this.selector3) {\n      this.selector1.addEventListener('click', event => this.outsideModal(event));\n      this.selector2.addEventListener('click', event => this.toggleModal(event));\n      this.selector3.addEventListener('click', event => this.toggleModal(event));\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/modal.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(selector1) {\n    this.selector1 = document.querySelectorAll(selector1);\n  }\n  push(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    const top = section.offsetTop;\n    window.scrollTo({\n      top,\n      behavior: 'smooth'\n    });\n    return this;\n  }\n  init() {\n    if (this.selector1.length) {\n      this.selector1.forEach(item => item.addEventListener('click', this.push));\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/scroll_suave.js?\n}");

/***/ },

/***/ "./js/Animacoes/tooltip.js"
/*!*********************************!*\
  !*** ./js/Animacoes/tooltip.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\n  constructor(selector1, class1, conteudo1) {\n    this.selector1 = document.querySelectorAll(selector1); // zona de surgimento\n    this.class1 = class1; // estilo\n    this.conteudo = conteudo1;\n    this.$ = ''; // variavel auxiliar\n\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n  onMouseLeave(_ref) {\n    let $2 = _ref.currentTarget;\n    this.$.remove();\n    $2.removeEventListener('mouseleave', this.onMouseLeave);\n    $2.removeEventListener('mousemove', this.onMouseMove);\n    return this;\n  }\n  onMouseMove(event) {\n    this.$.setAttribute('style', \"top: \".concat(event.pageY + 20, \"px; left: \").concat(event.pageX + 20, \"px;\"));\n    return this;\n  }\n  criarTooltipBox(item) {\n    this.$ = document.createElement('div');\n    this.$.classList.add(this.class1 || item.dataset.anime);\n    this.$.innerText = this.conteudo || item.getAttribute('aria-label');\n    document.body.appendChild(this.$);\n    return this;\n  }\n  onMouseOver(_ref2) {\n    let $2 = _ref2.currentTarget;\n    this.criarTooltipBox($2);\n    $2.addEventListener('mouseleave', this.onMouseLeave);\n    $2.addEventListener('mousemove', this.onMouseMove);\n  }\n  init() {\n    if (this.selector1.length) {\n      this.selector1.forEach(event => {\n        event.addEventListener('mouseover', this.onMouseOver);\n      });\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://babel/./js/Animacoes/tooltip.js?\n}");

/***/ },

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animacoes_InitTabNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animacoes/InitTabNav.js */ \"./js/Animacoes/InitTabNav.js\");\n/* harmony import */ var _Animacoes_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animacoes/accordion_list.js */ \"./js/Animacoes/accordion_list.js\");\n/* harmony import */ var _Animacoes_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animacoes/animacao_scroll.js */ \"./js/Animacoes/animacao_scroll.js\");\n/* harmony import */ var _Animacoes_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animacoes/scroll_suave.js */ \"./js/Animacoes/scroll_suave.js\");\n/* harmony import */ var _Animacoes_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Animacoes/modal.js */ \"./js/Animacoes/modal.js\");\n/* harmony import */ var _Animacoes_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Animacoes/tooltip.js */ \"./js/Animacoes/tooltip.js\");\n/* harmony import */ var _Animacoes_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Animacoes/dropDownMenu.js */ \"./js/Animacoes/dropDownMenu.js\");\n/* harmony import */ var _Animacoes_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Animacoes/menuMobile.js */ \"./js/Animacoes/menuMobile.js\");\n/* harmony import */ var _Animacoes_date_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Animacoes/date.js */ \"./js/Animacoes/date.js\");\n/* harmony import */ var _Animacoes_form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Animacoes/form.js */ \"./js/Animacoes/form.js\");\n/* harmony import */ var _Animacoes_animaNums_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Animacoes/animaNums.js */ \"./js/Animacoes/animaNums.js\");\n/* harmony import */ var _Animacoes_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Animacoes/bitcoin.js */ \"./js/Animacoes/bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.clear();\nconst tabNav = new _Animacoes_InitTabNav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-js=js-tabmenu] img', '[data-js=js-tabcontent] section.desativo');\ntabNav.init();\nconst accordion = new _Animacoes_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div.faq h2', 'mudar', 'show-right');\naccordion.init();\nconst animacaoScroll = new _Animacoes_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('div[data-anime=\"reveal\"]');\nanimacaoScroll.init();\nconst scroll = new _Animacoes_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('header a[href^=\"#\"');\nscroll.init();\nconst modal = new _Animacoes_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('section[data-anime=conteiner]', 'header a[href^=https]', 'section button[data-modal=fecharX]');\nmodal.init();\nconst tooltip = new _Animacoes_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]', 'tooltip');\ntooltip.init();\n(0,_Animacoes_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_Animacoes_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_Animacoes_date_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_Animacoes_form_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\nconst animaNums = new _Animacoes_animaNums_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('div.numeros p', 'div.numeros', 'https://ex-stras.github.io/JS/Cap11/RefatorarAnimaNums/js/json/dados.json');\nanimaNums.init();\nconst bitcoin = new _Animacoes_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]('span[data-bitcoin]', '1000');\nbitcoin.init();\n\n//# sourceURL=webpack://babel/./js/script.js?\n}");

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