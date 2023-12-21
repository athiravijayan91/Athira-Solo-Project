import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class olivePageClass extends BasePage {
    orderBtn: By = By.xpath('(//a[@class="trackContent d-none d-md-inline-block btn btn-mainstyle thick text-white rounded mt-2 px-5 text-uppercase"])[1]');
    soupBtn: By = By.xpath('(//div[text()="Soups, Salad & Breadsticks"])[1]');
    toGoBtn: By = By.xpath('(//a[text()="ORDER TO GO"])[1]');
    saladBtn: By = By.xpath('(//div[text()="ADD"])[59]');



   
    constructor(){
        super({url: 'https://www.olivegarden.com/home'}); 
    }; 
    
};
