exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub', 
  specs: ['tests/day1.js'],

	  capabilities : {
		'browserName' : 'firefox'
	}
};