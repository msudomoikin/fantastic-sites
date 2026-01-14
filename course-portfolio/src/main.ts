import './scss/style.scss'

import { createTree } from "./modules/fir"
import { createGrid } from './modules/break-dom'
import { trackMouse } from './modules/mouse-move'
import { setupXray } from './modules/xray'
import { setupParallax } from './modules/parallax'
import { setupLines } from './modules/magnetic-lines'

createTree()
createGrid()
trackMouse()
setupXray()
setupParallax()
setupLines()