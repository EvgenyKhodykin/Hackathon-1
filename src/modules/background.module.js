import {Module} from '../core/module'
import {getRandomColor} from '../utils'

export class BackgroundModule extends Module {
    trigger() {
        document.body.style.backgroundColor = getRandomColor()
        const greeting = document.querySelector('.greeting')
        greeting.style.display = 'none'
    }
}