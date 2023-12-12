import{courtney} from './courtneysPage';
const court = new courtney();
const fs=require('fs');

test('week 10 scores', async()=>{
    await court.navigate();
    (await court.getElement(court.schedule)).click();
    (await court.getElement(court.dropdown)).click();
    (await court.getElement(court.week10)).click();
    let weekten=await court.getResults();
    expect(weekten).toContain("2023 — WEEK 10");
    await fs.writeFile(`${__dirname}/court4.png`,
    await court.driver.takeScreenshot(),"base64",
    (e)=>{
        if (e) console.error(e)
        else console.log('week 10 scores')
    });
    await court.driver.quit();
});