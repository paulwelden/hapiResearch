/**
 * Created by paulw on 1/27/15.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ticketSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        trim: true
    },
    body: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Ticket', ticketSchema);

module.exports =  mongoose.model('Ticket');