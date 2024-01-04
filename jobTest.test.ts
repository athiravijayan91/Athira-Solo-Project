import {olivePageClass} from './oliveGardenpage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const olivePage = new olivePageClass()

test ('view job details ', async()=>{
   
    await olivePage.navigate()
    await olivePage.driver.manage().window().maximize()
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.careers)
    await olivePage.driver.sleep(2000)
    //await olivePage.click(olivePage.jobSearch)
    await olivePage.tabs();
   
    
  
    await olivePage.driver.sleep(3000)
    

    
  
})
afterAll(async () => {
    await olivePage.driver.quit()
})