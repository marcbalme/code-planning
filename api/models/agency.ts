export {};

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const agencySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

agencySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Agency', agencySchema);
