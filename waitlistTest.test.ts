import {olivePageClass} from './oliveGardenpage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const olivePage = new olivePageClass()

test ('join waitlist', async()=>{
   
    await olivePage.navigate()
    await olivePage.driver.manage().window().maximize()
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.waitlist)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.waitnumber)
    await olivePage.driver.sleep(2000)
    await olivePage.setInput(olivePage.firstName, 'Athira')
    await olivePage.driver.sleep(2000)
    await olivePage.setInput(olivePage.lastName, 'Vijayan')
    await olivePage.driver.sleep(2000)
    await olivePage.setInput(olivePage.mobileNumber, '1234567890')
    await olivePage.driver.sleep(2000)
    await olivePage.setInput(olivePage.emailaddress, 'avijayan@boostability.com')
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.joinWaitlist)
    await olivePage.driver.sleep(2000)

    let resultText = await olivePage.getText(olivePage.waitlistCOnfirmtext)
    expect (resultText).toBe('Thank you for joining our waitlist.')
    await olivePage.driver.sleep(4000)
    

    
  
})
afterAll(async () => {
    await olivePage.driver.quit()
})