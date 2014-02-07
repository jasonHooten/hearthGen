var _ = require('underscore');

exports.list = function(deck){
    return _.map([0,1,2,3,4,5,6,7,8,9,10], function(attack){
        var items = _.where(deck, { attack: attack });
        var totalCards = _.reduce(items, function(memo, card){ return memo + card.number; }, 0);
        return totalCards;
    });
};