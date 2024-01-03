
import {olivePageClass} from './oliveGardenpage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const olivePage = new olivePageClass()

test ('log in with valid credentials', async()=>{
    
    await olivePage.navigate()
     
    await olivePage.driver.manage().window().maximize()
    //await olivePage.driver.sleep(1000)
    await olivePage.click(olivePage.loginBtn)
    //await olivePage.driver.sleep(1000)
    await olivePage.setInput(olivePage.email, 'avijayan@boostability.com')
    //await olivePage.driver.sleep(1000)
    await olivePage.setInput(olivePage.password, 'Olive123@')
    await olivePage.driver.sleep(1000)
    await olivePage.click(olivePage.signinBtn)
    //await olivePage.driver.sleep(5000)
    //await olivePage.navigate('https://www.olivegarden.com/customer-service/recent-activity?_requestid=255995')
  
})
afterAll(async () => {
    //await olivePage.driver.quit()
})






/*await olivePage.navigate('https://www.google.com/')
    await olivePage.click(olivePage.gSign)
    await olivePage.setInput(olivePage.gemail,'avijayan@boostability.com')
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.gNext)
    await olivePage.driver.sleep(5000)
    await olivePage.setInput(olivePage.gpwd,'PWD123@')
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.gNext)*/