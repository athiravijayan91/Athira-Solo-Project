import { By, Key } from 'selenium-webdriver'
import {olivePageClass} from './oliveGardenpage'
//import org.openqa.selenium.interactions.Actions;
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const olivePage = new olivePageClass()

test ('view job details ', async()=>{
   
    await olivePage.navigate()
   
    await olivePage.driver.manage().window().maximize()
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.menu)
    await olivePage.driver.sleep(2000)
    
    await olivePage.click(olivePage.searchIcon)
    await olivePage.driver.sleep(2000)
    await olivePage.setInput(olivePage.searchBar, 'pasta\n')
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.cheeseRavioli)
    await olivePage.driver.sleep(3000)
    await olivePage.click(olivePage.side1)
    await olivePage.click(olivePage.side1)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.side2)
    await olivePage.click(olivePage.side2)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.side3)
    await olivePage.click(olivePage.side3)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.side4)
    await olivePage.click(olivePage.side4)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.side5)
    await olivePage.click(olivePage.side5)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.qty)
    await olivePage.driver.sleep(2000)
    await olivePage.click(olivePage.nutrition)
    await olivePage.driver.sleep(5000)
    await fs.writeFile(`${__dirname}/nutrition.png`,
    await olivePage.driver.takeScreenshot(), "base64",   //used .driver here since it is a built in method in selenium
    (e) => {
        if (e) console.error(e)
        else console.log('Saved Succesfully')
    }
    )

   
  
})
afterAll(async () => {
    await olivePage.driver.quit()
})