var hearthHead = require("../services/deck-import-hearthhead"),
	expect = require("chai").expect;

describe('check(url)', function() {  
	it('should return true if is "hearthhead"', function() {
		var url = 'hearthhead';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return true if starts with "hearthhead"', function() {
		var url = 'hearthhead.test';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return true if ends with "hearthhead"', function() {
		var url = 'test.hearthhead';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return true if contains "hearthhead"', function() {
		var url = 'test.hearthhead.test';
		expect(hearthHead.check(url)).to.be.true;
	});

	it('should return false if does not contain "hearthhead"', function() {
		var url = 'test.test';
		expect(hearthHead.check(url)).to.be.false;
	});
});


describe('run(html, callback)', function() {  
	it('should return err if no html', function() {
		hearthHead.run(null, function(err){
			expect(err).to.exist;
			expect(err).to.have.string('dhh.10');
		});
	});

	it('should return err if no hero html', function() {
		hearthHead.run('<div>test</div>', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('dhh.15');
		});
	});

	it('should return err if no hero html', function() {
		hearthHead.run('<div class="deckguide-cards">' +
							'<div class="deckguide-hero" data-class="100"></div>' +
						'</div>', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('dhh.18');
		});
	});

	it('should return err if no cards on html', function() {
		hearthHead.run('<div class="deckguide-cards">' +
							'<div class="deckguide-hero" data-class="1"></div>' +
						'</div>', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('dhh.21');
		});
	});

	it('should return err if no hero html', function() {
		hearthHead.run('<div class="deckguide-cards">' +
							'<div class="deckguide-hero" data-class="1"></div>' +
						'</div>' +
						'<div class="deckguide-cards">' +
							'<div class="cards">Test 1</div>' +
							'<div class="cards">Test 2</div>' +
						'</div>' , function(err, deck){

			expect(err).to.not.exist;

			expect(deck.hero).to.exist;
			expect(deck.cards).to.exist;

			expect(deck).to.eql({ hero: 'warrior', cards: ['Test 1', 'Test 2']});
		});
	});
});