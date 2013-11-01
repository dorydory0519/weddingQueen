function createPhotoModel() {
  var Photo = Backbone.Model.extend({
    idAttribute: '_id',
    url: '/photo'
  });
  return Photo;
}
$(function () {
  window.Photo = createPhotoModel();
  window.PhotoList = Backbone.Collection.extend({
    url: '/photo',
    model: Photo
  });
});