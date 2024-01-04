import {olivePageClass} from './oliveGardenpage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const olivePage = new olivePageClass()
test ('adding food items to cart', async()=>{
    
    await olivePage.navigate()
    await olivePage.driver.manage().window().maximize()
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.orderBtn)
     await olivePage.driver.sleep(2000)
     await olivePage.click(olivePage.toGoBtn)
     await olivePage.driver.sleep(2000)
     
     await olivePage.click(olivePage.dessertBtn)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.lasagna)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.addCrt)
     //await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.cofirmCrt)
     //await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.popupBtn)
     //await olivePage.driver.sleep(1000)

     //await olivePage.click(olivePage.cartIcon)
     //await olivePage.driver.sleep(1000)
     //await olivePage.click(olivePage.closeCrtIcon)
     await olivePage.driver.sleep(3000)


     await olivePage.click(olivePage.drinkBtn)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.capucino)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.addCrt)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.cartIcon)
     await olivePage.driver.sleep(3000)

    let Cart1= await olivePage.getText(olivePage.itemcrt1)
     expect(Cart1).toContain('NEW Chocolate Lasagna')
    let Cart2= await olivePage.getText(olivePage.itemcrt2)
     expect(Cart2).toContain('OG House Cappuccino')
    
    
    /*await olivePage.click(olivePage.dessertBtn)
     await olivePage.driver.sleep(5000)
     await olivePage.click(olivePage.tiramisu)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.addCrt)
     await olivePage.click(olivePage.cartIcon)
     await olivePage.driver.sleep(5000)*/

    

 


   /* await automationPage.click(automationPage.cartDel1)
    expect(automationPage.cartTable).not.toContain('Blue Top')
    await automationPage.driver.sleep(1000)

    await automationPage.click(automationPage.cartDel2)
    expect(automationPage.cartTable).not.toContain('Men Tshirt')
    //await automationPage.driver.sleep(1000)

    await automationPage.click(automationPage.cartDel3)
    expect(automationPage.cartTable).not.toContain('Sleeveless Dress')
    await automationPage.driver.sleep(1000)


    await automationPage.click(automationPage.cartDel1)
    expect(automationPage.emptyContainer).not.toContain('Stylish Dress')
    await automationPage.driver.sleep(2000)*/


})
afterAll(async () => {
   await olivePage.driver.quit()
})