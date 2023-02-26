import {Module} from '../core/module'
import { getRandomNumber,getRandomColor, createButton} from '../utils'

export class ClicksModule extends Module {
    constructor(type,text) {
        super(type,text)
        // this.greeting = document.querySelector('.greeting')
        // this.quoteDiv = document.querySelector('.quote')
        // this.timer = document.querySelector('.timer')
        // this.board = document.querySelector('.board')
        // this.button = document.querySelector('.start-button')
    }    

    trigger() {
        let time = 10
        let score = 0

        this.greeting.style.color = 'black'
        this.greeting.innerHTML = `Сейчас твоя задача сделать максимальное количество кликов по кружку внутри доски за 10 секунд &#128521`
        
        const timer = document.createElement('span')
        timer.className = 'timer'
        const board = document.createElement('div')
        board.className = 'board'
        board.style.display = 'block'
        
        setTime(time)
        
        document.body.append(createButton(),timer,board)

        const startBtn = document.querySelector('.start-button')
        startBtn.addEventListener('click', event => {
            event.preventDefault()
            startGame()
        })

        board.addEventListener('click', event => {
            if (event.target.classList.contains('circle')) {
                score++
                event.target.remove()
                createRandomCircle()
            }
        })

        function setTime(value) {
            timer.innerHTML = `00:${value}`
        }

        function startGame() {
            setInterval(decreaseTime, 1000)
            createRandomCircle()
            setTime(time)
        }


        function decreaseTime() {
            if (time === 0) {
                finishGame()
            } else {
                let currentTime = --time
                if (currentTime < 10) {
                currentTime = `0${currentTime}`
                }
                setTime(currentTime)
                }
        }

        function createRandomCircle() {
            const circle = document.createElement('div')
            const size = getRandomNumber(10,60)
            const {width, height} = board.getBoundingClientRect()
            const x = getRandomNumber(0, width - size)
            const y = getRandomNumber(0, height - size)
            circle.classList.add('circle')
            circle.style.width = `${size}px`
            circle.style.height = `${size}px`
            circle.style.top = `${y}px`
            circle.style.left = `${x}px`
            circle.style.backgroundColor = getRandomColor()
            board.append(circle)
        }

        function finishGame() {
            board.style.display = 'none'
            timer.innerHTML = `<h2>Счёт: <span>${score}</span></h2>`
        }
    }
}