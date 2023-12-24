import {By, WebDriver} from 'selenium-webdriver'
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
};
