var deckImport = require('../services/deck-import'),
	_ = require('underscore'),
	listService = require("./../services/analytics/list"),
	averagesService = require("./../services/analytics/averages"),
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
					//add underscore to the views
					_: _,
					//single numbers
					manaAverage: averagesService.mana(deck).toFixed(1),
					numSpells: averagesService.numSpells(deck).toFixed(1),

					attackAverage: averagesService.attack(deck).toFixed(1),
					attackEarlyGame: averagesService.attackEarlyGame(deck).toFixed(1),
					attackLateGame: averagesService.attackLateGame(deck).toFixed(1),
					attackEff: averagesService.attackEff(deck).toFixed(1),

					healthAverage: averagesService.health(deck).toFixed(1),
					healthEarlyGame: averagesService.healthEarlyGame(deck).toFixed(1),
					healthLateGame: averagesService.healthLateGame(deck).toFixed(1),
					healthEff: averagesService.healthEff(deck).toFixed(1),
					//lists for line graphs
					manaList: listService.mana(deck),
					attackList: listService.attack(deck),
					healthList: listService.health(deck),
					spellList: listService.spell(deck),
					cardTypeList: listService.cardType(deck),

					//starting hand
					startingHand: startingHandService.list(deck),
					cards: deck,
					hero:  cardNames.hero,
					
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


