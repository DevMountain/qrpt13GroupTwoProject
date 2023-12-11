import{By} from 'selenium-webdriver';
import {BasePage} from './basePage';
const fs=require('fs');

export class courtney extends BasePage {
    schedule: By=By.xpath('//li[@class="d3-o-nav__item d3-o-nav__item--has-dropdown-submenu"][3]');
    results: By=By.xpath('//h2[@class="nfl-c-content-header__roofline"]');
    teamschedules: By=By.xpath('(//span[@class ="d3-o-nav__item-label"])[63]');
    steelers: By=By.xpath('(//a[@class="d3-o-media-object__link d3-o-button nfl-o-cta nfl-o-cta--primary"])[7]')

    constructor(){
        super({url: 'https://www.nfl.com/'});
    };
    async getResults() {
        return this.getText(this.results);
    };
    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        let text=await this.driver.getCurrentUrl();
        expect(text).toContain("https://www.steelers.com/schedule/");
        await fs.writeFile(`${__dirname}/court2.png`,
        await this.driver.takeScreenshot(),"base64",
        (e)=>{
            if (e) console.error(e)
            else console.log('steelers schedule')
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
        //this method is for closing newly opened tabs
    };

};