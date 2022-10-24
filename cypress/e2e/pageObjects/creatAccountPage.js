const Basic = require("./Basic")


const emailInputField = '//*[@id="email"]'
const  correctEmail = 'qwerty@gmail.com'

class CreatAccountPage extends Basic{

elements = {
    EmailInputField: () => cy.xpath(emailInputField)
}

clearValueEmailInputField() {super.clearValue(emailInputField)}

}

module.exports = new CreatAccountPage