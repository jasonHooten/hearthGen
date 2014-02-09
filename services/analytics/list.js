var _ = require('underscore'),
	hc_repo = require("hearthstone-card-repo");

exports.attack = function(deck){
    return _.map([0,1,2,3,4,5,6,7,8,9,10], function(attack){
        var items = _.where(deck, { attack: attack });
        var totalCards = _.reduce(items, function(memo, card){ return memo + card.number; }, 0);
        return totalCards;
    });
};

exports.health = function(deck){
    return _.map([0,1,2,3,4,5,6,7,8,9,10], function(health){
        var items = _.where(deck, { health: health });
        var totalCards = _.reduce(items, function(memo, card){ return memo + card.number; }, 0);
        return totalCards;
    });
};


exports.mana = function(deck){
    return _.map([0,1,2,3,4,5,6,7,8,9,10], function(cost){
        var items = _.where(deck, { mana: cost });
        var totalCards = _.reduce(items, function(memo, card){ return memo + card.number; }, 0);
        
        return totalCards;
    });
};


exports.spell = function(deck){
    return _.map([0,1,2,3,4,5,6,7,8,9,10], function(cost){
        var items = _.where(deck, { type: 'spell', mana: cost });
        return items.length;
    });
};


exports.cardType = function(deck){
    var minions = hc_repo.getManyByProperty({ type: 'minion' }, deck),
		spells = hc_repo.getManyByProperty({ type: 'spell' }, deck);
    return { minion: minions.length, spell: spells.length };
};