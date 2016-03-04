'use strict';

var auth = require('../../users/controllers/auth.controller');
module.exports = function(api) {
    var breweries = require('../controllers/breweries.controller');

    api.use(auth.validateToken);

    api.route('/breweries')
//        .all(auth.validateToken)
        .get(breweries.findAll)
        .post(breweries.create);
        
    api.route('/breweries/:breweryId')
//        .all(auth.validateToken)
        .get(breweries.find)
        .put(breweries.update)
        .delete(breweries.delete);
        
    api.param('breweryId', breweries.breweryById);
}