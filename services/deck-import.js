var request = require('request'),
    _ = require('underscore'),
    hearthhead = require('./deck-import-hearthhead');

var services = [];

/*
 * @param: url
 * @return: array of card names
 */
module.exports.import = function(url, callback){

    var service = _.find(services, function(item){
    	return item.check(url);
    });

    request(url, function(error, response, body) {
        if(error) callback(error);
        if (response.statusCode !== 200) callback('no response from server');
        hearthhead.run(body, callback);
    });
} 



/*
 * Set included services
 */
_webServicesNames = ['hearthhead'];
/*
 * Include the services
 */
_webServicesNames.forEach(function(mod) {
    _.extend(services, require('./deck-import-' + mod));
});
 