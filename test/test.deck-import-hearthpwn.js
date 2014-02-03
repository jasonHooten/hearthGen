var hearthpwn = require("../services/deck-import-hearthpwn"),
	expect = require("chai").expect,
	request = require('request');

describe('check(url)', function() {  
	it('should return true if is "hearthpwn"', function() {
		var url = 'hearthpwn';
		expect(hearthpwn.check(url)).to.be.true;
	});

	it('should return true if starts with "hearthpwn"', function() {
		var url = 'hearthpwn.test';
		expect(hearthpwn.check(url)).to.be.true;
	});

	it('should return true if ends with "hearthpwn"', function() {
		var url = 'test.hearthpwn';
		expect(hearthpwn.check(url)).to.be.true;
	});

	it('should return true if contains "hearthpwn"', function() {
		var url = 'test.hearthpwn.test';
		expect(hearthpwn.check(url)).to.be.true;
	});

	it('should return false if does not contain "hearthpwn"', function() {
		var url = 'test.test';
		expect(hearthpwn.check(url)).to.be.false;
	});
});


describe('run(html, callback)', function() {  
	it('should return err if no html', function(done) {
		hearthpwn.run(null, function(err){
			expect(err).to.exist;
			expect(err).to.have.string('dihp.11');
			done();
		});
	});

	it('should return a deck with cards test', function(done) {
		hearthpwn.run('<table class="listing-cards-tabularz">' +
							'<tr> <td>' +
								 '<a>test</a>' +
							'</td></tr>' +
						'</div>', function(err, deck){
			
			expect(err).to.not.exist;

			expect(deck.hero).to.exist;
			expect(deck.cards).to.exist;

			expect(deck).to.eql({ hero: 'mage', cards: ['test']});
			done();
		});
	});

	it('should return a deck with cards test', function(done) {
		hearthpwn.run('<table class="list listing-cards-tabularz">' +
							'<tr> <td>' +
								 '<a>test</a>' +
							'</td></tr>' +
						'</div>', function(err, deck){
			
			expect(err).to.not.exist;

			expect(deck.hero).to.exist;
			expect(deck.cards).to.exist;

			expect(deck).to.eql({ hero: 'mage', cards: ['test']});
			done();
		});
	});

	it('should return a deck with complex html test', function(done) {
		hearthpwn.run(testHtml, function(err, deck){
			
			expect(err).to.not.exist;

			expect(deck.hero).to.exist;
			expect(deck.cards).to.exist;

			expect(deck).to.eql({ hero: 'mage', cards: ['Bloodmage Thalnos']});
			done();
		});
	});

	it('should run on a live page', function(done) {
		
		request('http://www.hearthpwn.com/decks/29315-ultimate-control', function(error, response, body) {
			hearthpwn.run(body, function(err, deck){
				
				expect(err).to.not.exist;

				expect(deck.hero).to.exist;
				expect(deck.cards).to.exist;

				expect(deck.hero).to.equal('mage');
				done();
			});
		});
	});
});



var testHtml = '<table class="listing listing-cards-tabularz b-table b-table-a" data-viewstate="" data-ajax-set-window-state="true" id="cards" data-row-selector="&gt;tbody&gt;tr" data-default-sort-slug="name" data-default-sort-order="asc">' +
    '<thead class="b-table-header j-listing-table-header">' +
        '<tr><th class="b-table-heading col-name asc" data-default-sort-order="asc">'+
                      '<a class="selected asc" href="/decks/29315-ultimate-control?sort=-name">Name</a>'+
         '</th></tr>'+
    '</thead>'+
    '<tbody>'+
        '<tr class="even"><td class="col-name">'+
			'<b style="font-size: 110%"><a href="/cards/525-bloodmage-thalnos" class="rarity-5">Bloodmage Thalnos</a></b>× 1</td>'+
		'</tr>'+
    '</tbody>'+
'</table>';