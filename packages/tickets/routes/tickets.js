/**
 * Created by paulw on 1/27/15.
 */
var Ticket = require('../models/ticket.js'),
    Joi = require('joi');

Joi.objectId = require('joi-objectid'); //extend Joi for simplicity;



function Configure(hapiServer) {
    var pathRoot = '/ticket';

    hapiServer.route({
        method: 'GET',
        path: pathRoot,
        handler: function (request, reply) {
            Ticket.find().exec(function (arr, data) {
             reply(data);
            });

        }
    });

    hapiServer.route({
        method: 'GET',
        path: pathRoot + '/{id}',
        handler: function (request, reply) {
            Ticket.findById(request.params.id, function (err, data) {
                if(err || !data){
                    reply('Ticket not found.').code(404);
                }
                else
                {
                    reply(data);
                }
            });

        },
        config: {
            validate: {
                params: {
                    id: Joi.objectId()
                }
            }
        }
    });



}

function SeedDB(){
    Ticket.remove().exec();

    var initialTicket = new Ticket(
        {
            title: 'first ticket',
            desc: 'this is my first ticket',
            body: 'yo dawg'
        }
    );

    initialTicket.save(function (err) {
        if (err) // ...
            console.log('ticket seeding has failed');
        else
            console.log('seeding is now complete');

    });
}



module.exports = {

    Configure : Configure,
    SeedDB : SeedDB

};
