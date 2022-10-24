module.exports = class Basic {

openUrl(url) {
    cy.visit(url);
    cy.get("body").then(($body) => {
       if ($body.find('[aria-label="close and deny"]').length > 0) {
       cy.get('[aria-label="close and deny"]').click();}
    });
}

cssfindElement(element) {return cy.get(element)}
xpathFindElement(element) {return cy.xpath(element)}

clickCssElement(element) {this.cssfindElement(element).click({timeout: 5000})}
clickXpathElement(element) {this.xpathFindElement(element).click({timeout: 5000})}
clickForceXpathElement(element) {this.xpathFindElement(element).click({force:true},{timeout: 5000})}
clickWithoutAttribut(element, text) {this.cssfindElement(element).invoke('removeAttr', text).click({force: true},{timeout: 5000})}



hoverXpathElement(element) {this.xpathFindElement(element).realHover()}

scrollIntoView(element) {this.xpathFindElement(element).scrollIntoView()}


typeXpathElement(element,text) {this.xpathFindElement(element).click({force: true}).type(text)}
checkIsFocused(element) {this.xpathFindElement(element).click({force: true}).should('be.focused')}
//checkUrl(url) {cy.url().should('eq', (url))}
checkValue(element,text) {this.xpathFindElement(element).should('have.value', text)}

clearValue(element) {this.xpathFindElement(element).clear()}

}
