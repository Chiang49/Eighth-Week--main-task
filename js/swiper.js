//首頁卡片輪播
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,//原來是30
    slidesPerGroup: 1,
    //斷點設置
    breakpoints:{
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //店家頁面照片輪播
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 8,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    thumbs: {
      swiper: galleryThumbs,
    },
  });