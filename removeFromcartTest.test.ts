import {olivePageClass} from './oliveGardenpage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const olivePage = new olivePageClass()
test ('adding food items to cart', async()=>{
    
    await olivePage.navigate()
    await olivePage.driver.manage().window().maximize()
    //await olivePage.driver.sleep(1000)
    await olivePage.click(olivePage.orderBtn)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.toGoBtn)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.shrimpAlfredo)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.addCrt)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.cofirmCrt)
     await olivePage.driver.sleep(2000)
     await olivePage.click(olivePage.popupBtn)
     await olivePage.click(olivePage.cartIcon)
     await olivePage.driver.sleep(3000)
     await olivePage.click(olivePage.removeCart)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.confirmRemove)
     await olivePage.driver.sleep(2000)

     let text= await olivePage.getText(olivePage.emptyText)
     expect(text).toContain('Your cart is empty.')
     await olivePage.driver.sleep(2000)

     
     
})
afterAll(async () => {
   await olivePage.driver.quit()
})