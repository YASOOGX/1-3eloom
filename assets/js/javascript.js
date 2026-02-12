// start basic 
// // //////load
document.getElementsByTagName('body')[0].classList.add('loaderlodging__body');
window.onload = function() {
    document.getElementsByClassName('loaderlodging')[0].classList.add('remove');
    document.getElementsByClassName('loaderlodging__body')[0].classList.add('afterloading');
}
// head.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };
// window.onscroll = function () {
//   if (scrollY >= 650) {
//     header.classList.add("header-fixed");
//   } else {

//     header.classList.remove("header-fixed");
//   }
// };
// let Pop_btn = document.querySelectorAll(".pop-btn");
// let Pop_img = document.querySelectorAll(".pop-img");
// let Pop_vid = document.querySelectorAll(".vid");

// Pop_btn.forEach((item, index) => {
//   item.onclick = () => {
//     Pop_img.forEach((item2, index2) => {
//       if (index == index2) {
//         item2.classList.add("flex");
//       }
//       item2.onclick = () => {
//         item2.classList.remove("flex");
//       };
//     });
//   };
// });
// end basic 

let header = document.querySelector("header .head");
let end = document.querySelector(".end")

window.onscroll = function () {
    if (scrollY >= 300) {
        header.classList.add("header-fixed");
        end.classList.add("d-block");
    } else {
        header.classList.remove("header-fixed");
        end.classList.remove("d-block");
    }
};
// end.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//     });
// };

let collapse = document.querySelectorAll(".help .row .col")
let collapse_rotate = document.querySelectorAll(".help .row .change")
let collapse_btn = document.querySelectorAll(".help .blus-open-info")

collapse.forEach((ele,ind)=>{
    ele.onclick=()=>{
        collapse_rotate.forEach((ele2,ind2)=>{
            if(ind==ind2){
                ele2.classList.toggle("rotate")
            }
            else{

            }
        })
        collapse_btn.forEach((ele2,ind2)=>{
            if(ind==ind2){
                ele2.classList.toggle("bg-prime")
            }
            else{
                
            }
        })
    }
})

let bars = document.querySelector(".bars")
let phone = document.querySelector(".phone")
let phone_slide = document.querySelector(".phone-slide")
let closes = document.querySelector(".closes")

bars.onclick = () => {
    phone.classList.add("flex")
    setTimeout(() => {
        phone_slide.classList.add("left-0")
    }, 100);
}
closes.onclick = () => {
    setTimeout(() => {
        phone.classList.remove("flex")
    }, 1000);
    phone_slide.classList.remove("left-0")
}










// /////////////////////////////////////
// // plugins
// $(".fade1")
//   .slick({
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//     rtl: true,
//   })
//   .slickAnimation();
// // start swip photo 

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   speed: 300,
//   asNavFor: '.slider-nav',
//   rtl: true,
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   autoplay: true,
//   speed: 300,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//     rtl: true,
// });
  
// // $(".autoplay")
// //   .slick({
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2300,
// //     rtl:true
// //   }).slickAnimation();
// // ////autoplay 2
(function($){
    "use strict";

    if (screen.width <= 350) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
     else if (screen.width <= 768) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    else if (screen.width <= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    else if (screen.width >= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }

})(jQuery);


// // end slider
// ////////////////////////
// // start animation scroll
AOS.init();
// // end animation scroll
// //////////////////////////////
// // // start auto type
document.addEventListener("DOMContentLoaded", function() {
  const exampleText = ['منصه علوم' ,'علوم المستقبل'];
  const exampleTyping = new AutoTyping('.auto', exampleText, {
      typeSpeed: 50,
      deleteSpeed: 50,
      waitBeforeDelete: 2000,
      waitBetweenWords: 500,
  });
  exampleTyping.start()
});
// // ///////////////////////////////

// // start counter 
//      // count in who us slide 

// // end count in who us slide 


// // end counter 
