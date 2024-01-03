import {By, WebDriver} from 'selenium-webdriver'
const fs = require('fs')
import {BasePage} from './basePage'
import{Options} from 'selenium-webdriver'
import { options } from 'yargs';
export class olivePageClass extends BasePage {    
    orderBtn: By = By.xpath('(//a[@class="trackContent d-none d-md-inline-block btn btn-mainstyle thick text-white rounded mt-2 px-5 text-uppercase"])[1]');
    //soupBtn: By = By.xpath('(//div[text()="Soups, Salad & Breadsticks"])[1]');
    toGoBtn: By = By.xpath('(//a[text()="ORDER TO GO"])[1]');
    //saladBtn: By = By.xpath('//div[text()="Homemade Soups"]')
    dessertBtn:By = By.css('#Desserts')
    drinkBtn: By = By.xpath ('//div[text()="Non-Alcoholic Beverages"][1]')
    lasagna: By = By.xpath('//div[text()="Chocolate Lasagna"][1]')
    capucino: By = By.xpath('//div[text()="Cappuccino"]')
    itemcrt1: By = By.xpath('//div[text()="NEW Chocolate Lasagna"]')
    itemcrt2: By = By.xpath('//div[text()="OG House Cappuccino"]')
    
    addCrt: By = By.xpath('//div[text()="Add to cart"]')
    popupBtn: By = By.xpath('//div[text()="OK"]')
    cofirmCrt: By = By.xpath('//div[text()="Confirm and add to cart"]')
    cartIcon: By = By.xpath('//div[text()="View Cart"]')
    closeCrtIcon: By = By.xpath('//div[text()="Add More Items"]')

    loginBtn:By = By.css('#header-login-link')
    email: By = By.css('#emailid')
    password: By = By.css('#password')
    
    //signinBtn: By = By.xpath('//input[@name="/atg/userprofiling/ProfileFormHandler.login"]')
    signinBtn: By = By.xpath('//input[@value="LOG IN"]')
    //tiramisu: By = By.xpath('//div[text()="Tiramisu (V)"]')


    location: By = By.xpath('//a[text()="Locations"]')
    findLocation: By = By.xpath('//input[@placeholder="Search by city, state or zip code"]')
    americanFork: By = By.xpath('//div[text()="American Fork"]')
    amfrkOrderbtn: By = By.xpath('//div[@class="css-1dbjc4n r-1awozwy r-1bhbjqr r-m9c94c r-1xfd6ze r-rs99b7 r-1loqt21 r-1777fci r-peo1c r-6dt33c r-xd6kpl r-1m04atk r-1pyaxff r-tskmnb r-1otgn73 r-13qz1uu"]')
    amfrkTogo: By = By.xpath('//img[@alt="Order Olive Garden To Go and have it delivered to your car when you pick it up."]')

    waitlist: By = By.xpath('//a[text()="Join Waitlist"]')
    waitnumber: By = By.xpath('//div[text()="5"]')
    firstName: By = By.xpath('//input[@placeholder="First Name*"]')
    lastName: By = By.xpath('//input[@placeholder="Last Name*"]')
    mobileNumber: By = By.xpath('//input[@placeholder="Mobile number*"]')
    emailaddress: By = By.xpath('//input[@placeholder="Email*"]')
    joinWaitlist: By = By.xpath('//div[text()="JOIN WAITLIST"]')
    waitlistCOnfirmtext: By = By.xpath('//div[text()="Thank you for joining our waitlist."]')

    careers: By = By.xpath('//a[@id="https://jobs.olivegarden.com/"]')
    careerLocation: By = By.css('#geolocation_value')


