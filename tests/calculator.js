let homepage = require('../pages/homepage');


describe('Demo calculator test', () => {
    it('Addition test', () => {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('3');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('6');

        browser.sleep(3000);
    })
})
