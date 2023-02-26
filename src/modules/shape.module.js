import {Module} from '../core/module'
import { getRandomNumber } from '../utils'
import { shapesArray } from './shapesSvg'

export class ShapeModule extends Module {
    constructor(type,text) {
        super(type,text)
        this.shapeDiv = document.querySelector('.shape')
        this.greeting = document.querySelector('.greeting')
        this.quoteText = document.querySelector('.quoteText')
        this.quoteAuthor = document.querySelector('.quoteAuthor')
        this.timer = document.querySelector('.timer')
        this.shapes = shapesArray
    }    
    
    trigger() {
       this.greeting.innerText = ''
       this.quoteText.innerText = ''
       this.quoteAuthor.innerText = ''
       this.timer.innerText = ''
       this.shapeDiv.style.display = 'block'
       const randomElement = Math.floor(Math.random() * this.shapes.length)
       this.shapeDiv.innerHTML = this.shapes[randomElement]
       this.shapeDiv.style.top = `${getRandomNumber(50,500)}px`
       this.shapeDiv.style.left = `${getRandomNumber(50,1000)}px`
    }     
}