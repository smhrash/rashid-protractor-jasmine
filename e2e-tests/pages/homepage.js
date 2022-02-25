let homepage = function () {
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let output = element(by.css('.ng-binding'));

    this.get = function (url) {
        browser.get(url);
    };
    this.enterFirstNumber = function (firstNum) {
        firstNumber_input.sendKeys(firstNum);

    };

    this.enterSecondNumber = function (secondNum) {
        secondNumber_input.sendKeys(secondNum);

    };

    this.clickGo = function () {
        goButton.click();

    };

    this.verifyOutcome = function (result) {
        
        expect(output.getText()).toEqual(result);
    };

};
module.exports = new homepage();
