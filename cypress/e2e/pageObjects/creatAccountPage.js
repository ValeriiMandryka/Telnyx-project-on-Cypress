const Basic = require("./basic")


const emailInputField = '//*[@id="email"]'


class CreatAccountPage extends Basic{

elements = {
    EmailInputField: () => cy.xpath(emailInputField)
}

clearValueEmailInputField() {super.clearValue(emailInputField)}

}

module.exports = new CreatAccountPage