
import {olivePageClass} from './oliveGardenpage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const olivePage = new olivePageClass()

test ('loging in to the account with valid credentials', async()=>{
   
    await olivePage.navigate()
    await olivePage.driver.manage().window().maximize()
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.location)
    await olivePage.driver.sleep(3000)
    await olivePage.setInput(olivePage.findLocation, '84043\n')
    await olivePage.driver.sleep(3000)
    await olivePage.click(olivePage.americanFork)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.amfrkOrderbtn)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.amfrkTogo)
    await olivePage.driver.sleep(2000)

    
  
})
afterAll(async () => {
    await olivePage.driver.quit()
})