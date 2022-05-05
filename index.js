import activeItemMenu from './active-item-menu.js'
import {activeMobileMenu} from './active-mobile-menu.js'
import {closeMobileMenu} from './active-mobile-menu.js'
document.addEventListener('DOMContentLoaded',(e)=>{
    activeItemMenu('.have-sub')
    activeMobileMenu('.hamburger-icon img')
    closeMobileMenu('.close-icon img')
})