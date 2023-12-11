import{courtney} from './courtneysPage';
const court = new courtney();
const fs=require('fs');

test('find schedule', async()=>{
    await court.navigate();
    (await court.getElement(court.schedule)).click();
    let thisweek=await court.getResults();
    expect(thisweek).toContain("2023 — WEEK 15");
    await fs.writeFile(`${__dirname}/court.png`,
    await court.driver.takeScreenshot(),"base64",
    (e)=>{
        if (e) console.error(e)
        else console.log('all teams schedule')
    });
    await court.driver.quit();
});