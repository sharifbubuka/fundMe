const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  
}, {
  collection: 'tokens',
  minimize: false,
  strict: true,
  useNestedStrict: true,
  timestamps: false
}))