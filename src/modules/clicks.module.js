import {Module} from '../core/module'
import { getRandomColor } from '../utils'
import { createButton } from '../utils'

export class ClicksModule extends Module {
    trigger() {
        let time = 10
        let score = 0

        document.body.style.backgroundColor = '#fff'   
        
        const greeting = document.querySelector('.greeting')
        greeting.style.display = 'block'
        greeting.style.color = 'black'
        greeting.innerHTML = `Сейчас твоя задача сделать максимальное количество кликов по кружку внутри доски за 10 секунд &#128521`
        
        const timer = document.createElement('span')
        timer.className = 'timer'
        setTime(time)
        
        document.body.append(createButton(),timer)

        const startBtn = document.querySelector('.start-button')
        startBtn.addEventListener('click', event => {
            event.preventDefault()
            startGame()
            document.body.addEventListener('click', event => {
               if(event) score++
               console.log(score)
            })
        })

        function setTime(value) {
            timer.innerHTML = `00:${value}`
        }

        function startGame() {
            setInterval(decreaseTime, 1000)
            setTime(time)
        }

        function decreaseTime() {
            if (time === 0) {
                finishGame()
            } else {
                let currentTime = --time
                setTime(currentTime)
                }
        }

        function finishGame() {
            console.log(score)
            // timeEl.parentNode.remove()
            // board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
        }
    }
}