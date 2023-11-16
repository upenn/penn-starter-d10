import 'popper.js';
import 'bootstrap';
/*
(function ($) {
  'use strict';


  var searchToggle = $('#searchToggle');
  var searchBar = $('#searchBar');
  $(searchToggle).click(function () {
    $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');
    $(searchBar).attr('aria-hidden', $(searchBar).attr('aria-hidden') === 'true' ? 'false' : 'true').toggleClass('opened');

  });

  // recaptcha a11y fix
  var intervalID = window.setInterval(myCallback, 50);

  function myCallback() {
    var textAreaCheck = document.getElementsByClassName('g-recaptcha-response');
    if (textAreaCheck.length > 0) {
      $(textAreaCheck).attr('aria-labelledby', 'g-recaptcha-response');
      console.log($(textAreaCheck));
      clearInterval(intervalID);
    }
  }

  // apply has-bg class to body when a landing page has a background image
  if ($(".landing-page__field-background-image")[0]) {
    $('body').addClass('has-bg');
  }

  // apply has-alert class to body when an alert is present
  if ($(".bs-site-alert")[0]) {
    $('body').addClass('has-alert');
  }

  // apply has-featured class to body when a featured view mode is present
  if ($(".node--type-listing-page .listing-page__field-featured-content")[0]) {
    $('body').addClass('has-featured');
  }

  var featuredDate = $(".featured-date-wrap").text().split(" ");
  $(".featured-date-wrap").empty();
  $.each(featuredDate, function (i, v) {
    $(".featured-date-wrap").append($("<span>").text(v));
  });
  var featuredFlag = $("<span class='featured-flag'>Featured</span>");
  if ($(".node--type-listing-page .listing-page__field-featured-content")[0]) {
    $('.node--view-mode-featured > .bs-region--right').prepend(featuredFlag);
  }

  // apply external class to all external links
  $('a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
 }).append("<span class='external'><span class='sr-only'>(link is external)</span></span>");


  $('.nav-item.dropdown')
    .mouseover(function () {
      clearTimeout(this.timer)
      $(this).addClass('show');
    })
    .mouseleave(function () {
      this.timer = setTimeout(function () {
        $(this).removeClass('show');
      }.bind(this), 500);
    });

  if ($(".dropdown").hasClass('show')) {
    $('body').addClass('has-alert');
  }

  if ($(".nav-item.dropdown").hasClass('show')) (function () {

    $(this).children('.dropdown-menu').removeAttr('tab-index');
    console.log('hey');


  });


/*
  Drupal.behaviors.mobileNav = {
    attach: function (context, settings) {
      $('body').once('event-bindings').each(function () {

        function breakPointMods(x) {
          if (breakpoint_mobile.matches) { // If media query matches
            // Close menu on ESC
            $(document).keyup(function (e) {
              if (e.keyCode == 27) { // escape key maps to keycode `27`
                $('.navbar-collapse').removeClass('show');
                $('button.navbar-toggler').attr('aria-expanded', 'false');
              }
            });
            // Close all navs when focus has left the menu
            $('.navbar-collapse').focusout(function (e) {
              $(this).removeClass('show');
            });



            var breakpoint_mobile = window.matchMedia("(max-width: 991px)")
            breakPointMods(breakpoint_mobile) // Call listener function at run time
            breakpoint_mobile.addListener(breakPointMods) // Attach listener function on state changes
          }
          
        }

        

      });


    }
  };*/



/*

})(jQuery, Drupal);
*/

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mobileNavs = {
    attach: function (context, settings) {
      $(once('event-bindings', 'body', context)).each(function () {

        // Add mobileBreakpoint class to body so contained keyboard focus on menu only triggers when mobile menu is present
        var handleMatchMedia = function (mediaQuery) {
          if (mediaQuery.matches) {
            $("body").addClass("mobileBreakpoint");
          } else {
            $("body").removeClass("mobileBreakpoint");
          }
        },

          mql = window.matchMedia('all and (max-width: 991px)');

        handleMatchMedia(mql);
        mql.addListener(handleMatchMedia);

        var searchToggle = $('#searchToggle');
        var searchBar = $('#searchBar');
        $(searchToggle).click(function () {
          $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');
          $(searchBar).attr('aria-hidden', $(searchBar).attr('aria-hidden') === 'true' ? 'false' : 'true').toggleClass('opened');



          // Close all navs when focus has left the menu


        });


      });
    }
  }

  $('body').on('keydown', function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('.mobileBreakpoint .navbar .navbar-collapse').removeClass('show');
      $('.mobileBreakpoint .navbar-toggler').attr('aria-expanded', 'false');
      $(searchToggle).attr('aria-expanded', 'false');
      $(searchBar).attr('aria-hidden', 'true').removeClass('opened');
    }
  });

  Drupal.behaviors.pageMods = {
    attach: function (context, settings) {
      $(once('page-load', 'body', context)).each(function () {



      // recaptcha a11y fix
      var intervalID = window.setInterval(myCallback, 50);

      function myCallback() {
        var textAreaCheck = document.getElementsByClassName('g-recaptcha-response');
        if (textAreaCheck.length > 0) {
          $(textAreaCheck).attr('aria-labelledby', 'g-recaptcha-response');
          console.log($(textAreaCheck));
          clearInterval(intervalID);
        }
      }

      // apply has-bg class to body when a landing page has a background image
      if ($(".landing-page__field-background-image")[0]) {
        $('body').addClass('has-bg');
      }

      // apply has-alert class to body when an alert is present
      if ($(".bs-site-alert")[0]) {
        $('body').addClass('has-alert');
      }

      // apply has-featured class to body when a featured view mode is present
      if ($(".node--type-listing-page .listing-page__field-featured-content")[0]) {
        $('body').addClass('has-featured');
      }

      // featured date
      var featuredDate = $(".featured-date-wrap").text().split(" ");
      $(".featured-date-wrap").empty();
      $.each(featuredDate, function (i, v) {
        $(".featured-date-wrap").append($("<span>").text(v));
      });
      var featuredFlag = $("<span class='featured-flag'>Featured</span>");
      if ($(".node--type-listing-page .listing-page__field-featured-content")[0]) {
        $('.node--view-mode-featured > .bs-region--right').prepend(featuredFlag);
      }

      // apply external class to all external links
      $('a').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
      }).append("<span class='external'><span class='sr-only'>(link is external)</span></span>");

      // apply labels on search page
      if (window.location.href.indexOf("/search") > -1) {
        $('#search-block-form > .form-item').prepend("<label class='sr-only' for='edit-keys--2'>Search the site:</label>");
      } else {
        $('#search-block-form > .form-item').prepend("<label class='sr-only' for='edit-keys'>Search the site:</label>")
      }
    });
  }


  };
})(jQuery, Drupal, drupalSettings);