function indicateActiveMenu() {
  var menu = $('header.navbar').find('ul.navbar-nav');
  var activeMenu = menu.data('active-menu');
  menu.find('li.menu-' + activeMenu).addClass('active');
}

$(document).ready(function () {
  indicateActiveMenu();
});