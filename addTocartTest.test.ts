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
     await olivePage.click(olivePage.soupBtn)
     await olivePage.driver.sleep(1000)
     await olivePage.click(olivePage.saladBtn)
     await olivePage.driver.sleep(2000)

    /*await automationPage.click(automationPage.contShop)
    await automationPage.driver.sleep(2000)
    await automationPage.click(automationPage.secondPdt)
    await automationPage.driver.sleep(2000)
    await automationPage.click(automationPage.contShop)
    await automationPage.driver.sleep(2000)
    await automationPage.click(automationPage.thirdPdt)
    await automationPage.driver.sleep(2000)
    await automationPage.click(automationPage.contShop)
    await automationPage.driver.sleep(2000)
    await automationPage.click(automationPage.fourthPdt)
    await automationPage.driver.sleep(3000)
    
    await automationPage.click(automationPage.viewCart)
    await automationPage.driver.sleep(2000)
    let Cart1= await automationPage.getText(automationPage.cartBlue)
    expect(Cart1).toContain('Blue Top')

    

    let Cart2 = await automationPage.getText(automationPage.cartMenTs)
    expect(Cart2).toContain('Men Tshirt')
   

   let Cart3 = await automationPage.getText(automationPage.cartSleeveless)
    expect(Cart3).toContain('Sleeveless Dress')

    let Cart4 = await automationPage.getText(automationPage.cartStylishdress)
    expect(Cart4).toContain('Stylish Dress')


    await automationPage.click(automationPage.cartDel1)
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