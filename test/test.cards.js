var cards = require("./../models/Cards"),
	expect = require("chai").expect;

describe('.cards', function() {
	it('should not be empty', function() {
		expect(cards).to.be.ok;
		expect(cards).to.not.be.empty;
	});
});

