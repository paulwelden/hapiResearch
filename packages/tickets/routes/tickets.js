/**
 * Created by paulw on 1/27/15.
 */
var Ticket = require('../models/ticket.js'),
    Joi = require('joi');



function Configure(hapiServer) {

    hapiServer.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            Ticket.find().exec(function (arr, data) {
             reply(data);
            });

        }
    });

    hapiServer.route({
        method: 'GET',
        path: '/{id}',
        handler: function (request, reply) {
            reply('Your Guid: ' + encodeURIComponent(request.params.name) + '!');
        },
        config: {
            validate: {
                params: {
                    id: Joi.string().guid()
                }
            }
        }
    });
}



module.exports = {

    Configure : Configure

};
