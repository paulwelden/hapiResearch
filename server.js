/**
 * Created by paulw on 1/27/15.
 */
var Hapi = require('hapi'),
    TicketRoutes = require('./packages/tickets/routes/tickets.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test'); //move into a configuration setup


var server = new Hapi.Server();
server.connection({ port: 3000 });

//configure api routes
TicketRoutes.Configure(server);

server.start(function (){
   console.log('Server running at:', server.info.uri);
});

