// controllers/albumsController.js
// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
  db.Album.find({}, function(err, allAlbums){
    if(err){ console.log(err) }
    res.send(allAlbums);
  });
}

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
  db.Album.create(req.body, function(err, createdAlbum){
    if (err){ console.log(err)}
    res.send(createdAlbum);
  });
}


// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
  var albumId = req.params.id;
  db.Album.findOne({_id: albumId}, function(err, foundAlbum){
    if(err){console.log(err)}
    res.send(foundAlbum);
  });
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
  var albumId = req.params.id;
  db.Album.delete({_id: albumId}, function(err, deletedAlbum){
    if(err){console.log(err)}
    res.send(deletedAlbum);
  });
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
  var albumId = req.params.id;
  var albumTitle = req.body.title;
  var albumArtist = req.body.artist;
  var albumYear = req.body.year;
  db.Park.findByIdAndUpdate({ _id: albumId }, {
    title: albumTitle,
    location: locUp,
    artist: albumArtist,
    year: albumYear
  },
   {new: true}, function(err, updatedAlbum){
    if(err){console.log('error: ', err)}
    res.send(updatedAlbum);
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
