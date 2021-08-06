let homepage = function(){
    let firstNumber_input = element(by.model("first"));
    let secondNumber_input = element(by.model("second"));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    
    this.get = function(url){
        browser.get(url)
    }

    this.enterFirstNumber = function(value1){
        firstNumber_input.sendKeys(value1);
    }

    this.enterSecondNumber = function(value2){
        secondNumber_input.sendKeys(value2);
    }

    this.clickGo = function(){
        goButton.click();
    }

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result)); //assertion
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();