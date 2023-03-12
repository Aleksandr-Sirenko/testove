<div class="hidden_pp">
  <div class="modal modal_center mfp-modal" id="order-service">
    <div class="modal__head">order a service</div>
    <div class="modal__txt">Choose a service:</div>
    <div class="field field_center">
      <div class="field__inp">
        <select class="field__select">
          <option>Business card site from $600</option>
          <option>Portals and Services</option>
          <option>Landing page from $1,000</option>
          <option>Online shopping from $1,000</option>
          <option>Website design from $600</option>
          <option>Online shopping from $1,000</option>
          <option>Corporate websites from $1,000</option>
          <option>SEO optimization<</option>
          <option>SEO promotion from $400</option>
          <option>Contextual advertising</option>
        </select>
      </div>
    </div>
    <button class="btn btn_theme_fill btn_color_c1" id="button-cart">
      <span>Order</span>
    </button>
  </div>
  <div class="modal mfp-modal" id="search-main">
    <div class="modal__head">Site search</div>
    <div class="liveSearch modal__liveSearch">
      <button class="liveSearch__btn js_main-search-btn">
        <i class="fa fa-search"></i>
      </button>
      <input class="liveSearch__inp js_main-search-inp" name="search" value="" placeholder="Enter company or service name" />
    </div>
  </div>
  <div class="toTopBtn">
    <i class="fa fa-angle-up"></i>
  </div>
  <style>
    .editor ul {
      padding-left: 15px; 
    }
    @media screen and (max-width: 812px) {
      .editor ul {
        padding-left: 5px; 
      }
    }
    .editor li *:not(a) {
      line-height: unset;
      margin: unset;
      padding: unset;
      font-size: unset;
      display: inline;
    }
  </style>
  <script>
    $(document).ready(function(){

      $('.editor ul, .editor ul *').removeAttr('style');

      $('.casessPageBody .editor p *, .articlesBody .editor p *').css({'font-size': 'unset '});
      
      $('#search-main [name="search"]').autocomplete({

        source: function( request, response ) {
          $.ajax({
            url: 'index.php?route=product/search_json',
            dataType: 'json',
            data: {
              keyword: request.term
            },
            success: function( json ) {
              response( $.map( json, function( item ) {
                return {
                  label: item.name,
                  price: item.price,
                  special: item.special,
                  value: item.href,
                  img: item.thumb,
                  description: item.description,
                  button_autocomplete: item.button_autocomplete,
                  attributes: item.attributes
                }
              }));
              var li = $('.ui-autocomplete .ui-menu-item').length;
              if (li > 5) {
                $('.ui-menu-item:nth-last-of-type(1)').addClass('act');
              };
            }
          });
        },
        minLength: 1,
        select: function( event, ui ) {
          if(ui.item.value == ""){
            return false;
          }else{
            location.href=ui.item.value;
            return false;
          }
        },
        open: function() {
          $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
        },
        close: function() {
          $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
        },
        focus: function( event, ui ) {
          if (ui.item.button_autocomplete == 1) {
            return false;
          } else {
            $('#search-main [name="search"]').val( ui.item.label );
            return false;
          }
        }
      }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {

        var product_img = item.img ? '<img src="' + item.img + '">' : '';
        var product_price = item.special ? '<span class="price-old">' + item.price + '</span><span class="price-new">' + item.special + '</span>' : item.price;
        var description = item.description ? '<div class="description">' + item.description + '</div>' : '';
        var attributes  = item.attributes  ? '<div class="attributes">'  + item.attributes  + '</div>' : '';
        return $( "<li></li>" )
        .data( "ui-autocomplete-item", item )
        .append( '<a class="product-list"><div class="image">' + product_img + '</div><div class="name">' + item.label + '</div>' + description + attributes + '</a>' )
        .appendTo( ul );
      };

    });

  </script>

  <link rel="stylesheet" href="/css/style-libs.min.css" defer>
  <script src="/js/DD_belatedPNG_0.0.8a-min.js"></script>

  <script src="/js/scripts-libs.min.js"></script>

  <script src="/js/common.js"></script>
  <script>
   $('.home_category_list').owlCarousel({
    items: 1,
    margin:20,
    stagePadding: 0,
    rewind:true,
    nav: true,
    dots: true,
    dotsEach: 1,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    navigation : false,
    responsive: {
     571: {
      items: 1,
      margin:20,
      dotsEach: false,
    },
    866: {
      items: 4.5,
      margin:20,
      dotsEach: false,
    }
  }
});

   var owl_category = $('.home_category_list');
   owl_category.owlCarousel();

   $('.category_top_slider_left').click(function() {
    owl_category.trigger('prev.owl.carousel');
  });
   $('.category_top_slider_right').click(function() {
    owl_category.trigger('next.owl.carousel');
  });
</script>
<script>
 $('.allnews-events-items').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false
});

 var owl_events = $('.allnews-events-items');
 owl_events.owlCarousel();

 $('.events-botton-left').click(function() {
  owl_events.trigger('prev.owl.carousel');
});
 $('.events-botton-right').click(function() {
  owl_events.trigger('next.owl.carousel');
});
</script>
<script>
 $('.allnews-course-items').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false
});

 var owl_course = $('.allnews-course-items');
 owl_course.owlCarousel();

 $('.course-botton-left').click(function() {
  owl_course.trigger('prev.owl.carousel');
});
 $('.course-botton-right').click(function() {
  owl_course.trigger('next.owl.carousel');
});
</script>
<script>
 $('.category-reviews-block').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false,
  responsive: {
   571: {
    items: 1,
    margin: 24,
    dotsEach: false,
  },
  866: {
    items: 3,
    margin: 32,
    dotsEach: false,
  }
},
loop: true,
});
 var owl_reviews = $('.category-reviews-block');
 owl_reviews.owlCarousel();

 $('.reviews-carousel-prev').click(function() {
  owl_reviews.trigger('prev.owl.carousel');
});
 $('.reviews-carousel-next').click(function() {
  owl_reviews.trigger('next.owl.carousel');
});
</script>
<script>
 $('.home-work-items').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false,
  responsive: {
   571: {
    items: 1,
    margin: 24,
    dotsEach: false,
  },
  866: {
    items: 2.7,
    margin: 32,
    dotsEach: false,
  }
},
loop: true,
});
 var owl_work = $('.home-work-items');
 owl_work.owlCarousel();

 $('.work-carousel-prev').click(function() {
  owl_work.trigger('prev.owl.carousel');
});
 $('.work-carousel-next').click(function() {
  owl_work.trigger('next.owl.carousel');
});
</script>
<script>
 $('.service-reviews-items').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false,
  loop: true,
});
 var owl_service_reviews = $('.service-reviews-items');
 owl_service_reviews.owlCarousel();

 $('.service-reviews-slide-left').click(function() {
  owl_service_reviews.trigger('prev.owl.carousel');
});
 $('.service-reviews-slide-right').click(function() {
  owl_service_reviews.trigger('next.owl.carousel');
});
</script>
<script>
 $('.category-articles-block').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false,
  responsive: {
   571: {
    items: 2,
    margin: 24,
    dotsEach: false,
  },
  866: {
    items: 3,
    margin: 32,
    dotsEach: false,
  }
},
loop: true,
});
 var owl_articles = $('.category-articles-block');
 owl_articles.owlCarousel();

 $('.articles-carousel-prev').click(function() {
  owl_articles.trigger('prev.owl.carousel');
});
 $('.articles-carousel-next').click(function() {
  owl_articles.trigger('next.owl.carousel');
});
</script>
<script>
 $('.home-news-items').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false,
  responsive: {
   571: {
    items: 1,
    margin: 24,
    dotsEach: false,
  },
  866: {
    items: 4,
    margin: 32,
    dotsEach: false,
  }
},
loop: true,
});
 var owl_news = $('.home-news-items');
 owl_news.owlCarousel();

 $('.news-carousel-prev').click(function() {
  owl_news.trigger('prev.owl.carousel');
});
 $('.news-carousel-next').click(function() {
  owl_news.trigger('next.owl.carousel');
});
</script>
<script>
 $('.home-cases-items').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false,
  responsive: {
   571: {
    items: 1,
    margin: 24,
    dotsEach: false,
  },
  866: {
    items: 4,
    margin: 32,
    dotsEach: false,
  }
},
loop: true,
});
 var owl_cases = $('.home-cases-items');
 owl_cases.owlCarousel();

 $('.cases-carousel-prev').click(function() {
  owl_cases.trigger('prev.owl.carousel');
});
 $('.cases-carousel-next').click(function() {
  owl_cases.trigger('next.owl.carousel');
});
</script>
<script>
 $('.home-products-items').owlCarousel({
  items: 1,
  margin: 50,
  stagePadding: 0,
  rewind:true,
  nav: true,
  dots: true,
  dotsEach: 1,
  smartSpeed: 500,
  autoplay: false,
  autoplayTimeout: 10000,
  autoplayHoverPause: false,
  navigation : false,
  responsive: {
   571: {
    items: 1,
    margin: 24,
    dotsEach: false,
  },
  866: {
    items: 4,
    margin: 32,
    dotsEach: false,
  }
},
loop: true,
});
 var owl_products = $('.home-products-items');
 owl_products.owlCarousel();

 $('.products-carousel-prev').click(function() {
  owl_products.trigger('prev.owl.carousel');
});
 $('.products-carousel-next').click(function() {
  owl_products.trigger('next.owl.carousel');
});
</script>