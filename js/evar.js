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
