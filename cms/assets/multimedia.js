/* global $:false */

'use strict';

$(function () {
  var $el = $('.video > iframe');
  var video = $el.attr('src');

  if ($el.length) {
    $el.attr('src', '');
    $('.video-link').click(function (e) {
      e.preventDefault();
      $('.video-link').css('z-index', '0');
      $('.video').css({ 'display': 'block', 'z-index': '100' });
      $el.prop('src', video + '?autoplay=true');
    });
  } else {
    //$('.fancybox').fancybox();
  }
});
