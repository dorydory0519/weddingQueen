module.exports = function (app, Photo) {
  // home page

  app.get('/', function (req, res) {
    Photo.find(function (err, photos) {
      if (!err) {
        res.render('index', {
          title: 'Home Page.  ',
          activeMenu: 'home',
          photos: photos
        });
      } else {
        console.log("Mongoose : collection \'Photo\' select failure");
      }
    });
  });
  // nexus page
  app.get('/weddinglist', function (req, res) {
    res.render('weddinglist/weddinglist', {
      activeMenu: 'wedding-list'
    });
  });

  // photo posting page
  app.get('/photo/new', function (req, res) {
    res.render('posting/posting', {
      activeMenu: 'posting-photo'
    })
  });

  app.get('/about', function (req, res) {
    res.render('about', { title: 'About Me.  ' })
  });
}
