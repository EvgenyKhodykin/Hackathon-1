import {Module} from '../core/module'
import { getRandomNumber,getRandomColor } from '../utils'

export class QuoteModule extends Module {
    constructor(type,text) {
        super(type,text)
        this.quoteDiv = document.querySelector('.quote')
        this.quoteText = document.querySelector('.quoteText')
        this.quoteAuthor = document.querySelector('.quoteAuthor')
        this.catDiv = document.querySelector('.square')
        this.greeting = document.querySelector('.greeting')
        this.shapeDiv = document.querySelector('.shape')
        this.startBtn = document.querySelector('.start-button')
        this.timer = document.querySelector('.timer')
        this.board = document.querySelector('.board')
        this.quotes = [
            {
                text: "Life isn’t about getting and having, it’s about giving and being.",
                author: "Kevin Kruse"
            },
            {
                text: "Whatever the mind of man can conceive and believe, it can achieve.",
                author: "Napoleon Hill"
            },
            {
                text: "Strive not to be a success, but rather to be of value.",
                author: "Albert Einstein"
            },
            {
                text: "You miss 100% of the shots you don’t take.",
                author: "Wayne Gretzky"
            },
            {
                text: "The mind is everything. What you think you become.",
                author: "Buddha"
            }
        ]
    }
    
    trigger() {
        this.greeting.innerText = ''
        this.quoteText.innerText = ''
        this.quoteAuthor.innerText = ''
        this.startBtn.style.display = 'none'
        this.catDiv.style.display = 'none'
        this.shapeDiv.style.display = 'none'
        this.timer.style.display = 'none'
        this.board.style.display = 'none'
        const randomElement = Math.floor(Math.random() * this.quotes.length)
        this.quoteText.innerText = `"${this.quotes[randomElement].text}"`
        this.quoteAuthor.innerText = this.quotes[randomElement].author
        this.quoteDiv.style.color = getRandomColor()
        this.quoteDiv.style.top = `${getRandomNumber(50,500)}px`
        this.quoteDiv.style.left = `${getRandomNumber(50,1000)}px`
    } 
}
 