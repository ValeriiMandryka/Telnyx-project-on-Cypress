
/// <reference types="cypress" />
const basic = require("../pageObjects/basic");
const creatAccountPage = require("../pageObjects/creatAccountPage");

const mainPage = require("../pageObjects/mainPage");






describe("Smoke test", () => {
 
 
  beforeEach(() => {
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it('Verify  that favicon "Telnyx" is working properly to return to the main  from other pages ', () => {
    
    mainPage.shouldBeVisibleFavicon()
    mainPage.clickNetworkLinkHeader()
    mainPage.checkUrlNetworkLink()
    mainPage.shouldBeVisibleFavicon()
    mainPage.clickFaviconTelnyx()
    mainPage.checkUrlMainPage()
       
  })
    
    
  it('Check main header navigation menu is present on "Products", "Solutions", "Pricing" pages ', () => {
    
    mainPage.clickForceLinkSeeallProducts()
    mainPage.checkVisabilityHeaderNavBar()
    mainPage.clickForceLinkSeeallSolutions()
    mainPage.checkVisabilityHeaderNavBar()
    mainPage.clickForceLinkSeeallPricing()
    mainPage.checkVisabilityHeaderNavBar()
   
   
    //cy.xpath('(//*[@href="/products"])[1]').click({force: true})
    //cy.xpath('(//*[@id="__next"]//descendant::header)[1]').should('be.visible')
    //cy.xpath('//*[@href="/solutions"]').click({force: true})
    //cy.xpath('(//*[@id="__next"]//descendant::header)[1]').should('be.visible')
    //cy.xpath('//*[@href="/pricing"]').click({force: true})
    //cy.xpath('(//*[@id="__next"]//descendant::header)[1]').should('be.visible')
  })

   
  it('Check visability pop up submenu of main navigation menu', () => {
     
      mainPage.hoverToProductsButton()
      mainPage.hoverToProductsButton()
      mainPage.checkVisabilityPopUpMenuOfPoducts()
      mainPage.hoverToSolutionsButton()
      mainPage.checkVisabilityPopUpMenuOfSolutions()
      mainPage.hoverToResourcesButton()
      mainPage.checkVisabilityPopUpMenuOfResources()
      mainPage.hoverToCompanyButton()
      mainPage.checkVisabilityPopUpMenuOfCompany()
      mainPage.hoverToPricingButton()
      mainPage.checkVisabilityPopUpMenuOfPricing()
    
        //cy.xpath('(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[1]').realHover()
        // cy.xpath('(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[1]').realHover()
        //cy.xpath('(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[1]').should('be.visible')
        //cy.xpath('(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[2]').realHover()
        //cy.xpath('(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[2]').should('be.visible')
        //cy.xpath('(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[4]').realHover()
        //cy.xpath('(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[3]').should('be.visible')
        //cy.xpath('(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[5]').realHover()
        //cy.xpath('(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[4]').should('be.visible')
        //cy.xpath('(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[6]').realHover()
        //cy.xpath('(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[5]').should('be.visible')
      })

  it('Check input field is focused after click on it', () => {
          
      mainPage.scrollIntoViewEmailInputField()
      mainPage.checkIsFocusedEmailInputFieldd()
          
          //cy.xpath('//*[@type="email"]').scrollIntoView()
          //cy.xpath('//*[@type="email"]').click().should('be.focused')
      })
  it('Unable to go to the account creation page with the wrong email on "Try for free" label', () => {
        
      mainPage.scrollIntoViewEmailInputField()
      mainPage.typeIntoIncorectEmailInputField()
      mainPage.clickTryforFreeBtn()
      mainPage.checkUrlMainPage()

  })
  it('Verify redirection to account creation page with filled email and Verify that email can be cleared from "Email" input field', () => {
      mainPage.typeIntoCorectEmailInputField()
      mainPage.clickTryforFreeBtn()
      mainPage.checkUrlCreatFreeAccount()
      creatAccountPage.checkCorrectEmailIntoEmailField()
      creatAccountPage.clearValueEmailInputField()
      creatAccountPage.emailInputField().should('have.value', '')



    
      //cy.xpath('//*[@type="email"]').click().type('qwerty@gmail.com')
      //cy.xpath('//*[@type="submit"]').click()
      //cy.url().should('eq', 'https://telnyx.com/sign-up?email=qwerty@gmail.com')
      //cy.xpath('//*[@id="email"]').should('have.value','qwerty@gmail.com')
     
      //cy.xpath('//*[@id="email"]').clear()
      //cy.xpath('//*[@id="email"]').should('have.value', '')
    })
    it('Verify cocial link in footer menu "Linked In" works properly', () => {
      mainPage.clickLinkedInLinkWithoutAttribut()
      mainPage.checkLinkedInUrl()
      //cy.get('[href="https://www.linkedin.com/company/telnyx/"]').invoke('removeAttr', 'target').click()
      //cy.url().should('include', 'https://www.linkedin.com/company/telnyx/')
     
    })
    it('Verify cocial link in footer menu "Follow on Twitter" works properly', () => {
      mainPage.clickTwitterWithoutAttribut()
      mainPage.checkTwitterUrl()
      
      //cy.get('[href="https://twitter.com/telnyx"]').invoke('removeAttr', 'target').click()
      //cy.url().should('include', 'https://twitter.com/telnyx')
     
    })
    it('Verify cocial link in footer menu "Follow on Facebook" works properly', () => {
      mainPage.clickFacbookLinkWithoutAttribut()
      mainPage.checkFacebookUrl()
     
      //cy.get('[href="https://www.facebook.com/Telnyx/"]').invoke('removeAttr', 'target').click()
      //cy.url().should('include', 'https://www.facebook.com/Telnyx/')
     
    })
    

});