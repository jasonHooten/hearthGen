var request = require('request'),
    _ = require('underscore');


/*
 * Set included services
 */
var _webServicesNames = ['hearthhead'];
var services =  _.map(_webServicesNames, function(name) {
    return require('./deck-import-' + name);
});


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
} 


getService = exports.getService = function(url){
    if(!url) return null;

    var service = _.find(services, function(item){
        return item.check(url);
    });

    return service;
} 





 