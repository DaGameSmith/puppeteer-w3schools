const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/');

    //main logic
    const result1 = await page.$eval('.learntocodeh1', (el) => {
        return el.innerText;
    });
    const result2 = await page.$$eval('a.w3-button', (anchors) => {
        return anchors.map( anchor => anchor.innerText);
    })
    console.log(result1);
    console.log(result2);
    
    // Close browser.
    await browser.close();
})();