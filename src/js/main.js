'use strict'

document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.header__burger').addEventListener('click', function (el) {
    el.currentTarget.classList.toggle('open');
    document.querySelector('.header__phone-mob').classList.toggle('open');
    document.querySelector('.header__menu').classList.toggle('open');
    document.querySelector('main').classList.toggle('open');
    document.querySelector('.footer').classList.toggle('open');
  })

  $('.header__logo').click(function () {
    $("html, body").animate({ scrollTop: "0px"});
  })


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

    /*let controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

    let tl = new TimelineMax();

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
      .addTo(controller);*/

  }

  let controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

  let tl = new TimelineMax();

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
    /*effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
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
        slidesPerView: 3
      }
    },
    scrollbar: {
      el: '.cer__nav-scrollbar',
    },
  });

  const follow = new Swiper('.follow__slider', {
    slidesPerView: "2",
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
      768: {
        slidesPerView: 2
      }
    },
  });

  const map = new Swiper('.map__slider', {
    effect: "cube",
    grabCursor: true,
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
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.92213106880769,37.49972250000002],
        zoom: 17
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


  $(function(){
    $("a[href^='#']").click(function() {
      let _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top - 100 +"px"}, 1000);
      return false;
    });
  });





})


