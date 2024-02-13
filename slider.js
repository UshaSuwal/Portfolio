var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 30,
    
    loop: true,
    fade: true,
    loopFillGroupWithBlank: true,
    grabCursor:'true',
    keyboard:'true',

    pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        786:{
            slidesPerView: 2,
        },
    }
  });



  
//   var swiper = new Swiper(".slide-content", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });