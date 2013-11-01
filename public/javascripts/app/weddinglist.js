function initCategoryTooltip() {
  $('li.wg-category-icon').each(function () {
    var list = $(this);
    $(this).tooltip({
      title: list.find('img').attr('alt')
      //placement: 'bottom'
    });
  });
}

function initCategory() {
  $('li.wg-category-icon').each(function () {
    $(this).on('click', function () {
      $('#categorized-photos').html('');
      $('#categorized-photos').gridalicious();
      var category = $(this).find('img').attr('alt');
      var photos = new PhotoList;
      photos.fetch({
        data: $.param({
          filter: category.toLowerCase()
        })
      });

      photos.on('sync', function () {
        var datas = photos.toJSON();
        var photo_view = new photoView({
          el: $("#categorized-photos"),
          data: datas
        });
        photo_view.render();
      });

    });
  });
}


function initPhotoView () {
  window.photoView = Backbone.View.extend({
    initialize: function () {
      //this.render();
    },
    render: function () {
      //this.$el.html('');
      for (var i = 0; i < this.options.data[0].datas.length; i++) {
        var template = _.template($('#category-photo-template').html(), {
          photo: this.options.data[0].datas[i]
        });
        $('#categorized-photos').gridalicious('append', $(template));
        //this.$el.append(template);
      }
      
    }
  });  
}

$(function () {
  initPhotoView();
  initCategoryTooltip();
  initCategory();  
});
