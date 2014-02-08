var _ = require('underscore'),
	cheerio = require('cheerio');

serviceName = exports.name = "HearthPwn";

exports.check = function(url){
	return url.toLowerCase().indexOf('hearthpwn') >= 0;
};

exports.run = function(html, callback){
	if(!html) return callback('deck-import-hearthHead.run().dihp.11: called with no html.');
	
	var $ = cheerio.load(html);

	var table = $('table td.col-name');
	if(!table) return callback('deck-import-hearthHead.run().dihp.11: called with no html.');

	// GRAB THE CARDS
	var cards = _.map($(table), function(card) {
		return { name: $(card).find('a').text(), number: ($(card).html().toLowerCase().indexOf('× 2') >= 0) ? 2 : 1 };
	});

	if(!cards || cards.length < 1){
		return callback('deck-import-hearthHead.run().dihp.16: no cards on page.');
	}

	// GRAB THE CLASS
	var header = $('.t-deck-header span.class');
	if(!header){
		return callback('deck-import-hearthHead.run().dihp.30: no hero on page.');
	}

	var heroName = getHeroName(header, $);
	if(!heroName){
		return callback('deck-import-hearthHead.run().dihp.30: no hero on page.');
	}

	var deck = {
		hero: heroName,
		cards: cards
	};

	callback(null, deck);
};


function getHeroName(header, $){
	if($(header).hasClass('class-druid')) return 'Druid';
	if($(header).hasClass('class-hunter')) return 'Hunter';
	if($(header).hasClass('class-mage')) return 'Mage';
	if($(header).hasClass('class-paladin')) return 'Paladin';
	if($(header).hasClass('class-priest')) return 'Priest';
	if($(header).hasClass('class-rouge')) return 'Rouge';
	if($(header).hasClass('class-shaman')) return 'Shaman';
	if($(header).hasClass('class-warlock')) return 'Warlock';
	if($(header).hasClass('class-warrior')) return 'Warrior';
	return null;
}