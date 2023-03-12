@extends('layouts.main')
@section('title', 'IT Rating - a reliable source for finding web studios and IT agency')
@section('description', 'Independent and open rating of web studios / digital of the United States of America (Ranking IT company in the USA). Up-to-date data of website development companies and website promotion and smm / ppc agency.')
@section('content')
<div class="main">
  <div id="notification"></div>
  <div class="main__home-wrap">
    <div class="columns">
      <div class="content">

        @includeIf('home.blocks.first_block')
        @includeIf('home.blocks.statistics_block')
        @includeIf('home.blocks.media_block')
        <style type="text/css">
          .owl-carousel .owl-item img {
            width: 50% !important;
          }
        </style>
        @includeIf('home.blocks.allnews_block')
        @includeIf('home.blocks.service_news_block')
        @includeIf('home.blocks.work_block')
        @includeIf('home.blocks.service_reviews_block')
        @includeIf('home.blocks.reviews_block')
        @includeIf('home.blocks.seo_block')
        <script>
          $(function() {
            var expand = new ExpandedContent({
              element: $('.expanded-block'),
              height: 195,
              button: $('.expand-btn'),
              textExpand: 'More',
              textCollapse: 'Hide'
            });
          });
        </script>
      </div>
    </div>
  </div>
  <script>
    $('.block-find-botton').click(function(){
     var path = '';

     if($('#param-category').val() != ""){
      path = $('#param-category').val();
    }

    if($('#param-subcategory').val() != ""){
      path = $('#param-subcategory').val();
    }

    if($('#param-city').val() != ""){
      path = $('#param-city').val();
    }

    if(path){
      location="/index.php?route=product/category&path=" + path + $('#param-price-from').val();
    } else {
      alert('You must select a city!');
    }
  });
</script>
<script>
  $("#param-category").change(function() {
   $.ajax({
    url: 'index.php?route=product/category/getSubcategory',
    type: 'post',
    data: 'category_id=' + $(this).val(),
    dataType: 'json',
    success: function(data) {
     $("#param-subcategory").html(data['subcategory']);
     $("#param-subcategory").trigger('refresh');
     $("#param-city").html(data['city']);
     $("#param-city").trigger('refresh');
    },
    error: function(xhr, ajaxOptions, thrownError) {
     alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    }
   });
  });
  $("#param-subcategory").change(function() {
   $.ajax({
    url: 'index.php?route=product/category/getSubcategoryCity',
    type: 'post',
    data: 'category_id=' + $(this).val(),
    success: function(data) {
     $("#param-city").html(data);
     $("#param-city").trigger('refresh');
    },
    error: function(xhr, ajaxOptions, thrownError) {
     alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    }
   });
  });
 </script>
</div>
@endsection