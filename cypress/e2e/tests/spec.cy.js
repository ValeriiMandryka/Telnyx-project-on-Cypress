
/// <reference types="cypress" />

const basic = require("../pageObjects/basic");
const creatAccountPage = require("../pageObjects/creatAccountPage");
const mainPage = require("../pageObjects/mainPage");

const mainUrl = 'https://telnyx.com'
const sighnUpUrl = 'https://telnyx.com/sign-up?email=qwerty@gmail.com'
const  correctEmail = 'qwerty@gmail.com'
//const Element = 




describe("Smoke test", () => {
 
 
  beforeEach(() => {
      mainPage.openUrl(mainUrl)
      });

  it('Verify  that favicon "Telnyx" is working properly to return to the main  from other pages ', () => {
      mainPage.clickNetworkLinkHeader()
      cy.url().should('eq', 'https://telnyx.com/solutions/global-ip-network')
      mainPage.elements.FaviconTelnyx().should('be.visible')
      mainPage.clickFaviconTelnyx({timeout: 5000})
      cy.url().should('eq', 'https://telnyx.com/')    
     })
    
    
  it('Check main header navigation menu is present on "Products", "Solutions", "Pricing" pages ', () => {
    
      mainPage.clickForceLinkSeeallProducts()
      mainPage.elements.HeaderNavBar().should('be.visible')
      mainPage.clickForceLinkSeeallSolutions()
      mainPage.elements.HeaderNavBar().should('be.visible')
      mainPage.clickForceLinkSeeallPricing()
      mainPage.elements.HeaderNavBar().should('be.visible')
      })

   
  it('Check visability pop up submenu of main navigation menu', () => {
     
      mainPage.hoverToProductsButton()
      mainPage.hoverToProductsButton()
      mainPage.elements.PopUpMenuOfProducts().should('be.visible')
      mainPage.hoverToSolutionsButton()
      mainPage.elements.PopUpMenuOfSolution().should('be.visible')
      mainPage.hoverToResourcesButton()
      mainPage.elements.PopUpMenuOfResources().should('be.visible')
      mainPage.hoverToCompanyButton()
      mainPage.elements.PopUpMenuOfCompany().should('be.visible')
      mainPage.hoverToPricingButton()
      mainPage.elements.PopUpMenuOfPricing().should('be.visible')
      })

  it('Check input field is focused after click on it', () => {
          
      mainPage.scrollIntoViewEmailInputField()
      mainPage.clickEmailInputField()
      mainPage.elements.EmailInputField().should('be.focused')
      })

  it('Unable to go to the account creation page with the wrong email on "Try for free" label', () => {
        
      mainPage.scrollIntoViewEmailInputField()
      mainPage.typeIncorectEmail()
      mainPage.clickTryforFreeBtn()
      cy.url().should('eq', 'https://telnyx.com/')
      })

  it('Verify redirection to account creation page with filled email ', () => {
      mainPage.typeIntoCorectEmailInputField()
      mainPage.clickTryforFreeBtn()
      cy.url().should('eq', 'https://telnyx.com/sign-up?email=qwerty@gmail.com')
      }) 

  it ('Verify that email can be cleared from "Email" input field', () =>{   
      creatAccountPage.openUrl(sighnUpUrl)
      creatAccountPage.elements.EmailInputField().should('have.value', 'qwerty@gmail.com')
      creatAccountPage.clearValueEmailInputField()
      creatAccountPage.elements.EmailInputField().should('have.value', '')     
    })

  it('Verify cocial link in footer menu "Linked In" works properly', () => {
      mainPage.clickLinkedInLinkWithoutAttribut()
      cy.url().should('include', 'https://www.linkedin.com/company/telnyx/')  
    })

  it('Verify cocial link in footer menu "Follow on Twitter" works properly', () => {
      mainPage.clickTwitterWithoutAttribut()
      cy.url().should('include', 'https://twitter.com/telnyx')
      })

  it('Verify cocial link in footer menu "Follow on Facebook" works properly', () => {
      mainPage.clickFacbookLinkWithoutAttribut()
      cy.url().should('include', 'https://www.facebook.com/Telnyx/')  
    })
    

});