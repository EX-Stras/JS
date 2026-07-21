import initTabNav from './Animacoes/InitTabNav.js';
import AccordionList from './Animacoes/accordion_list.js';
import animacaoScroll from './Animacoes/animacao_scroll.js';
import ScrollSuave from './Animacoes/scroll_suave.js';
import modalP from './Animacoes/modal.js';
import initToolTip from './Animacoes/tooltip.js';
import dropDownMenu from './Animacoes/dropDownMenu.js';
import menuMobile from './Animacoes/menuMobile.js';
import initFuncionamento from './Animacoes/date.js';
import initForms from './Animacoes/form.js';
import animaNums from './Animacoes/animaNums.js';
import initBitcoin from './Animacoes/bitcoin.js';

console.clear();

initTabNav();

const accordion = new AccordionList('div.faq h2', 'mudar', 'show-right');
accordion.init();

animacaoScroll();

const scroll = new ScrollSuave('header a[href^="#"');
scroll.addAnimation();

modalP();
initToolTip();
dropDownMenu();
menuMobile();
initFuncionamento();
initForms();
animaNums();
initBitcoin();
