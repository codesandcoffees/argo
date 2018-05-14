(function ($) {
  "use strict";

  $(document).ready(function () {
    // Begin Testimonial Slider
    $("#testimonial-carousel").owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,
      pagination: true,
      singleItem: true
    });
    // End Testimonial Slider

    // Begin Navigation Slider
    var imgUrls = {};
    imgUrls['first-nav'] = 'images/pic04-01.jpg';
    imgUrls['second-nav'] = 'images/pic04.jpg';

    $('#nav-text-carousel').owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,
      singleItem: true,
      afterMove: function (elem) {
        var current = this.currentItem;
        var src =  elem.find('.owl-item').eq(current).find('div').attr('id');
        $('#two').css('background-image', 'url(' + imgUrls[src] + ')');
      }
    });
    // End Navigational Slider
  });


})(jQuery);
