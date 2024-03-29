let puppeteer = require('puppeteer');

module.exports = async () => {
    const browser = await puppeteer.launch(); //wont run next code until this has ran

    const page = await browser.newPage();

    await page.goto('https://example.com');

    const content = await page.content();

    await browser.close();

    return content;
}