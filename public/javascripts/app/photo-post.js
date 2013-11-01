function initPhotoPostForm( photo ) {
  var form = $('form#photo-post-form');
  $('input[type="submit"]').on('click', function () {
    photo.save({
      text  : form.find('input[name="text"]').val(),
      url   : form.find('input[name="url"]').val(),
      tag   : form.find('select[name="tag"]').val()
    });
    return false;
  });

  photo.on('sync', function () {
    console.log(photo, photo.id);
  });
}

$(function () {
  var photo = new Photo;
  initPhotoPostForm(photo);
});
