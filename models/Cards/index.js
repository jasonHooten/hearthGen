var repo = require('hearthstone-card-repo'),
    _ = require('underscore');

/* Exmpale of a card
   {
      "id":8,
      "name":"Mind Control",
      "description":"Take control of an enemy minion.",
      "image":"http:\/\/wow.zamimg.com\/images\/hearthstone\/cards\/enus\/medium\/CS1_113.png",
      "class":"priest",
      "type":"spell",
      "quality":"common",
      "race":"none",
      "set":"basic",
      "mana":10,
      "attack":null,
      "health":null,
      "collectible":true,
      "effect_list":[

      ]
   },
*/



// will be extending this will my own properties for cards in the near future
module.exports = _.memoize(function(){
    return repo.cards;
});