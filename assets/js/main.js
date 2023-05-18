$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#nav').addClass('sticky')
    } else {
        $('#nav').removeClass('sticky')
    }
});

/// slider



$('.testimonials__slider').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 2,
    centerMode: true,
    // variableWidth: true,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable: true,
    pauseOnFocus: false
});





$('.projects__btn').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
})


const galleryContainer = document.querySelector("#gallery-content")
if (galleryContainer) {
    jQuery("#gallery-content")
        .justifiedGallery({
            captions: false,
            // lastRow: "hide",
            rowHeight: 400,
            margins: 5
        })
}

//// slider

var swiper = new Swiper(".testimonial__slider .mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    // autoplay: {
    // 	delay: 3000,
    // 	disableOnInteraction: false
    // },
    loop: false,
    slidesPerView: "2",
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    navigation: {
        prevEl: ".testimonial__slider-btn-prev",
        nextEl: ".testimonial__slider-btn-next"
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: false
    }
});
/// slider


$('.header__slider-container').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    centerMode: true,
    // variableWidth: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable: true,
    pauseOnFocus: false
});
$('.clients__slider').slick({
    dots: false,
    // infinite: true,
    // speed: 1200,
    slidesToShow: 6,
    // centerMode: true,
    // variableWidth: true,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 1000,
    draggable: true,
    pauseOnFocus: false
});





/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".nav__list")
const body = document.querySelector("body")
// const overlay = document.querySelector(".overlay")
// const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    body.classList.toggle("no-scrolling")
    // navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
// overlay.addEventListener("click", mobileMenu)




$(document).ready(function () {
    // Assign some jquery elements we'll need
    var $swiper = $(".swiper-container");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper(".about__swiper-container", {
        spaceBetween: 1,
        slidesPerView: 1,
        // centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        speed: 1200,
        navigation: {
            nextEl: ".about__swiper-next",
            prevEl: ".about__swiper-prev"
        },
        breakpoints: {

            640: {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 3,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 5,
            }

        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });
});





/// store the wrapper HTMLElement into a constant
const imageWrapper = document.querySelector('.img-display-swiper');
const animatedImage = imageWrapper.querySelectorAll('.AnimatedImage');
/// then get the width and height properties
const { offsetWidth, offsetHeight } = imageWrapper;
/// create a timeout handler for requestAnimationFrame
let rafTimeout = null, callTimeout = null;
const CalculateOrigin = (event) => {
    /// get local cursor offset
    const { offsetX, offsetY } = event;
    /// we know than transform-origin centered is equal to 50% 50%
    /// so we need to handle this position with the delta between
    /// mouse position and wrapper bounds

    /// calculate deltas
    const deltaX = (100 / offsetWidth) * offsetX;
    const deltaY = (100 / offsetHeight) * offsetY;
    /// apply the style property to the image
    animatedImage.forEach(el => {
        el.style.transformOrigin = `${Math.min(100, deltaX)}% ${Math.min(100, deltaY)}%`
    })

    // 
}

/// add an event listener
imageWrapper.addEventListener('mousemove', (event) => {
    if (rafTimeout) {
        window.cancelAnimationFrame(rafTimeout);
    }
    /// use requestAnimationFrame for event debouncing and animation frame improvements
    rafTimeout = window.requestAnimationFrame(() => CalculateOrigin(event));
});





//////////////////////////////////////////////////
//////

var swiper3 = new Swiper(".img-thumb-swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper4 = new Swiper(".img-display-swiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});



// function thmSwiperInit() {
// swiper slider
// const swiperElm = document.querySelectorAll(".thm-swiper__slider");
// swiperElm.forEach(function (swiperelm) {
//     const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
//     let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
// });
// }