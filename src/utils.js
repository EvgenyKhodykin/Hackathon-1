export function getRandomNumber(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
    const colorCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += colorCode[Math.floor(Math.random() * colorCode.length)]
    }
    return '#' + color
}

export function createMenuList(array, container) {
    array.forEach(item => {
        const li = document.createElement('li')
        li.innerHTML = item.toHTML()
        container.append(li)
    })    
    
    return container
}

export function createGreeting() {
    const h1 = document.createElement('h1')
    h1.className = 'greeting'
    h1.innerHTML = `Привет! Небольшая игра для тебя. Вызывай контекстное меню правой кнопкой мыши и выбирай один из пунктов <span>&#129303</span>`
    h1.style.color = getRandomColor()

    return h1
}

export function createQuote() {
    const quoteDiv = document.createElement('div')
    quoteDiv.className = 'quote'
    const quoteText = document.createElement('span')
    quoteText.className = 'quoteText'
    const quoteAuthor = document.createElement('span')
    quoteAuthor.className = 'quoteAuthor'
    quoteDiv.append(quoteText,quoteAuthor)

    return quoteDiv
}

export function createBtn() {
    const button = document.createElement('button')
    button.className = 'start-button'
    button.innerText = 'Старт'

    return button
}

export function createTimer() {
    const timer = document.createElement('div')
    timer.className = 'timer'

    return timer
}

export function createBoard() {
    const board = document.createElement('div')
    board.className = 'board'

    return board
}

export function createShape() {
    const shapeDiv = document.createElement('div')
    shapeDiv.className = 'shape'

    return shapeDiv
}

