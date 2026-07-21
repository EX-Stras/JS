import TabNav from './Animacoes/InitTabNav.js';
import AccordionList from './Animacoes/accordion_list.js';
import animacaoScroll from './Animacoes/animacao_scroll.js';
import ScrollSuave from './Animacoes/scroll_suave.js';
import ModalP from './Animacoes/modal.js';
import initToolTip from './Animacoes/tooltip.js';
import dropDownMenu from './Animacoes/dropDownMenu.js';
import menuMobile from './Animacoes/menuMobile.js';
import initFuncionamento from './Animacoes/date.js';
import initForms from './Animacoes/form.js';
import animaNums from './Animacoes/animaNums.js';
import initBitcoin from './Animacoes/bitcoin.js';

console.clear();

const tabNav = new TabNav('[data-js=js-tabmenu] img', '[data-js=js-tabcontent] section.desativo');
tabNav.init();

const accordion = new AccordionList('div.faq h2', 'mudar', 'show-right');
accordion.init();

animacaoScroll();

const scroll = new ScrollSuave('header a[href^="#"');
scroll.addAnimation();

const modal = new ModalP('section[data-modal=conteiner]', 'header a[href^=https]', 'section button[data-modal=fecharX]');
modal.init();

initToolTip();
dropDownMenu();
menuMobile();
initFuncionamento();
initForms();
animaNums();
initBitcoin();
