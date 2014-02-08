var _ = require('underscore'),
    hc_repo = require("hearthstone-card-repo");

exports.list = function(deck){
    var startingHand = hc_repo.drawHand(deck),
		nextTen = [];

    for(i = 0; i < 10; i++){
		var turn = hc_repo.drawCard(deck);
		nextTen.push(turn.hand[0]);
		deck = turn.deck;
    }
    
    return { hand: startingHand.hand, nextTen: nextTen };
};