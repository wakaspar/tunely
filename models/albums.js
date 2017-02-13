var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema ({
  title: String,
  artist: String,
  year: Number
});

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;
