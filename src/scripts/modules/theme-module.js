AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    var swiperBanner = new Swiper('.swiper-banner .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiperTestimonials = new Swiper('.swiper-testimonials .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