    option1: By = By.xpath('//div[text()="Famous House Salad (Dressing on the side)"]')
    searchIcon: By = By.xpath('//div[@class="css-1dbjc4n r-1mlwlqe r-z80fyv r-1udh08x r-19wmn03 r-417010"]')
    menu:By = By.xpath('//a[text()="Menu"]')
    searchBar: By = By.xpath('//input[@placeholder="Search the Menu"]')
    cheeseRavioli: By = By.xpath('//div[text()="Cheese Ravioli"]')
    sauce: By = By.xpath('//div[@alt="css-1dbjc4n r-1awozwy r-1iusvr4 r-18u37iz r-16y2uox r-1wbh5a2 r-1wtj0ep"]')
    sauce1: By = By.xpath('//div[text()="Marinara Sauce "]')
    choose1: By = By.xpath('//div[text()="Choose Your Sauce"]')
    soupSide: By = By.xpath('//div[text()="Chicken & Gnocchi Soup"]')
    drinkSide: By = By.xpath('//div[text()="Classic  Lemonade"]')
    cheeseSide: By = By.xpath('//div[text()="Five Cheese Ziti "]')
    custom1: By = By.xpath('//div[text()="Customize (Would you like to substitute your grilled chicken?)"]')
    customSub1 : By = By.xpath('//div[text()="Chicken Fritta"]')
    custom2: By = By.xpath('//div[text()="Customize (Looking for a different pasta?)"]')
    customSub2: By = By.xpath('//div[text()="Spaghetti"]')
    increaseQty: By = By.xpath('//div[@aria-label="increase quantity"]')
    addTocartBtn : By = By.xpath('//div[text()="Add to cart"]')

    topping1: By = By.xpath('//div[text()="Would you like to add a topping?"]')



    lunchFav: By = By.xpath('//div[text()="Lunch-Sized Favorites"]')
    chknPar: By = By.xpath('//div[text()="Spaghetti"]')
    customopt: By = By.xpath('//div[text()="Lunch Spaghetti with Meat Sauce"]')
    //lasagnaClassico: By = By.xpath('//img[@src="https://media.olivegarden.com/en_us/images/product/LasagnaClassico_lunch_GV.jpg"]')


    shrimpAlfredo: By = By.xpath('//div[text()="Shrimp Alfredo"]')
    tourOfitaly: By = By.xpath('//div[text()="Tour of Italy"]')
    ravioli: By = By.xpath('//div[text()="Ravioli Carbonara"]')
    viewCart: By = By.xpath('//img[@src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNTYyNSAxMEgyNC40Mzc1TDI1Ljc3MTggMjguNzg3NUMyNS44OTUxIDMwLjUyMzYgMjQuNTE5OSAzMiAyMi43Nzk0IDMySDQuMjIwNjNDMi40ODAwOCAzMiAxLjEwNDg2IDMwLjUyMzYgMS4yMjgxNiAyOC43ODc1TDIuNTYyNSAxMFoiIHN0cm9rZT0iIzU0MzAxQSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTE4IDE2VjUuNUMxOCAzLjAxNDcyIDE1Ljk4NTMgMSAxMy41IDFWMUMxMS4wMTQ3IDEgOSAzLjAxNDcyIDkgNS41VjE2IiBzdHJva2U9IiM1NDMwMUEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="]')
    removeCart: By = By.xpath('//div[text()="Remove"]')
    confirmRemove: By = By.xpath('//div[text()="remove"]')
    emptyText: By= By.xpath('//div[text()="Your cart is empty."]')
    
    side1: By = By.xpath('(//div[@class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"])[1]')
    side2: By = By.xpath('(//div[@class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"])[2]')
    side3: By = By.xpath('(//div[@class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"])[3]')
    side4: By = By.xpath('(//div[@class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"])[4]')
    side5: By = By.xpath('(//div[@class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"])[5]')
    qty: By = By.xpath('(//div[@class="css-18t94o4 css-1dbjc4n r-1loqt21 r-kzbkwu r-b5h31w r-1ah4tor r-tskmnb r-1otgn73"])[2]')
    nutrition: By = By.xpath('(//div[text()="View Nutritional Info"])')
     

    okBtn: By = By.xpath('//button[@class="sc-dcJsrY fYJCJr"]')
    jobSearch: By = By.xpath('(//a[@class="dropdown-toggle show"])')
   /*gSign: By = By.xpath('//span[text()="Sign in"]')
   gemail: By = By.xpath('//input[@type="email"]')
   gNext: By = By.xpath('//span[text()="Next"]')
   gpwd: By = By.xpath('//input[@type="password"]')*/



    constructor(){
        super({url: 'https://www.olivegarden.com'}); 
        //options.arguments('incognito')
        //options = super.ChromeOptions()
        //super({url: 'http://www.olivegarden.com/customer-service/account-login'})        
    }; 
    async tabs(){
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(1500); 
        //await this.click(this.okBtn)
        //await this.driver.switchTo().alert().dismiss()
        fs.writeFile(`${__dirname}/xPicture.png`,
        await this.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.log(e);
            else console.log("A picture is worth a thousand words"); 
        }); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]);
    }
};
