import './styles.css'
import { ContextMenu } from './menu'
import { ClicksModule } from './modules/clicks.module'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { QuoteModule } from './modules/qoute.module'
import { createGreeting,createQuote,createBtn,createTimer,createBoard,createShape } from './utils'


document.body.append(createGreeting(),createQuote(),createBtn(),createTimer(),createBoard(),createShape())
const click = new ClicksModule('clicks','Посчитать клики')
const background = new BackgroundModule('background','Изменить цвет фона')
const shape = new ShapeModule('shape','Создать фигуру')
const qoute = new QuoteModule('quote','Показать цитату')


const menuList = new ContextMenu('.menu')
menuList.add(click,background,shape,qoute)
menuList.open()
menuList.close()



