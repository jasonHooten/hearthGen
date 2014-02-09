var _ = require('underscore'),
	hc_repo = require("hearthstone-card-repo");

//////////////////////////////////////////////////////////////////////
// Attack

exports.attack = function(deck){
    var attack = _.reduce(deck, function(memo, card){ return card.attack > 0 ? memo + (card.attack * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return card.attack > 0 ? memo + card.number : memo; }, 0);
    return attack/total;
};

exports.attackEff = function(deck){
    var attack = _.reduce(deck, function(memo, card){ return card.attack > 0 ? memo + (card.attack * card.number) : memo; }, 0);
    var totalMana = _.reduce(deck, function(memo, card){ return (card.attack > 0 && card.mana > 0) ? memo + (card.mana * card.number) : memo; }, 0);
    return attack/totalMana;
};

exports.attackEarlyGame = function(deck){
    var attack = _.reduce(deck, function(memo, card){ return card.attack > 0 && card.mana < 4 ? memo + (card.attack * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return card.attack > 0 && card.mana < 4 ? memo + card.number : memo; }, 0);
    return attack/total;
};


exports.attackLateGame = function(deck){
    var attack = _.reduce(deck, function(memo, card){ return card.attack > 0 && card.mana >= 4 ? memo + (card.attack * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return card.attack > 0 && card.mana >= 4 ? memo + card.number : memo; }, 0);
    return attack/total;
};

//////////////////////////////////////////////////////////////////////
// Health

exports.health = function(deck){
    var health = _.reduce(deck, function(memo, card){ return (card.health > 0) ? memo + (card.health * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return (card.health > 0) ? memo + card.number : memo; }, 0);
    return health/total;
};

exports.healthEff = function(deck){
    var health = _.reduce(deck, function(memo, card){ return (card.health > 0) ? memo + (card.health * card.number) : memo; }, 0);
    var totalMana = _.reduce(deck, function(memo, card){ return (card.health > 0 && card.mana > 0) ? memo + (card.mana * card.number) : memo; }, 0);
    return health/totalMana;
};


exports.healthEarlyGame = function(deck){
    var health = _.reduce(deck, function(memo, card){ return (card.health > 0 && card.mana < 4) ? memo + (card.health * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return (card.health > 0 && card.mana < 4) ? memo + card.number : memo; }, 0);
    return health/total;
};


exports.healthLateGame = function(deck){
    var health = _.reduce(deck, function(memo, card){ return (card.health > 0 && card.mana >= 4) ? memo + (card.health * card.number) : memo; }, 0);
    var total = _.reduce(deck, function(memo, card){ return (card.health > 0 && card.mana >= 4) ? memo + card.number : memo; }, 0);
    return health/total;
};

//////////////////////////////////////////////////////////////////////
// Mana

exports.mana = function(deck){
    var mana = _.reduce(deck, function(memo, card){ return (card.mana > 0) ? memo + (card.mana * card.number) : memo; }, 0);
    return mana/30;
};



exports.numSpells = function(deck){
    var spells = hc_repo.getManyByProperty({ type: 'spell' }, deck);
    var totalMana = _.reduce(spells, function(memo, card){ return (card.mana > 0) ? memo + (card.mana * card.number) : memo; }, 0);
    return totalMana/spells.length;
};