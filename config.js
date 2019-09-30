exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub', 
  specs: ['tests/day1.2.js'],

	  capabilities : {
		'browserName' : 'chrome'
	}
};