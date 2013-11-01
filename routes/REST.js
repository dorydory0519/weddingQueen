module.exports = function (app, Photo) {
  app.post('/photo', function (req, res) {
    var photo = new Photo({
      text: req.body.text,
      url: req.body.url,
      tag: req.body.tag
    });

    photo.save(function (err, data) {
      if (!err) {
        var result = { status: "ok", _id: data._id };
        return res.send(result);
      }
    });

  });

  app.get('/photo', function (req, res) {
    var filter = req.query.filter;
    if( filter == 'all') {
        Photo.find(function (err, data) {
        if (!err) {
          var result = { status: "ok", _id: data._id, datas: data };
          return res.send(result);
        }
      });     
    } else {
      Photo.find({ tag: filter }, function (err, data) {
        if (!err) {
          var result = { status: "ok", _id: data._id, datas: data };
          return res.send(result);
        }
      });      
    }
  });
}

