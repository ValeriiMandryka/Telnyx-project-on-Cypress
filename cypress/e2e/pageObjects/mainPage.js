const Basic = require("./basic");

//data
const  incorrectEmail = 'qwertygmail.com'
const  correctEmail = 'qwerty@gmail.com'

const faviconTelnyx = '[data-name="Layer 1"]'
const networkLinkHeader = 'span [href="/solutions/global-ip-network"]'
const FaceboolLink = '[href="https://www.facebook.com/Telnyx/"]'
const TwitterLink = '[href="https://twitter.com/telnyx"]'
const linkedInLink = '[href="https://www.linkedin.com/company/telnyx/"]'
const linkSeeAllProducts = '(//*[@href="/products"])[1]'
const headerNavBar = '(//*[@id="__next"]//descendant::header)[1]'
const linkSeeAllSolutions = '//*[@href="/solutions"]'
const linkSeeAllPricing = '//*[@href="/pricing"]'
const productsButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[1]'
const solutionsButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[2]'
const resourcesButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[4]'
const companyButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[5]'
const picingButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[6]'

const popUpMenuOfProducts = '(//*[@class="sc-14c941d7-0 sc-7b3980dc-3 jGccVu ftReEQ"])[1]'
const popUpMenuOfSolution = '(//*[@class="sc-14c941d7-0 sc-7b3980dc-3 jGccVu ftReEQ"])[2]'
const popUpMenuOfResources = '(//*[@class="sc-14c941d7-0 sc-7b3980dc-3 jGccVu ftReEQ"])[3]'
const popUpMenuOfCompany = '(//*[@class="sc-14c941d7-0 sc-7b3980dc-3 jGccVu ftReEQ"])[4]'
const popUpMenuOfPricing = '(//*[@class="sc-14c941d7-0 sc-7b3980dc-3 jGccVu ftReEQ"])[5]'
const emailInputField = '//*[@type="email"]'
const tryForFreeBtn = '//*[@type="submit"]'

class MainPage extends Basic {


    elements={
        FaviconTelnyx: () => cy.get(faviconTelnyx),
        HeaderNavBar:() => cy.xpath(headerNavBar),
        PopUpMenuOfProducts:() => cy.xpath(popUpMenuOfProducts),
        PopUpMenuOfSolution:() => cy.xpath(popUpMenuOfSolution),
        PopUpMenuOfResources:() => cy.xpath(popUpMenuOfResources),
        PopUpMenuOfCompany:() => cy.xpath(popUpMenuOfCompany),
        PopUpMenuOfPricing:() => cy.xpath(popUpMenuOfPricing),
        EmailInputField:() => cy.xpath(emailInputField),
        
    }


//click
clickNetworkLinkHeader() {super.clickCssElement(networkLinkHeader)}   
clickFaviconTelnyx() { super.clickCssElement(faviconTelnyx)}
clickForceLinkSeeallProducts() {super.clickForceXpathElement(linkSeeAllProducts)}
clickForceLinkSeeallSolutions() {super.clickForceXpathElement(linkSeeAllSolutions)}
clickForceLinkSeeallPricing() {super.clickForceXpathElement(linkSeeAllPricing)}
clickTryforFreeBtn() {super.clickForceXpathElement(tryForFreeBtn)}
clickLinkedInLinkWithoutAttribut() {super.clickWithoutAttribut(linkedInLink, 'target' )}
clickTwitterWithoutAttribut() {super.clickWithoutAttribut(TwitterLink, 'target' )}
clickFacbookLinkWithoutAttribut() {super.clickWithoutAttribut(FaceboolLink, 'target' )}
clickEmailInputField() {super.clickForceXpathElement(emailInputField)}

//hover
hoverToProductsButton() {super.hoverXpathElement(productsButton)}
hoverToSolutionsButton() {super.hoverXpathElement(solutionsButton)}
hoverToResourcesButton() {super.hoverXpathElement(resourcesButton)}
hoverToCompanyButton() {super.hoverXpathElement(companyButton)}
hoverToPricingButton() {super.hoverXpathElement(picingButton)}



//scrollIntoView
scrollIntoViewEmailInputField() {super.scrollIntoView(emailInputField)}

//type
typeIncorectEmail() {super.typeXpathElement(emailInputField,incorrectEmail)}
typeIntoCorectEmailInputField() {super.typeXpathElement(emailInputField,correctEmail)}




}

module.exports = new MainPage ;