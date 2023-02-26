import {Module} from '../core/module'
import { getRandomNumber,getRandomColor } from '../utils'

export class QuoteModule extends Module {
    constructor(type,text) {
        super(type,text)
        this.URL_QUOTES = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        this.quoteDiv = document.createElement('div')
        this.quoteDiv.className = 'quote'
        this.quoteSpan = document.createElement('span')
        this.authorSpan = document.createElement('span')
        this.quoteDiv.append(this.quoteSpan,this.authorSpan)
        this.greeting = document.querySelector('.greeting')
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
        this.greeting.style.display = 'none'
        document.body.append(this.quoteDiv)
        const randomElement = Math.floor(Math.random() * this.quotes.length)
        this.quoteSpan.innerText = `"${this.quotes[randomElement].text}"`
        this.authorSpan.innerText = this.quotes[randomElement].author
        this.quoteDiv.style.color = getRandomColor()
        this.quoteDiv.style.top = `${getRandomNumber(50,1000)}px`
        this.quoteDiv.style.left = `${getRandomNumber(50,1000)}px`
    } 
}
