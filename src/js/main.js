'use strict'

document.addEventListener('DOMContentLoaded', function () {

  const partner = new Swiper('.partner__carousel', {
    navigation: {
      nextEl: '.partner__carousel-btn_next',
      prevEl: '.partner__carousel-btn_prev',
    },
    scrollbar: {
      el: '.partner__carousel-scrollbar',
    },
  });

  const cer = new Swiper('.cer__slider', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    slidesPerView: "3",
    spaceBetween: 30,
    navigation: {
      nextEl: '.cer__nav-btn_next',
      prevEl: '.cer__nav-btn_prev',
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

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),


      myPlacemarkWithContent = new ymaps.Placemark([55.92213106880769,37.49972250000002], {

      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '../img/content/pin.png',
        // Размеры метки.
        iconImageSize: [43, 61],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      });

    myMap.geoObjects
      .add(myPlacemarkWithContent);
  });

  /* Плавный скролл до якоря */
  $(function(){
    $("a[href^='#']").click(function() {
      let _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top - 100 +"px"}, 1000);
      return false;
    });
  });



})


