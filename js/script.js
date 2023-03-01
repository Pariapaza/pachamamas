// Swiper js
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     // grabCursor:true,
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

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 6000,
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

// Nav open close
const body = document.querySelector('body'),
     navMenu = body.querySelector('.menu-content'),
     navOpenBtn = body.querySelector('.navOpen-btn'),
     navCloseBtn = navMenu.querySelector('.navClose-btn');
     
if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click",()=>{
        navMenu.classList.add("open");
        body.style.overflowY = "hidden"
    })
}
if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click",()=>{
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll"
    })
}
// Change header bg color


// Scroll up button
  
  
  
// Nav link indicator
 
  
// Scroll Reveal Animation
  