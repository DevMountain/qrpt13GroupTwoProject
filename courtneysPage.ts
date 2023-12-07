import{By} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class courtney extends BasePage {
    schedule: By=By.xpath('//li[@class="d3-o-nav__item d3-o-nav__item--has-dropdown-submenu"][3]');
    results: By=By.id("main-content");

    constructor(){
        super({url: 'https://www.nfl.com/'});
    };
    async getResults() {
        return this.getText(this.results);
    };

};