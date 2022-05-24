//resetcontrols usa dafault import aqui pode usar o nome que quiser usar
import Controls from './controls.js'
import Sound from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

let minutes = Number(minutesDisplay.textContent)
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  minutes
})

const sound = Sound()

Events({ controls, timer, sound })
