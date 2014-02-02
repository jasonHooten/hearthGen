var deckImport = require("../services/deck-import"),
	expect = require("chai").expect;

describe('getService(url)', function() {  
	it('should return null if no service matches', function() {
		expect(deckImport.getService(null)).to.not.be.ok;
	});

	it('should return undefined for a service not found', function() {
		expect(deckImport.getService('test')).to.not.be.ok;
	});

	it('should return hearthHead if it matches the HearthHead url', function() {
		var url = 'hearthHead';

		var service = deckImport.getService(url);
		expect(service).to.be.ok;
		expect(service.name).to.be.ok;
		expect(service.name).to.equal('HearthHead');
	});
});

describe('import(url, callback)', function() {  
	it('should err  called with no url', function() {
		deckImport.import(null, function(err){
			expect(err).to.exist;
			expect(err).to.have.string('di.19');
		});
	});

	it('should err no service availible.', function() {
		deckImport.import('test', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('di.22');
		});
	});

	it('should err no response from server.', function() {
		deckImport.import('hearthheadasjajsknj', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('di.25');
		});
	});

	it('should err no response 200 from server.', function() {
		deckImport.import('http://www.hearthhead.com/asjasfjkfjasf', function(err){
			expect(err).to.exist;
			console.log(err);
			expect(err).to.have.string('di.26');
		});
	});

	it('should return a deck of class mage.', function() {
		deckImport.import('http://www.hearthhead.com/deck=10036/mage-minion', function(err, deck){
			expect(err).to.not.exist;

			console.log(err);
			expect(deck.hero).to.exist;
			expect(deck.cards).to.exist;

			expect(deck.hero).to.equal('mage');
		});
	});
});