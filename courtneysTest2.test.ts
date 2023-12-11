import{courtney} from './courtneysPage';
const court = new courtney();

test('steelers schedule', async()=>{
    await court.navigate();
    await court.driver.manage().window().maximize();
    await court.click(court.schedule);
    await court.click(court.teamschedules);
    await court.click(court.steelers);
    await court.tabs();
    await court.driver.quit();

});