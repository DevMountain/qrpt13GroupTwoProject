import{courtney} from './courtneysPage';
const court = new courtney();

test('find schedule', async()=>{
    await court.navigate();
    (await court.getElement(court.schedule)).click();
    let thisweek=await court.getResults();
    expect(thisweek).toContain("Week 14");
    await court.driver.quit();

});