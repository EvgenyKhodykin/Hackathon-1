import {Menu} from './core/menu'
import { createMenuList } from './utils'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        this.modules = []
    }

    open() {
        const openContextMenu = (event) => {
            event.preventDefault()
            this.el.innerHTML = ''
            createMenuList(this.modules,this.el)
            this.el.classList.add('open')
            this.el.style.top = event.pageY + 'px'
            this.el.style.left = event.pageX + 'px'
        }
        

        const handlerClick = (event) => {
            const clickedItem = event.target.closest('.menu-item')
            console.log(clickedItem)
            const itemDataValue = clickedItem.dataset.type
            const currentItem = this.modules.filter(module => module.type === itemDataValue)[0]
            currentItem.trigger()
        }    

        document.body.addEventListener('contextmenu', openContextMenu)
        this.el.addEventListener('click',handlerClick)
    }

    close() {
        document.body.addEventListener('click',() => {
            this.el.classList.remove('open') 
        })
    }

    add(...modules) {
        this.modules.push(...modules)
    }
}