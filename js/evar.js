$(document).ready(function() {
  $('.tabs').on('click', '.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var tabs = $(this).closest('.tabs');
      var tabLink = $(this).find('a');

      tabs.find('.is-active').removeClass('is-active');
      tabs.find('.is-open').removeClass('is-open');
      tabs.find(tabLink.data('target')).addClass('is-open');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

$(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  $('.hero-device').on('click', 'a', function(event) {
    event.preventDefault();
    var video = document.getElementById('evar-video-element');
    video.currentTime = 0;
    video.play();

    if (!$('html').hasClass('shaded')) {
      $('html').addClass('shaded');
    }

    $('.media-viewer.visible').removeClass('visible');
    $('#evar-video-viewer').addClass('visible');
  });
});

$(document).ready(function() {
  $('#view-use-cases').click(function(event) {
    event.preventDefault();
    if (!$('html').hasClass('shaded')) {
      $('html').addClass('shaded');
    }

    $('.media-viewer.visible').removeClass('visible');
    $('#evar-use-cases-viewer').addClass('visible');
  });
});

$(document).ready(function() {
  $('.media-viewer').on('click', '.close', function(event) {
    $('html').removeClass('shaded');
    $('.media-viewer.visible').removeClass('visible');

    if ($(this).closest('.media-viewer').attr('id') === 'evar-video-viewer') {
      var video = document.getElementById('evar-video-element');
      video.pause();
    }
  });
});

$(document).ready(function() {
  $('#media-viewer-controller-left').on('click', function(event) {
    event.preventDefault();

    var currentFigure = $('#evar-use-cases-viewer').find('figure:visible');
    var nextFigure = currentFigure.prev('figure');

    currentFigure.hide();

    if (nextFigure.length) {
      nextFigure.show();
    } else {
      $('#evar-use-cases-viewer').find('figure').last().show();
    }
  });

  $('#media-viewer-controller-right').on('click', function(event) {
    event.preventDefault();

    var currentFigure = $('#evar-use-cases-viewer').find('figure:visible');
    var nextFigure = currentFigure.next('figure');

    currentFigure.hide();

    if (nextFigure.length) {
      nextFigure.show();
    } else {
      $('#evar-use-cases-viewer').find('figure').first().show();
    }
  });
});
