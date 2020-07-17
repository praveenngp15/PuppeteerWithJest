import HomePage from '../pages/HomePage'
import TopBar from '../pages/components/TopBar'
import LoginPage from '../pages/LoginPage'
import FeedBack from '../pages/Feedback'
import jestPuppeteerConfig from '../jest-puppeteer.config'
import {username,password,timeout} from './config'
describe('End To End',()=>{

    let homePage;
    let topBar;
    let loginPage
    let feedBack;

    beforeAll(async ()=>{
        jest.setTimeout(timeout)
        homePage = new HomePage()
        topBar = new TopBar()
        loginPage = new LoginPage()
        feedBack = new FeedBack()

    })


    it('Should Load Home Page',async ()=>{
        await homePage.visit()
        await homePage.isNavBarDisplayed()
    })

    it('Should Submit FeedBack',async ()=>{
        await homePage.clickFeedbackLink()
        await feedBack.isFeedBAckFormDisplayed()
        await feedBack.sumitFeedBackForm('Praveen','test@email.com','Some Dummmy Subject','Some content in text area for testing')
    })

    
    it('Should Login Into Application',async ()=>{
        await homePage.visit()
        await topBar.isTopBarDisplayed()
        await topBar.clickSignInButton()
        await loginPage.isLoginFormDisplayed()
        await loginPage.loginForm(username,password)
    })

})