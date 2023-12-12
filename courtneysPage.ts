import{By} from 'selenium-webdriver';
import {BasePage} from './basePage';
const fs=require('fs');

export class courtney extends BasePage {
    schedule: By=By.xpath('//li[@class="d3-o-nav__item d3-o-nav__item--has-dropdown-submenu"][3]');
    results: By=By.xpath('//h2[@class="nfl-c-content-header__roofline"]');
    teamschedules: By=By.xpath('(//span[@class ="d3-o-nav__item-label"])[63]');
    steelers: By=By.xpath('(//a[@class="d3-o-media-object__link d3-o-button nfl-o-cta nfl-o-cta--primary"])[7]');
    billstickets: By=By.xpath('(//a[@class="d3-o-media-object__link d3-o-button nfl-o-cta nfl-o-cta--primary"])[12]');
    dropdown: By=By.xpath('//div[@class="nfl-c-form__group"][2]');
    week10: By=By.xpath('//*[text()="WEEK 10"]');

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
    };
    async tabs2() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        let text=await this.driver.getCurrentUrl();
        expect(text).toContain("https://www.ticketmaster.com/Buffalo-Bills-tickets/artist/805905?utm_source=NFL.com&utm_medium=client&utm_campaign=NFL_LEAGUE&utm_content=league-site_tickets_team_schedules&wt.mc_id=NFL_LEAGUE_league-site_tickets_team_schedules");
        await fs.writeFile(`${__dirname}/court3.png`,
        await this.driver.takeScreenshot(),"base64",
        (e)=>{
            if (e) console.error(e)
            else console.log('bills tickets')
        });
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };

};