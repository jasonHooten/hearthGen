var _ = require('underscore'),
	cheerio = require('cheerio');

serviceName = exports.name = "HearthPwn"

exports.check = function(url){
	return url.toLowerCase().indexOf('hearthpwn') >= 0;
}

exports.run = function(html, callback){
	if(!html) return callback('deck-import-hearthHead.run().dihp.11: called with no html.');
	
	var $ = cheerio.load(html);

	// GRAB THE CARDS
	var cards = _.map($('table td.col-name'), function(card) { 
		return { name: $(card).find('a').text(), number: ($(card).html().toLowerCase().indexOf('× 2') >= 0) ? 2 : 1 };
	});

	if(cards.length < 1){
		console.log($('table td a').html());
		return callback('deck-import-hearthHead.run().dihp.16: no cards on page.');
	}

	var deck = {
		hero: 'druid',
		cards: cards
	};

	callback(null, deck);
}
