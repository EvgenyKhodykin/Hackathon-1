export function random(min, max) {
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