var deckImport = require('../services/deck-import'),
	_ = require('underscore'),
	manaService = require("./../services/analytics/mana"),
	attackService = require("./../services/analytics/attack"),
	healthService = require("./../services/analytics/health"),
	startingHandService = require("./../services/analytics/startingHand");


/**
 * GET /
 */
exports.getIndex = function(req, res) {
	req.assert('u', 'Name cannot be blank').notEmpty();
	var url = req.query.u;

	deckImport.import(url, function(err, cardNames){
		if(err) analysisError(err, res);
		deckImport.load(cardNames.cards, function(err, deck){
			if(err) analysisError(err, res);
			if(!err){
				res.render('analyze/index', {
					title: 'Analyze',
					manaList: manaService.list(deck),
					attackList: attackService.list(deck),
					healthList: healthService.list(deck),
					startingHand: startingHandService.list(deck),
					cards: deck,
					hero:  cardNames.hero,
					_: _
				});
			}
		});
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
};


