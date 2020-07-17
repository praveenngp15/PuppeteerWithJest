export default class FeedbackPage {

    async visit(){
        await page.goto('http://zero.webappsecurity.com/feedback.html')
    }


    async isFeedBAckFormDisplayed(){
        await page.waitForSelector('#name')
        await page.waitForSelector('#email')
        await page.waitForSelector('#subject')
        await page.waitForSelector('#comment')
        await page.waitForSelector('[value="Send Message"]')
        await page.waitForSelector('[value="Clear"]')
    }

    async sumitFeedBackForm(name,email,subject,comment){
        await page.type('#name',name)
        await page.type('#email',email)
        await page.type('#subject',subject)
        await page.type('#comment',comment)
        await page.click('[value="Send Message"]')

    }

}