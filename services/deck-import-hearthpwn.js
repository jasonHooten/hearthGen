var _ = require('underscore');

serviceName = exports.name = "HearthPwn"

exports.check = function(url){
	return url.toLowerCase().indexOf(serviceName) >= 0;
}

exports.run = function(html, callback){
	if(!html) return callback('deck-import-hearthHead.run().dhh.10: called with no html.');
	
	var deck = {
		hero: hero.name,
		cards: cards
	};

	callback(null, deck);
}
