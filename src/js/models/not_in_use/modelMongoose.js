// Connection to DB 'OTL React'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/otl-react');

// Notification if connected to db
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

// Schema for DB
var otlReactSchema = mongoose.Schema({
    id: ObjectId,
    "shortList": String,
    "no": Number,
    "summary": String,
    "description": String,
    "option": String,
    "component": String,
    "category": String,
    "prio": String,
    "responsive": String,
    "state": String,
    "costModel": String,
    "affectsVersion": String,
    "issueTicket": String,
    "ticketText": String,
    "notes": String,
    "inSprint": String,
    "updatedAt": { type: Date, default: Date.now },
    "client": String
});

// Creating a model
var OtlReactModel = mongoose.model('OtlReactModel', otlReactSchema);