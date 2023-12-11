import{courtney} from './courtneysPage';
const court = new courtney();

test('bills tickets for sale', async()=>{
    await court.navigate();
    await court.driver.manage().window().maximize();
    await court.click(court.schedule);
    await court.click(court.teamschedules);
    await court.click(court.billstickets);
    await court.tabs2();
    await court.driver.quit();
});