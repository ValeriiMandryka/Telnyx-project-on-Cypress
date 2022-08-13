const basic = require("./basic");

//data
const  incorrectEmail = 'qwertygmail.com'
const  correctEmail = 'qwerty@gmail.com'

const faviconTelnyx = '[data-name="Layer 1"]'
const networkLinkHeader = 'span [href="/solutions/global-ip-network"]'
const UrlNetworkLink = 'https://telnyx.com/solutions/global-ip-network'
const UrlMainPage = 'https://telnyx.com/'
const urlCeatFreeAccaunt = 'https://telnyx.com/sign-up?email=qwerty@gmail.com'
const LinkedInURL = 'https://www.linkedin.com/company/telnyx/'
const TwitterURL = 'https://twitter.com/telnyx'
const FacebookURL = 'https://www.facebook.com/Telnyx/'
const linkedInLink = '[href="https://www.linkedin.com/company/telnyx/"]'
const TwitterLink = '[href="https://twitter.com/telnyx"]'
const FaceboolLink = '[href="https://www.facebook.com/Telnyx/"]'
const linkSeeAllProducts = '(//*[@href="/products"])[1]'
const headerNavBar = '(//*[@id="__next"]//descendant::header)[1]'
const linkSeeAllSolutions = '//*[@href="/solutions"]'
const linkSeeAllPricing = '//*[@href="/pricing"]'
const productsButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[1]'
const solutionsButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[2]'
const resourcesButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[4]'
const companyButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[5]'
const picingButton = '(//*[@id="__next"]/descendant::span[@class="sc-7b3980dc-6 gdETaM"])[6]'

const popUpMenuOfProducts = '(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[1]'
const popUpMenuOfSolution = '(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[2]'
const popUpMenuOfResources = '(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[3]'
const popUpMenuOfCompany = '(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[4]'
const popUpMenuOfPricing = '(//*[@class="sc-9d98fd33-0 sc-7b3980dc-3 bRlGsp ftReEQ"])[5]'
const emailInputField = '//*[@type="email"]'
const tryForFreeBtn = '//*[@type="submit"]'


class MainPage  {

 //visability
checkVisabilityPopUpMenuOfPoducts() {basic.elementXpathIsVisible(popUpMenuOfProducts)}
checkVisabilityPopUpMenuOfSolutions() {basic.elementXpathIsVisible(popUpMenuOfSolution)}
checkVisabilityPopUpMenuOfResources() {basic.elementXpathIsVisible(popUpMenuOfResources)}
checkVisabilityPopUpMenuOfCompany() {basic.elementXpathIsVisible(popUpMenuOfCompany)}
checkVisabilityPopUpMenuOfPricing() {basic.elementXpathIsVisible(popUpMenuOfPricing)}
shouldBeVisibleFavicon() {basic.elementCssIsVisible(faviconTelnyx)}
checkVisabilityHeaderNavBar() {basic.elementXpathIsVisible(headerNavBar)}
//click
clickNetworkLinkHeader() {basic.clickCssElement(networkLinkHeader)}   
clickFaviconTelnyx() { basic.clickCssElement(faviconTelnyx)}
clickForceLinkSeeallProducts() {basic.clickForceXpathElement(linkSeeAllProducts)}
clickForceLinkSeeallSolutions() {basic.clickForceXpathElement(linkSeeAllSolutions)}
clickForceLinkSeeallPricing() {basic.clickForceXpathElement(linkSeeAllPricing)}
clickTryforFreeBtn() {basic.clickForceXpathElement(tryForFreeBtn)}
clickLinkedInLinkWithoutAttribut() {basic.clickWithoutAttribut(linkedInLink, 'target' )}
clickTwitterWithoutAttribut() {basic.clickWithoutAttribut(TwitterLink, 'target' )}
clickFacbookLinkWithoutAttribut() {basic.clickWithoutAttribut(FaceboolLink, 'target' )}

//hover
hoverToProductsButton() {basic.hoverXpathElement(productsButton)}
hoverToSolutionsButton() {basic.hoverXpathElement(solutionsButton)}
hoverToResourcesButton() {basic.hoverXpathElement(resourcesButton)}
hoverToCompanyButton() {basic.hoverXpathElement(companyButton)}
hoverToPricingButton() {basic.hoverXpathElement(picingButton)}

//checkUrl
checkUrlNetworkLink() {basic.checkUrl(UrlNetworkLink)}
checkUrlMainPage() {basic.checkUrl(UrlMainPage)}
checkUrlCreatFreeAccount() {basic.checkUrl(urlCeatFreeAccaunt)}
checkLinkedInUrl() {basic.checkUrl(LinkedInURL)}
checkTwitterUrl() {basic.checkUrl(TwitterURL)}
checkFacebookUrl() {basic.checkUrl(FacebookURL)}
//checkIsFocused
checkIsFocusedEmailInputFieldd() {basic.checkIsFocused(emailInputField)}

//scrollIntoView
scrollIntoViewEmailInputField() {basic.scrollIntoView(emailInputField)}

//type
typeIntoIncorectEmailInputField() {basic.typeXpathElement(emailInputField,incorrectEmail)}
typeIntoCorectEmailInputField() {basic.typeXpathElement(emailInputField,correctEmail)}




}

module.exports = new MainPage ;