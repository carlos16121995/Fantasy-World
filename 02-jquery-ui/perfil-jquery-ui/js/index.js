$(document).ready(function () {
  $('.carroussel-my-outfits').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    mouseDrag:false,
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
  
  $(".carroussel-my-outfits .owl-item").addClass('ui-state-default');
  $('.carroussel-my-outfits .owl-stage').attr('id', 'sortable');
  $( function() {
    $( "#sortable").sortable();
    $( "#sortable").disableSelection();
  } ); 

 
  $('.carroussel-my-itens').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    mouseDrag:false,
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
  
  $(".carroussel-my-itens .owl-item").addClass('ui-state-default');
  $('.carroussel-my-itens .owl-stage').attr('id', 'sortable2');
  $( function() {
    $( "#sortable2").sortable();
    $( "#sortable2").disableSelection();
  } ); 
});