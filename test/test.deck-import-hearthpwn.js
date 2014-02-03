var hearthHead = require("../services/deck-import-hearthpwn"),
	expect = require("chai").expect;

describe('check(url)', function() {  
	it('should return true if is "hearthpwn"', function() {
		var url = 'hearthpwn';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return true if starts with "hearthpwn"', function() {
		var url = 'hearthpwn.test';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return true if ends with "hearthpwn"', function() {
		var url = 'test.hearthpwn';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return true if contains "hearthpwn"', function() {
		var url = 'test.hearthpwn.test';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return false if does not contain "hearthpwn"', function() {
		var url = 'test.test';
		expect(hearthHead.check(url)).to.be.false;
	});
});


describe('run(html, callback)', function() {  

});