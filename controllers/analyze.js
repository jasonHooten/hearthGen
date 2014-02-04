var deckImport = require('../services/deck-import'),
	_ = require('underscore');


/**
 * GET /
 */
exports.getIndex = function(req, res) {
	req.assert('u', 'Name cannot be blank').notEmpty();
	var url = req.query.u;

	deckImport.import(url, function(err, deck){
		if(err) analysisError(err, res);
		if(!err){
			res.render('analyze/index', {
		    	title: 'Analyze',
		    	cards: deck.cards,
		    	hero:  deck.hero,
		    	_: _
		  	});
		}
	});
	
};


exports.postIndex = function(req, res) {
	req.assert('url', 'Name cannot be blank').notEmpty();

	var errors = req.validationErrors(true);
	if (errors) {
		console.log(errors);
		res.redirect('/');
	    // What do to if there are errors?
	}
  	res.redirect('/analyze?u=' + req.body.url);
};


analysisError = function(err, res) {
	res.render('error', {
    	title: 'Error',
    	error:  err
	});
}


