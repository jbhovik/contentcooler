// setup Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var findOrCreate = require('mongoose-findorcreate')

var User = require('./user.js');

// Item schema
var contentSchema = new Schema({
    user: {type: ObjectId, ref: 'users'},
    video: String,
    created: {type: Date, default: Date.now},
});

// ensure schemas use virtual IDs
contentSchema.set('toJSON', {
    virtuals: true
});

// add findorCreate
contentSchema.plugin(findOrCreate);

// create item
var Content = mongoose.model('videos', contentSchema);

module.exports = Content;