var _ = require('underscore'),
	hc_repo = require("hearthstone-card-repo");

exports.attack = function(deck){
    var attack = _.reduce(deck, function(memo, card){ return card.attack > 0 ? memo + (card.attack * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return card.attack > 0 ? memo + card.number : memo; }, 0);
    return attack/total;
};

exports.health = function(deck){
    var health = _.reduce(deck, function(memo, card){ return (card.health > 0) ? memo + (card.health * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return (card.health > 0) ? memo + card.number : memo; }, 0);
    return health/total;
};


exports.mana = function(deck){
    var mana = _.reduce(deck, function(memo, card){ return (card.mana > 0) ? memo + (card.mana * card.number) : memo; }, 0);
    console.log(mana);
    return mana/30;
};