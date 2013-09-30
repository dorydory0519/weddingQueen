module.exports = function (app) {
  // home page

  app.get('/', function (req, res) {
    res.render('index', {
      title: 'Home Page.  ',
      activeMenu: 'home'
    })
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
