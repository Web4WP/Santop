'use strict'

document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.header__burger').addEventListener('click', function (el) {
    el.currentTarget.classList.toggle('open');
    document.querySelector('.header__phone-mob').classList.toggle('open');
    document.querySelector('.header__menu').classList.toggle('open');
    document.querySelector('main').classList.toggle('open');
    document.querySelector('.footer').classList.toggle('open');
  })

  document.querySelectorAll('.header__menu a').forEach(function (e) {
    e.addEventListener('click', function (t) {
      document.querySelector('main').classList.toggle('open');
    })
  })


    let button = $('.up');
    $(window).scroll (function () {
      if ($(this).scrollTop () > 300) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });

    button.on('click', function(){
      $('body, html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });



  /*$('#exampleModal').on('show.bs.modal', function(e) {
    $("body").css({
      "overflow": "hidden"
    })
  });
  $('#exampleModal').on('hide.bs.modal', function(e) {
    $("body").css({
      "overflow": "auto"
    })
  });*/

  /*$('#exampleModal').on('shown.bs.modal', function () {

  })*/

  /*document.querySelectorAll('.follow__slider-item-img').forEach(function (e) {
    e.addEventListener('click', function (el) {
      el.target.classList.add('hidden');
      document.querySelectorAll('.follow__slider-item-link iframe').forEach(function (elt) {
        elt.classList.add('visible');
      })
    })
  })*/


  $('.header__logo').click(function () {
    $("html, body").animate({ scrollTop: "0px"});
  })

  $('.header__menu ul li a').click(function () {
    $('.header__burger').toggleClass('open');
    $('.header__menu').toggleClass('open');
  })

  /*document.querySelector('.follow__slider-item-link').addEventListener('click', function (e) {
    e.target.preventDefault();
    document.querySelector('.follow__slider-item-link iframe').classList.add('visible');
  })*/





  const partner = new Swiper('.partner__carousel', {
    navigation: {
      nextEl: '.partner__carousel-btn_next',
      prevEl: '.partner__carousel-btn_prev',
    },
    scrollbar: {
      el: '.partner__carousel-scrollbar',
    },
  });

  if($(window).width() < 1023) {


    const galleryFirst = new Swiper('.gallery__slider', {
      effect: "cube",
      grabCursor: true,
      autoHeight: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      /*autoplay: {
        delay: 5000,
      },*/
      navigation: {
        nextEl: '.gallery__slider-btn_next',
        prevEl: '.gallery__slider-btn_prev',
      },
      scrollbar: {
        el: '.gallery__slider-scrollbar',
      },
    });

  }

  if($(window).width() > 1023) {

    let controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});
    let tl33 = new TimelineMax();
    //tl33.from($('.banner__text'), 1, { autoAlpha: 0, y: '+=50', x: '0', ease:Linear.easeNone });
    //-tl33.from($('.banner__logo'), 1, { x: -50 });

    new ScrollMagic.Scene({
      triggerElement: ".banner__text",
      triggerHook: 0.7,
      duration: "70%",
      offset: 0,
    })
      .setTween(tl33)

      .addTo(controller);

  }



  let controller = new ScrollMagic.Controller({ globalSceneOptions: {duration: 500}} );

  $('.partner__item-img').each(function() {

    // build a tween
    let tween = TweenMax.from($(this), 0.3, { transform: 'scale(0)' });

    // build a scene
    let scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      offset: -200,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);

  });

  let tl = new TimelineMax();

  /* Gallery */
  let gallery = new TimelineMax();


  new ScrollMagic.Scene({
    triggerElement: "#gallery",
    duration: "10%",
    triggerHook: 0.7
  }).setTween(gallery).addTo(controller);


// loop through all elements
  $('.gallery__left-img').each(function() {

    // build a tween
    let tween = TweenMax.from($(this), 0.3, { autoAlpha: 0, y: '+=200', x: '0', ease:Linear.easeNone });

    // build a scene
    let scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      offset: 0,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);

  });

  $('.gallery__right-img').each(function() {

    let tween = TweenMax.from($(this), 0.7, { autoAlpha: 0, y: '+=200', x: '0', ease:Linear.easeNone });

    let scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      offset: 0,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);

  });

  /*new ScrollMagic.Scene({
    triggerElement: "#gallery",
    duration: "60%",
    triggerHook: 0.5
  })
    .setTween(gallery)
    .addTo(controller);*/

  tl.to($('.expo__right-img'), 0, { transform: 'scale(1)'}).from($('.expo__right-img'), 1, { transform: 'scale(0)' });


  new ScrollMagic.Scene({
    triggerElement: ".expo",
    duration: "70%",
    triggerHook: 0.7
  })
    .setTween(tl)
    .addTo(controller);

  let tl2 = new TimelineMax();

  tl2.to($('.expo__left-img'), 0, { transform: 'scale(1)'}).from($('.expo__left-img'), 1, { transform: 'scale(0)' });

  new ScrollMagic.Scene({
    triggerElement: ".expo__meter",
    duration: "70%",
    triggerHook: 0.6
  })
    .setTween(tl2)
    .addTo(controller);

  let tl3 = new TimelineMax();

  tl3.to($('.expo__left'), 0, { transform: 'translateX(0px)'}).from($('.expo__left'), 1, { transform: 'translateX(100px)' });

  new ScrollMagic.Scene({
    triggerElement: "#expo",
    duration: "70%",
    triggerHook: 0.6
  })
    .setTween(tl3)
    .addTo(controller);

  let tl4 = new TimelineMax();

  tl4.to($('.expo__title'), 0, { transform: 'scale(1)'}).from($('.expo__title'), 1, { transform: 'scale(0)' });




  new ScrollMagic.Scene({
    triggerElement: "#expo",
    duration: "80%",
    triggerHook: 1.25
  })
    .setTween(tl4)
    .addTo(controller);



  const cer = new Swiper('.cer__slider', {
    /*autoplay: {
      delay: 5000,
    },*/
    slidesPerView: "3",
    spaceBetween: 30,
    navigation: {
      nextEl: '.cer__nav-btn_next',
      prevEl: '.cer__nav-btn_prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    },
    scrollbar: {
      el: '.cer__nav-scrollbar',
    },
  });

  const follow = new Swiper('.follow__slider', {
    slidesPerView: "2",
    /*autoplay: {
      delay: 5000,
    },*/
    navigation: {
      nextEl: '.follow__nav-btn_next',
      prevEl: '.follow__nav-btn_prev',
    },
    scrollbar: {
      el: '.follow__nav-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      /*768: {
        slidesPerView: 2
      },*/
      1024: {
        slidesPerView: 2
      },
      1280: {
        spaceBetween: 30
      }
    },
  });

  /*const map = new Swiper('.map__slider', {
    effect: "cube",
    grabCursor: true,
    observer: true,
    observeParents: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    navigation: {
      nextEl: '.map__nav-btn_next',
      prevEl: '.map__nav-btn_prev',
    },
    scrollbar: {
      el: '.map__scrollbar',
    },
  });*/

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.92213106880769,37.49972250000002],
        zoom: 12
      }, {
        searchControlProvider: 'yandex#search'
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemarkWithContent = new ymaps.Placemark([55.92213106880769,37.49972250000002], {
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '../img/content/pin.png',
        iconImageSize: [43, 61],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
      });

    myMap.geoObjects
      .add(myPlacemarkWithContent);
  });


  $(function() {
    $("a[href^='#']").click(function() {
      let _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top - 100 +"px"}, 1000);
      return false;
    });
  });


  $('#exampleModal').on('shown.bs.modal', function () {

  })








})


