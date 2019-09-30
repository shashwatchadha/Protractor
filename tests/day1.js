describe("This is first test suite", function() {

	beforeEach(function() {
		browser.get("http://juliemr.github.io/protractor-demo/")
	})

	function sum(num1, num2) {
		element(by.model("first")).sendKeys(num1)
		element(by.model("second")).sendKeys(num2)
		element(by.id("gobutton")).click()

	}

	function getRandomNumber() {
		return Math.floor(Math.random() * 200)
	}

	it("first test case", function() {

		var num1 = getRandomNumber()
		var num2 = getRandomNumber()

		sum(num1, num2)

		expect(element(by.css("#gobutton + h2")).getText()).toEqual(
				(num1 + num2).toString())

	})
	
	it("second test case", function(){
		for(var i=0;i<5;i++)
			{
			sum(getRandomNumber(),getRandomNumber())
			}
		element.all(by.css(".table>tbody>tr td:nth-child(3)")).each(function(item) {
			item.getText().then(function(text){
				console.log(text)
			})
		})
	})

})
