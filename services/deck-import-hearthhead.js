var cheerio = require('cheerio')
	, _ = require('underscore');


exports.check = function(url){
	return url.indexOf('hearthhead') >= 0;
}

exports.run = function(html, callback){
	if(!html) return callback('deck-import-hearthHead.run().dhh.10: called with no html.');
	
	var $ = cheerio.load(html);
	
	var heroId =  $('.deckguide-hero', '.deckguide-cards').attr('data-class');
	if(!heroId) return callback('deck-import-hearthHead.run().dhh.15: no hero id on page.');

	var hero = _.findWhere(classIds, { id: parseInt(heroId) });
	if(!hero) return callback('deck-import-hearthHead.run().dhh.18: unknown heroId.');

	var cards = _.map($('.deckguide-cards').children('.cards'), function(card){ return $(card).html();});
	if(cards.length < 1) return callback('deck-import-hearthHead.run().dhh.21: no cards on page.');

	var deck = {
		hero: hero.name,
		cards: cards
	};

	callback(null, deck);
}


var classIds = [
	{ name: 'druid', id: 11 }
	, { name: 'hunter', id: 3 }
	, { name: 'mage', id: 8 }
	, { name: 'paladin', id: 2 }
	, { name: 'priest', id: 5 }
	, { name: 'rogue', id: 4 }
	, { name: 'shaman', id: 7 }
	, { name: 'warlock', id: 9 }
	, { name: 'warrior', id: 1 }
];