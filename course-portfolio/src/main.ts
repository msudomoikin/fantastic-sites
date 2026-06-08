import './scss/style.scss'

import { createTree } from "./modules/fir"
import { createGrid } from './modules/break-dom'
import { trackMouse } from './modules/mouse-move'
import { setupXray } from './modules/xray'
import { setupParallax } from './modules/parallax'
import { setupLines } from './modules/magnetic-lines'
import { setupScrollSpy } from './modules/scroll-spy'
import { fitFont } from './modules/helpers'

createTree()
createGrid()
trackMouse()
setupXray()
setupParallax()
setupLines()
setupScrollSpy()


window.addEventListener('load', (event) => {
  console.log('All resources finished loading!');
  fitFont('.header__container', '.header__text');
});

window.addEventListener('resize', () => fitFont('.header__container', '.header__text'))