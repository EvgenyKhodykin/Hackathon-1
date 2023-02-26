import {Module} from '../core/module'
import { getRandomNumber } from '../utils'


export class CatModule extends Module {
    constructor(type,text) {
        super(type,text)
        this.catDiv = document.querySelector('.square')
        this.shapeDiv = document.querySelector('.shape')
        this.greeting = document.querySelector('.greeting')
        this.quoteText = document.querySelector('.quoteText')
        this.quoteAuthor = document.querySelector('.quoteAuthor')
        this.timer = document.querySelector('.timer')
    }

    trigger() {      
        this.catDiv.style.display = 'block'
        this.greeting.innerText = ''
        this.quoteText.innerText = ''
        this.quoteAuthor.innerText = ''
        this.timer.innerText = ''
        this.shapeDiv.style.display = 'none'
        this.catDiv.style.top = `${getRandomNumber(50,500)}px`
        this.catDiv.style.left = `${getRandomNumber(50,1000)}px`
    }     
}