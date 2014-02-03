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
	it('should err  called with no url', function(done) {
		deckImport.import(null, function(err){
			expect(err).to.exist;
			expect(err).to.have.string('di.19');
			done();
		});
	});

	it('should err no service availible.', function(done) {
		deckImport.import('test', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('di.22');
			done();
		});
	});

	it('should err no response from server.', function(done) {
		deckImport.import('hearthheadasjajsknj', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('di.25');
			done();
		});
	});

	it('should err no response 200 from server.', function(done) {
		deckImport.import('http://www.hearthhead.com/asjasfjkfjasf', function(err){
			expect(err).to.exist;
			expect(err).to.have.string('di.26');
			done();
		});
	});

	it('should return a deck of class mage.', function(done) {
		deckImport.import('http://www.google.com', function(err, deck){
			expect(err).to.not.exist;

			expect(deck.hero).to.exist;
			expect(deck.cards).to.exist;

			expect(deck.hero).to.equal('mage');
			done();
		});
	});
});