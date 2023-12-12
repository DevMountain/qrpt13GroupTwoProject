import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage'; 

export class statsNFL extends BasePage {
    //! Locators go here; 
     player: By = By.xpath('(//a[@class="d3-o-player-fullname nfl-o-cta--link"])[1]');
     result: By = By.id('main-content');
     rush: By = By.xpath('//a[text()="Rushing"]');
     team: By = By.xpath('(//span[@class="d3-o-nav__item-label"])[63]');
     cookies: By = By.id('onetrust-close-btn-container');
     pStats: By = By.xpath('(//span[@class="d3-o-nav__item-label"])[62]')

    //!constructor
    constructor() {
        super({url:'https://www.nfl.com/stats/player-stats/'})
    };
    //!methods

    async getResults() {
        return this.getText(this.result)
    };
}; 