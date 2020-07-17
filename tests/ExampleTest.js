import HomePage from '../pages/HomePage'
import TopBar from '../pages/components/TopBar'
import LoginPage from '../pages/LoginPage'
import FeedBack from '../pages/Feedback'
import jestPuppeteerConfig from '../jest-puppeteer.config'

describe('End To End',()=>{

    let homePage;
    let topBar;
    let loginPage
    let feedBack;

    beforeAll(async ()=>{
        jest.setTimeout(30000)
        homePage = new HomePage()
        topBar = new TopBar()
        loginPage = new LoginPage()
        feedBack = new FeedBack()

    })

    it('Homepage Should work',async ()=>{
        await homePage.visit()
    })


    it('Nav Bar Should Displayed',async ()=>{
        await homePage.isNavBarDisplayed()
        await topBar.isTopBarDisplayed()
    })

    it('Login',async ()=>{
        await loginPage.visit()
        await loginPage.isLoginFormDisplayed()
        await loginPage.loginForm('username','password')
    })

    it('Feedback',async ()=>{
        await feedBack.visit()
        await feedBack.isFeedBAckFormDisplayed()
        await feedBack.sumitFeedBackForm('Praveen','test@email.com','Some Dummmy Subject','Some content in text area for testing')

    })


})