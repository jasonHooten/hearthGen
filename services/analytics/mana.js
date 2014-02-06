var _ = require('underscore');

exports.cost = function(deck){
    return _.map([0,1,2,3,4,5,6,7,8,9,10], function(cost){
        var items = _.where(deck, { mana: cost });
        var totalCards = _.reduce(items, function(memo, card){ return memo + card.number; }, 0);
        
        return totalCards;
    });
};