$(document).ready(function () {
    $('.carroussel-my-outfits').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        }
      }
    });
  });

  $(document).ready(function () {
    $('.carroussel-my-itens').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        }
      }
    });
  });