var request = require('request'),
    _ = require('underscore'),
    hc_repo = require("hearthstone-card-repo");


/*
 * Set included services
 */
var _webServicesNames = ['hearthhead', 'hearthpwn'];
var services =  _.map(_webServicesNames, function(name) {
    return require('./deck-import-' + name);
});


exports.load = function(cardNames, callback){
    var deck = _.map(cardNames, function(cardName){
        var card = hc_repo.getByName(cardName.name);
        _.extend(card, { number: cardName.number });
        _.extend(card, { url: hc_repo.getLink(card) });
        return card;
    });

    callback(null, hc_repo.sortByQuality(deck));
};



/*
 * @param: url
 * @return: array of card names
 */
exports.import = function(url, callback){
    if(!url) return callback('deck-import.import().di.19: called with no url.');
    
    var service = getService(url);
    if(!service) return callback('deck-import.import().di.22: no service availible.');
    
    request(url, function(error, response, body) {
        if(error) return callback('deck-import.import().di.25: ' + error);
        if (response.statusCode !== 200) return callback('deck-import.import().di.26: no response from server');
        
        service.run(body, callback);
    });
};


getService = exports.getService = function(url){
    if(!url) return null;

    var service = _.find(services, function(item){
        return item.check(url);
    });

    return service;
};





 