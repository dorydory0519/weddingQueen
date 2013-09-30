module.exports = function (app, Photo) {
  app.post('/photo', function (req, res) {
    var photo = new Photo({
      text: req.body.text,
      url: req.body.url,
      tag: req.body.tag
    });

    photo.save(function (err, data) {
      if (!err) {
        //
        // 반환합니다. _id 값 포함되어 있는것입니다. !!!!!!!!!
        //
        var result = { status: "ok", _id: data._id };
        return res.send(result);
      }
    });

  });
}

