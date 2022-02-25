let homepage = require('../pages/homepage');
describe('demo calculator tests', function () {
    it('addition test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber(7);
        homepage.enterSecondNumber(6);
        homepage.clickGo();
        homepage.verifyOutcome('13');
        browser.sleep(3000);
    });

});

// describe('demo calculator test2', function (){
//     it('subtraction test', function () {
//
//         homepage.get('https://juliemr.github.io/protractor-demo/');
//         homepage.enterFirstNumber(27);
//         homepage.enterSecondNumber(16);
//         homepage.clickGo();
//         homepage.verifyOutcome('11');
//         browser.sleep(3000);
//     });

//})