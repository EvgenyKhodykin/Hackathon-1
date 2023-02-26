import {Module} from '../core/module'
import { getRandomNumber,getRandomColor} from '../utils'

export class ClicksModule extends Module {
    constructor(type,text) {
        super(type,text)
        this.greeting = document.querySelector('.greeting')
        this.quoteText = document.querySelector('.quoteText')
        this.quoteAuthor = document.querySelector('.quoteAuthor')
        this.catDiv = document.querySelector('.square')
        this.startBtn = document.querySelector('.start-button')
        this.timer = document.querySelector('.timer')
        this.board = document.querySelector('.board')
        this.shapeDiv = document.querySelector('.shape')
    }    

    trigger() {
        this.quoteText.innerText = ''
        this.shapeDiv.style.display = 'none'
        this.catDiv.style.display = 'none'
        this.quoteAuthor.innerText = ''
        this.startBtn.style.display = 'block'
        this.board.style.display = 'block'
        this.timer.innerHTML = ''
        this.greeting.style.color = 'black'
        this.greeting.innerHTML = `Сейчас твоя задача сделать максимальное количество кликов по кружку внутри доски за 10 секунд &#128521`
        
        let time = 10
        let score = 0

        const finishGame = () => {
            this.board.style.display = 'none'
            this.startBtn.style.display = 'none'
            this.greeting.innerText = ''
            this.timer.innerHTML = `<h3>Счёт: <span>${score}</span></h3>`
        }

        const createRandomCircle = () => {
            const circle = document.createElement('div')
            const size = getRandomNumber(10,60)
            const {width, height} = this.board.getBoundingClientRect()
            const x = getRandomNumber(0, width - size)
            const y = getRandomNumber(0, height - size)
            circle.classList.add('circle')
            circle.style.width = `${size}px`
            circle.style.height = `${size}px`
            circle.style.top = `${y}px`
            circle.style.left = `${x}px`
            circle.style.backgroundColor = getRandomColor()
            this.board.append(circle)
        }

        const setTime = (value) => {
            this.timer.innerHTML = `00:${value}`
        }

         const startGame = () => {
            window.intervalTimer = setInterval(decreaseTime, 1000)
            createRandomCircle()
            setTime(time)
        }

        const decreaseTime = () => {
            if (time === 0) {
                clearInterval(intervalTimer)
                finishGame()
            } else {
                let currentTime = --time
                if (currentTime < 10) {
                currentTime = `0${currentTime}`
                }
                setTime(currentTime)
                }
        }
        
         
       

        this.startBtn.addEventListener('click', event => {
            event.preventDefault()
            startGame()
        })

        this.board.addEventListener('click', event => {
            if (event.target.classList.contains('circle')) {
                score++
                event.target.remove()
                createRandomCircle()
            }
        })
    }
}