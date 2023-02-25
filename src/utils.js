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

export function greeting() {
    const h1 = document.createElement('h1')
    h1.className = 'greeting'
    h1.innerHTML = `Привет! Небольшая игра для тебя. Вызывай контекстное меню правой кнопкой мыши и выбирай один из пунктов <span>&#129303</span>`
    h1.style.color = getRandomColor()

    return h1
}

export function createButton() {
    const button = document.createElement('button')
    button.className = 'start-button'
    button.innerText = 'Старт'

    return button
}

