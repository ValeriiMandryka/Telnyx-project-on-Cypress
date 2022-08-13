const basic = require("./basic")
const mainPage = require("./mainPage")

const emailInputField = '//*[@id="email"]'
const  correctEmail = 'qwerty@gmail.com'


class CreatAccountPage {

//get Element
emailInputField() {return basic.xpathFindElement(emailInputField)}

checkCorrectEmailIntoEmailField() {basic.checkValue(emailInputField,correctEmail)}
clearValueEmailInputField() {basic.clearValue(emailInputField)}

}

module.exports = new CreatAccountPage