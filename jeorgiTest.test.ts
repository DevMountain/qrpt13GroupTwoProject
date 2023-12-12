import { statsNFL } from "./jeorgiPage"; 
const stats = new statsNFL(); 
const fs = require('fs');

test("click buttons on stats page", async () => {
    await stats.navigate();
    await stats.driver.manage().window().maximize();
    await stats.click(stats.cookies);
    await stats.click(stats.rush);
    let rushText = await stats.getResults();
    expect(rushText).toContain("2023 NFL rushing stats");

    await fs.writeFile(`${__dirname}/rushing.png`,
    await stats.driver.takeScreenshot(), 'base64',
    (e)=>{
        if (e) console.error(e)
        else console.log('You did it')
    });

    await stats.click(stats.team);
    let teamText = await stats.getResults();
    expect(teamText).toContain("NFL 2023 REG");

    await fs.writeFile(`${__dirname}/team.png`,
    await stats.driver.takeScreenshot(), 'base64',
    (e)=>{
        if (e) console.error(e)
        else console.log('You did it')
    });

    await stats.click(stats.pStats);
    await stats.click(stats.player);
    let playerText = await stats.getResults();
    expect(playerText).toContain("C.J. Stroud");

    await fs.writeFile(`${__dirname}/player.png`,
    await stats.driver.takeScreenshot(), 'base64',
    (e)=>{
        if (e) console.error(e)
        else console.log('You did it')
    });


    await stats.driver.quit();


}); 