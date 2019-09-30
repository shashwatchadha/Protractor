describe("Let us see how to handle dropDown now", function() {

	beforeEach(function() {
		browser.get("http://juliemr.github.io/protractor-demo/")
	})

	function calculate(num1, num2, operation) {
		element(by.model("first")).sendKeys(num1)
		element(by.model("second")).sendKeys(num2)
		element.all(by.css("select >option ")).each(function(item) {
			item.getAttribute("value").then(function(text) {
				if (text == operation)
					item.click();
			})
		})
		element(by.id("gobutton")).click()
	}

	function getRandomNumber() {
		return Math.floor(Math.random() * 200)
	}

	it("Select value from dropdown using all and each", function() {
		var num1 = getRandomNumber()
		var num2 = getRandomNumber()
		calculate(num1, num2, "MULTIPLICATION")
		expect(element(by.css("#gobutton + h2")).getText()).toEqual(
				(num1 * num2).toString())

	})

	it("Let us see some other method of sleecting the dropdown", function() {
		element(by.css("select >option[value='MULTIPLICATION']")).click()
	})
})
