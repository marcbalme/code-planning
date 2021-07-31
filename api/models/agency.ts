export {};

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const agencySchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }
  },
  { timestamps: { createdAt: 'created_at' } }
);

agencySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Agency', agencySchema);
