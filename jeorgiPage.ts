import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage'; 

export class statsNFL extends BasePage {
    //! Locators go here; 
     player: By = By.xpath('(//a[@class="d3-o-player-fullname nfl-o-cta--link"])[1]');
     pResult: By = By.id('main-content');
    //!constructor
    //!methods
}; 