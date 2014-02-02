var cheerio = require('cheerio')
	, _ = require('underscore');


exports.check = function(url){
	return url.indexOf('hearthhead');
}

exports.run = function(html, callback){
	var $ = cheerio.load(html);
	console.log();

	var heroId =  $('.deckguide-hero', '.deckguide-cards').attr('data-class');
	var hero = _.findWhere(classIds, { id: heroId });

	var deck = {
		hero: 'mage',
		cards: $('.deckguide-cards .cards').html()
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