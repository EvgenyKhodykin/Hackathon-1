import './styles.css'
import { ContextMenu } from './menu'
import { ClicksModule } from './modules/clicks.module'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'

const click = new ClicksModule('clicks','Посчитать клики за 3 секунды')
const background = new BackgroundModule('background','Изменить цвет фона')
const shape = new ShapeModule('shape','Создать фигуру')

const menuList = new ContextMenu('.menu')
menuList.add(click,background,shape)
menuList.open()
menuList.close()



