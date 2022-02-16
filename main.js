$(function () {


  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    });
  }

  $(document).ready(function () {
    aos_init();
  });


  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });


  /** * Easy selector helper function */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /** * Hero type effect  */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


  // ---------- Testimonial swiper --------------
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  // ------ Navigation active state on scroll -------------
  var nav_sections = $('section');
  var main_nav = $('.nav-menu');

  $(window).on('scroll', function () {
    var current_pos = $(this).scrollTop() + 150;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight() - 40;

      if (current_pos >= top && current_pos <= bottom) {
        if (current_pos <= bottom) {
          main_nav.find("li").removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        $(".mobile-icon").removeClass('is-active');
        $('.nav-menu').removeClass('active');
      }
      if (current_pos == 40) {
        $('html, body').scrollTop(0);
        $(".nav-menu li:first").addClass('active');
      }

    });
  });


  // ------ mobile menu button ---------
  $('.mobile-icon').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.nav-menu').toggleClass('active');
  });



  // ------- Stick menubar on top ------------ 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });




  $('.simple-ajax-popup-align-top').magnificPopup({
    type: 'ajax',
    alignTop: true,
    mainClass: 'mfp-fade',
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
  });


});