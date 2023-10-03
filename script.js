document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var secondSwiper = new Swiper(".second-swiper-container", {
    slidesPerView: 1, // Display 1 slide per page on mobile view
    spaceBetween: 30, // Add spacing between slides
    navigation: {
      nextEl: ".swiper-button-next", // Navigation arrow for next slide
      prevEl: ".swiper-button-prev", // Navigation arrow for previous slide
    },
    breakpoints: {
      // Adjust the number of slides per view at different screen widths
      768: {
        slidesPerView: 3, // Display 3 slides per page on screens wider than or equal to 768px
        spaceBetween: 60, // Add spacing between slides
      },
    },
  });

  var endSwiper = new Swiper(".end-swiper-container", {
    slidesPerView: 1, // Display 1 slide per page on mobile view
    spaceBetween: 30, // Add spacing between slides
    navigation: {},
    breakpoints: {
      // Adjust the number of slides per view at different screen widths
      768: {
        slidesPerView: 3, // Display 3 slides per page on screens wider than or equal to 768px
        spaceBetween: 60, // Add spacing between slides
      },
    },
  });
});

