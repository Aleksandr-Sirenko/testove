$(function(){function subscriptionCost($block,type,count){$.ajax({url:'index.php?route=account/transaction/subscriptionCost',data:{type:type,count:count},type:"get",dataType:"json",success:function(json){if(json['error']){$("body").find(".subscription-methods .errors").html(json['error']);}
if(json['success']){$("body").find(".subscription-methods .errors").html('');$block.find('input[name="cost"]').val(json['total']);}}});}
function buySubscription($item,type,date_from,count){$.ajax({url:'index.php?route=account/transaction/buySubscription',data:{type:type,date_from:date_from,count:count},type:"post",dataType:"json",success:function(json){if(json['error']){$("body").find(".subscription-methods .errors").html(json['error']);}
if(json['success']){$("body").find(".subscription-methods .errors").addClass('success').html(json['success_text']);setTimeout(function(){location.reload();},1500);}}});}
if($("body").find(".subscription-methods").length>0){$('body').find('input[name="date_from"]').inputmask('mm/yyyy',{yearrange:{minyear:new Date().getFullYear()}});$("body").find(".subscription-methods_nav__item").on("click",function(){var $this=$(this);var tab=$this.attr("data-tab");$("body").find(".subscription-methods_nav__item.active").removeClass("active");$this.addClass("active");$("body").find(".subscription-methods__item").hide();$("body").find(".subscription-methods__item[data-tab='"+tab+"']").show();});$("body").find(".subscription-methods_nav__item:eq(0)").click();$("body").find(".subscription-methods__item [name='count']").on("change",function(){var $elem=$(this);var count=$elem.val();if(!count||count==0){$("body").find(".subscription-methods .errors").html('Введите количество!');return;}else{$("body").find(".subscription-methods .errors").html('');}
var $block=$elem.closest(".subscription-methods__item");var type=$block.attr("data-tab");if(type=='month'&&count>11){$elem.val(11);count=11;}
subscriptionCost($block,type,count);});$("body").find(".subscription-methods__item [name='count']").each(function(index){var $elem=$("body").find(".subscription-methods__item [name='count']:eq("+index+")");$elem.trigger('change');});$("body").find(".subscription-methods__item form").on("submit",function(e){e.preventDefault();var $form=$(this);var $item=$form.closest(".subscription-methods__item");var type=$item.attr("data-tab");var date_from=$form.find('input[name="date_from"]').val();var count=$form.find('[name="count"]').val();var error=false;if(type!='month'&&type!='year'){alert("Incorrect type!");return;}
if(!date_from){$("body").find(".subscription-methods .errors").html('Введите дату!');error=true;}
if(!count){$("body").find(".subscription-methods .errors").html('Введите количество!');$form.find('[name="count"]').addClass("error");error=true;}
if(!error){$("body").find(".subscription-methods .errors").html('');buySubscription($item,type,date_from,count);}});}});$(window).resize(function(){var div=document.createElement('div');div.style.overflowY='scroll';div.style.width='50px';div.style.height='50px';div.style.visibility='hidden';document.body.appendChild(div);scrollWidth=div.offsetWidth-div.clientWidth;document.body.removeChild(div);});$(window).trigger("resize");$(function(){$('.js_drop').on('click',function(){$('.js_drop').not(this).removeClass('drop-open');$(this).toggleClass('drop-open');});$('input,textarea').focus(function(){$(this).data('placeholder',$(this).attr('placeholder'))
$(this).attr('placeholder','');});$('input,textarea').blur(function(){$(this).attr('placeholder',$(this).data('placeholder'));});var file_type=['image/png','image/jpeg','image/jpg',],files=0;$('.input-file').on('change',function(){var fileVal=$(this).val();var filename=fileVal.replace(/.*\\/,"");var imgIcon='<i class="itr itr_plus js_img-icon"></i>';var parent=$(this).parent();$('.js_img-add').find('span.text-error').remove();$('.js_img-add').find('.js_img-icon').remove();$('.js_img-add').find('.js_img-file').remove();if(fileVal==""){$('.js_img-add').find('span.text-error').remove();$('.js_img-add').find('.js_img-file').remove();$('.js_img-add').append(imgIcon);}else{if(file_type.indexOf(this.files[0].type)==-1){$(this).after(fileTypeError);parent.append(imgIcon);console.log("ошибка type");}else if(this.files[0].size>3145728){$(this).after(fileTypeSize);parent.append(imgIcon);console.log("ошибка size");}else{$('.js_img-add').find('span.text-error').remove();$('.js_img-add').find('.js_img-icon').remove();console.log('goode');var input_files=document.getElementsByClassName("input-file")[0];oFReader=new FileReader();oFReader.onload=function(oFREvent){console.log(this.result);$('.js_img-add').append('<img class="js_img-file" src="'+(oFREvent.target.result||window.URL.createObjectURL(fl[0]))+'" alt="'+filename+'" title="'+filename+'" />');};if(input_files.files.length===0){return;}
var oFile=input_files.files[0];oFReader.readAsDataURL(oFile);}}});var scroll_menu=$('.js_scroll');if(scroll_menu.length){var menu_height=scroll_menu.parent().innerHeight(),menu_offset_top=scroll_menu.offset().top;$(document).on('scroll',function(){var documentScroll=$(this).scrollTop();if(documentScroll>=menu_offset_top-2){$('.js_header').addClass('zindex');scroll_menu.addClass('menuFixed');scroll_menu.parent().css({'height':menu_height});}else{$('.js_header').removeClass('zindex');scroll_menu.removeClass('menuFixed');scroll_menu.parent().removeAttr('style');}});$(window).trigger("scroll");}
$('.js_humburger').on('click',function(e){e.stopPropagation();$('.js_header').toggleClass('menuOpen');$('.js_menuMobile').toggleClass("active");$('html').toggleClass('stop');});$('.js_btnClose').on('click',function(e){e.stopPropagation();$('.js_menuMobile').removeClass("active");$('html').removeClass('stop');$('.js_header').removeClass('menuOpen');});$('.mobileDropMenu, .js_drop').on('click',function(e){e.stopPropagation();});$('body').on('click',function(e){$('.js_header').removeClass('menuOpen');$('.js_menuMobile').removeClass("active");$('html').removeClass('stop');$('.js_menu').removeAttr('style');$('.js_drop').removeClass('drop-open');});$(window).resize(function(){var winW=$(window).width();if(winW>=966){$('.js_header').removeClass('menuOpen');$('.js_menuMobile').removeClass("active");$('html').removeClass('stop');$('.js_menu').removeAttr('style');}});$(window).trigger("resize");(function(){var mobMenuW=$('.mobileDropMenu').innerWidth();var mobW_20=mobMenuW-(30/100*mobMenuW)
var start={},end={};document.body.addEventListener('touchstart',function(e){start.x=e.changedTouches[0].clientX;start.y=e.changedTouches[0].clientY;})
document.body.addEventListener('touchend',function(e){end.y=e.changedTouches[0].clientY;end.x=e.changedTouches[0].clientX;var xDiff=end.x-start.x;var yDiff=end.y-start.y;if(Math.abs(xDiff)>Math.abs(yDiff)){if(xDiff>130&&start.x<=12){$('.js_header').addClass('menuOpen');$('html').addClass('stop');}else if(start.x>=mobW_20){$('.js_header').removeClass('menuOpen');$('html').removeClass('stop');}}})})();$('.js_filterCall').on('click',function(e){e.stopPropagation();$('.js_show-btn').hide();$('#filterpro_box').toggleClass('filterpro_show');$('.filterpro-overlay').toggleClass('filterpro-overlay_show');$('html').toggleClass('scroll-stop');});$('.js_filter-close, .filterpro-overlay').on('click',function(){$('#filterpro_box').removeClass('filterpro_show');$('.filterpro-overlay').removeClass('filterpro-overlay_show');setTimeout(function(){$('html').removeClass('scroll-stop');},500);});$('#filterpro *').on('change',function(){$('.js_show-btn').show();});$('#filterpro .ui-slider-handle').on('click',function(){$('.js_show-btn').show();});(function(){$('.js-toggle_arrow').on('click',function(){var drop_menu=$(this).prev();$(this).categoryDrop(drop_menu)});$('.js-categoryBtn').on('click',function(){var drop_menu=$(this).next();$(this).categoryDrop(drop_menu)});$.fn.categoryDrop=function(drop_menu){$('.js-aside_category_drop').not(drop_menu).slideUp(250,function(){if($(this).css('display')=='none'){$(this).removeAttr('style').removeClass('menu-category__list_active').parent().removeClass('active');}}).next().removeClass('menu-category__arrow_up');drop_menu.stop(true).slideToggle(250).toggleClass('menu-category__list_active').next().toggleClass('menu-category__arrow_up').parent().toggleClass('active');return this;};})();(function(){$('select').not('select.multiple').styler({selectSmartPositioning:false,selectSearch:true,onSelectOpened:function(){$(this).find(".jq-selectbox__dropdown ul").mCustomScrollbar({theme:"dark",scrollInertia:900,scrollEasing:'easeOut',});let $self=$(this);setTimeout(function(){$self.addClass('is-open');},1);},onSelectClosed:function(){$(this).removeClass('is-open');}});})();$('.js_check-all').on('click',function(){var chch=$('.checkbox__inp').attr('checked');if(chch=='checked'){$('.fxtabl__td_checkbox .checkbox__inp').attr('checked','checked');}else if(chch==undefined){$('.fxtabl__td_checkbox .checkbox__inp').removeAttr('checked');}});$('.js-toggle_checked').on('click',function(e){if($(e.target).closest('.checkbox__link').length)return;var val=$('input',this).attr('checked');$('input',this).attr('checked',!val);$(this).parent().find('span.text-error').remove();});$('.categoryPage__fxtablWrp').on('click','.js-toggle_checked2',function(e){if($(e.target).closest('.checkbox__link').length)return;var val=$('input',this).attr('checked');$('input',this).attr('checked',!val);$(this).parent().find('span.text-error').remove();});$(".js_readMore").on('click',function(e){e.preventDefault();$('.js_readMoreOpen').slideToggle(150);var text=$(this).text()=='Скрыть'?'Подробнее':'Скрыть';$(this).text(text).toggleClass('active');});$('.js_question').on('click',function(){var answer=$(this).next();var parent=$(this).parent();if(!parent.hasClass('open-all')){$('.js_question').parent().removeClass('active');parent.addClass('active');$('.js_answer').not(answer).slideUp(400,function(){if($(this).css('display')=='none'){$(this).removeAttr('style')}});answer.stop(true).slideToggle(400,function(){$('.js_question').parent().removeClass('open-first');if($(this).css('display')=='none'){answer.removeAttr('style').parent().removeClass('active').removeClass('open-first');}});}else{parent.toggleClass('active');answer.stop(true).slideToggle(400);}});(function(){let acc=document.getElementsByClassName("accordeon");let i;for(i=0;i<acc.length;i++){acc[i].addEventListener("click",function(){if(window.innerWidth<992){this.classList.toggle("active");let panel=this.nextElementSibling;if(panel.style.maxHeight){panel.style.maxHeight=null;}else{panel.style.maxHeight=panel.scrollHeight+"px";}}});}
$(window).on('resize',function(){if(window.innerWidth>=992){[...acc].forEach((item)=>{item.classList.remove('active');item.nextElementSibling.removeAttribute('style')})}})})();(function(){$.fn.dmtabs=function(n){$(this).addClass("tab-active").siblings().removeClass("tab-active"),n.find("> .js_tabContent > .js_tabBox").eq($(this).index()).fadeIn(700,function(){$(this).addClass("tab-open")}).siblings(".js_tabBox").fadeOut(200,function(){$(this).removeClass("tab-open")})};var get_route={links:$('.js_tabBtn'),url:location.hash,go(){if(this.url.length){for(var i=0,x=this.links.length;i<x;i++){if($(this.links).eq(i).attr('href')==this.url){let $link=$(this.links).eq(i);let id=$link.attr('href');$link.addClass('tab-active').siblings().removeClass('tab-active');$('.tabContent__box').css({'display':'none'});$(id).parents('.tabContent__box').addClass('tab-open');break;}}}},_set(elem){location.hash=elem.attr('href');}}
get_route.go();$('.js_tabNavToggle').on('click',function(e){e.stopPropagation();$(this).next().toggleClass('tabNavOpen');});$('body').on('click',function(){$('.tabs__navigationWrap').removeClass('tabNavOpen');});var n;var activeText=$('.js_tabNavigation').find('.tab-active').text();$('.js_tabHead').html(activeText);$(".js_tabBtn").on('click',function(e){e.preventDefault();$(this).parents().find('.js_tabNavToggle').next().removeClass('tabNavOpen');var txt=$(this).text();$(".js_tabHead").text(txt);});$(".product-slider-tabs .js_sliderTabBtn").on("click",function(e){e.preventDefault();var $parentWrapper=$(this).parents('.companySelected__tabs');var currentTabHref=$(this).attr('href').replace(/\#/,'');var $navToggleBtns=$parentWrapper.find('.js_sliderTabBtn');var $tabs=$parentWrapper.find('.js_tabBox');$navToggleBtns.removeClass('tab-active');$(this).addClass('tab-active');$tabs.hide();$tabs.each((index,element)=>{if($(element).attr('data-tab')===currentTabHref){$(element).show();}});;});$(".js_tabNavigation").on("click",".js_tabBtn:not(.tab-active)",function(){n=$(this).parent().parent().parent(),$(this).dmtabs(n);console.log(n);console.log($(this));$(".sliderStudio").trigger('refresh.owl.carousel');});})();$(window).resize(function(){var winW=$(window).width();if(winW<=550){if($('.product-slider-tabs > .owl-carousel').length>0){$('.product-slider-tabs > .owl-carousel').trigger('destroy.owl.carousel');$('.product-slider-tabs > .owl-carousel').owlCarousel({items:1,margin:5,stagePadding:0,loop:true,smartSpeed:500,nav:true,dots:false,onTranslated:function(event){$('.product-slider-tabs > .owl-carousel .owl-item.active .js_sliderTabBtn').click();},onDragged:function(){$('.product-slider-tabs > .owl-carousel .owl-item.active .js_sliderTabBtn').click();}});}}else if(winW<=965){if($('.product-slider-tabs > .owl-carousel').length>0){$('.product-slider-tabs > .owl-carousel').trigger('destroy.owl.carousel');$('.product-slider-tabs > .owl-carousel').owlCarousel({items:1,margin:5,stagePadding:0,loop:true,smartSpeed:500,nav:true,dots:false,responsive:{550:{items:2,},768:{items:2,margin:5,},}});}}else{if($('.product-slider-tabs > .owl-carousel').length>0){$('.product-slider-tabs > .owl-carousel').trigger('destroy.owl.carousel');}}
if(winW>=866){$('.js_inSlider, .js_inSlider-2').trigger('destroy.owl.carousel');}else{$('.js_inSlider').owlCarousel({items:1,margin:24,stagePadding:0,loop:true,nav:true,dots:true,smartSpeed:500,dotsEach:4,navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.6 511.6" width="45" style="fill: #c0bebe;"><path d="M148.3 255.8L386.1 18c4-4.3 4-11-.2-15S375.2-1 371 3L125.7 248.3a10.6 10.6 0 000 15L371 508.7c4.3 4 11 4 15-.2s4-10.7 0-14.9L148.4 255.8z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.9 511.9" width="45" style="fill: #c0bebe;"><path d="M386.2 248.3L141 3c-4.3-4-11-4-15 .2-4 4.1-4 10.7 0 14.8l237.7 237.8L126 493.6c-4.3 4-4.4 11-.3 15 4.1 4.3 11 4.5 15 .3l.3-.2 245.3-245.4a10.6 10.6 0 000-15z"/></svg>'],autoplay:true,autoplayTimeout:10000,autoplayHoverPause:true,responsive:{571:{items:2,margin:24,dotsEach:false,},}});$('.js_inSlider-2').owlCarousel({items:2,margin:15,stagePadding:0,loop:true,nav:true,dots:true,smartSpeed:500,dotsEach:4,navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.6 511.6" width="45" style="fill: #c0bebe;"><path d="M148.3 255.8L386.1 18c4-4.3 4-11-.2-15S375.2-1 371 3L125.7 248.3a10.6 10.6 0 000 15L371 508.7c4.3 4 11 4 15-.2s4-10.7 0-14.9L148.4 255.8z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.9 511.9" width="45" style="fill: #c0bebe;"><path d="M386.2 248.3L141 3c-4.3-4-11-4-15 .2-4 4.1-4 10.7 0 14.8l237.7 237.8L126 493.6c-4.3 4-4.4 11-.3 15 4.1 4.3 11 4.5 15 .3l.3-.2 245.3-245.4a10.6 10.6 0 000-15z"/></svg>'],autoplay:true,autoplayTimeout:10000,autoplayHoverPause:true,responsive:{750:{items:4,margin:24,dotsEach:false,},571:{items:3,margin:14,dotsEach:false,},}});}});$(window).trigger("resize");$('.js_sliderItem_1').owlCarousel({items:1,margin:34,stagePadding:0,rewind:true,nav:true,dots:false,smartSpeed:500,navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Ресурс 1лого</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g id="svg"><rect x="1.44" y="7.01" width="17.96" height="2.08"/><rect x="3.72" y="5.69" width="2.04" height="11.38" transform="translate(-6.66 6.69) rotate(-45)"/><rect x="-0.93" y="3.74" width="11.43" height="2.08" transform="translate(-1.97 4.79) rotate(-45)"/></g></g></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Монтажная область 19</title><g id="svg"><rect y="7.03" width="17.96" height="2.08"/><rect x="8.96" y="3.72" width="11.38" height="2.04" transform="translate(7.65 -8.97) rotate(45)"/><rect x="8.9" y="10.3" width="11.43" height="2.08" transform="translate(-3.74 13.66) rotate(-45)"/></g></svg>'],autoplay:true,autoplayTimeout:3000,autoplayHoverPause:true,loop:true,});$('.js_sliderItem_2').owlCarousel({items:1,margin:24,stagePadding:0,rewind:true,nav:true,dots:true,dotsEach:1,smartSpeed:500,navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Ресурс 1лого</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g id="svg"><rect x="1.44" y="7.01" width="17.96" height="2.08"/><rect x="3.72" y="5.69" width="2.04" height="11.38" transform="translate(-6.66 6.69) rotate(-45)"/><rect x="-0.93" y="3.74" width="11.43" height="2.08" transform="translate(-1.97 4.79) rotate(-45)"/></g></g></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Монтажная область 19</title><g id="svg"><rect y="7.03" width="17.96" height="2.08"/><rect x="8.96" y="3.72" width="11.38" height="2.04" transform="translate(7.65 -8.97) rotate(45)"/><rect x="8.9" y="10.3" width="11.43" height="2.08" transform="translate(-3.74 13.66) rotate(-45)"/></g></svg>'],autoplay:false,autoplayTimeout:10000,autoplayHoverPause:false,responsive:{500:{items:2,margin:30,dotsEach:2,},},loop:true,});$('.js_sliderItem_3').owlCarousel({items:1,margin:24,stagePadding:0,rewind:true,nav:true,dots:true,dotsEach:1,smartSpeed:500,navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Ресурс 1лого</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g id="svg"><rect x="1.44" y="7.01" width="17.96" height="2.08"/><rect x="3.72" y="5.69" width="2.04" height="11.38" transform="translate(-6.66 6.69) rotate(-45)"/><rect x="-0.93" y="3.74" width="11.43" height="2.08" transform="translate(-1.97 4.79) rotate(-45)"/></g></g></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Монтажная область 19</title><g id="svg"><rect y="7.03" width="17.96" height="2.08"/><rect x="8.96" y="3.72" width="11.38" height="2.04" transform="translate(7.65 -8.97) rotate(45)"/><rect x="8.9" y="10.3" width="11.43" height="2.08" transform="translate(-3.74 13.66) rotate(-45)"/></g></svg>'],autoplay:false,autoplayTimeout:10000,autoplayHoverPause:false,responsive:{571:{items:2,margin:24,dotsEach:false,},866:{items:3,margin:32,dotsEach:false,}},loop:true,});$('.js_tenders').owlCarousel({items:2,margin:20,stagePadding:0,nav:true,dots:false,responsive:{571:{items:4,},992:{items:6,}},loop:true,});$('.js_lk-news').owlCarousel({items:1,margin:30,stagePadding:0,rewind:true,nav:true,dots:false,smartSpeed:500,navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Ресурс 1лого</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g id="svg"><rect x="1.44" y="7.01" width="17.96" height="2.08"/><rect x="3.72" y="5.69" width="2.04" height="11.38" transform="translate(-6.66 6.69) rotate(-45)"/><rect x="-0.93" y="3.74" width="11.43" height="2.08" transform="translate(-1.97 4.79) rotate(-45)"/></g></g></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Монтажная область 19</title><g id="svg"><rect y="7.03" width="17.96" height="2.08"/><rect x="8.96" y="3.72" width="11.38" height="2.04" transform="translate(7.65 -8.97) rotate(45)"/><rect x="8.9" y="10.3" width="11.43" height="2.08" transform="translate(-3.74 13.66) rotate(-45)"/></g></svg>'],loop:false,responsive:{571:{items:2,},966:{items:1,}}});$(function($){var max_col_height=0;$('.js_max-height').each(function(){if($(this).height()>max_col_height){max_col_height=$(this).height();}});$('.js_max-height').height(max_col_height);});$(".js_faq-search-content").searcher({itemSelector:".js_search-to-faqCard",textSelector:"div",inputSelector:".js_faq-search",toggle:function(item,containsText){(containsText)?$(item).fadeIn():$(item).fadeOut();}});$('.js_form-add').on('click','.js_btn-field-add',function(){});$('.js_dropToggle').on('click',"i",function(e){e.stopPropagation();$(this).parents('.js_dropToggle').toggleClass("dropWrap_active");});$('body').on('click',function(){$('.js_dropToggle').removeClass('dropWrap_active');});(function(){var window_height=$(window).height(),offset_show=window_height/2,offset_opacity=window_height,scroll_position=window_height,scroll_top_duration=700,$sticyBtn=$('.phoneBtn, .toTopBtn'),$phoneBtn=$('.phoneBtn'),$toTopBtn=$('.toTopBtn');$(window).scroll(function(){($(this).scrollTop()>offset_show)?$sticyBtn.addClass('el-is-visible'):$sticyBtn.removeClass('el-is-visible el-fade-out');if($(this).scrollTop()>offset_opacity){$sticyBtn.addClass('el-fade-out')}
($(this).scrollTop()>=1)?$toTopBtn.removeClass('toTopBtn_down').addClass('toTopBtn_up'):$toTopBtn.removeClass('toTopBtn_up toTopBtn_visible').addClass('toTopBtn_down');if($(this).scrollTop()==0){$toTopBtn.addClass('toTopBtn_visible')}});$toTopBtn.on('click',function(e){($(this).hasClass('toTopBtn_down'))?$('body').scrollTo(scroll_position+'px',500):(scroll_position=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,$('body,html').animate({scrollTop:0},500))
console.log(window.pageYOffset)
return false;});})();$('.mfp-search').on('click',function(e){mfp_val=$(this).attr('href').substring(1);e.stopPropagation();}).magnificPopup({mainClass:'mfp mfp-modal mfp-fadeIn bg-light',removalDelay:550,closeBtnInside:true,callbacks:{beforeOpen:function(){$('html').css({"margin-right":scrollWidth+'px',"overflow":"hidden"});$('body').addClass(mfp_val);$('.toTopBtn').css({"right":"calc(2.5% + "+scrollWidth+"px)"});$('.formPopup .form__inp').removeClass('line-error, required-good').find('span.text-error').remove();},beforeClose:function(){$('.toTopBtn').removeAttr('style');},close:function(){$('html').removeAttr('style');$('body').removeClass(mfp_val);$('.mfp-content').css({"margin-left":scrollWidth+'px'});},},});$('.mfpUp').on('click',function(e){mfp_val=$(this).attr('href').substring(1);e.stopPropagation();}).magnificPopup({mainClass:'mfp mfp-modal mfp-fadeIn',removalDelay:550,closeBtnInside:true,callbacks:{beforeOpen:function(){$('html').css({"margin-right":scrollWidth+'px',"overflow":"hidden"});$('body').addClass(mfp_val);$('.toTopBtn').css({"right":"calc(2.5% + "+scrollWidth+"px)"});$('.formPopup .form__inp').removeClass('line-error, required-good').find('span.text-error').remove();},beforeClose:function(){$('.toTopBtn').removeAttr('style');},close:function(){$('html').removeAttr('style');$('body').removeClass(mfp_val);$('.mfp-content').css({"margin-left":scrollWidth+'px'});},},});$('.js_main-search-btn').bind('click',function(){url=$('base').attr('href')+'index.php?route=product/search';var search=$('.js_main-search-inp').attr('value');if(search){url+='&search='+encodeURIComponent(search);}
location=url;});$('.js_main-search-inp').bind('keydown',function(e){if(e.keyCode==13){url=$('base').attr('href')+'index.php?route=product/search';var search=$('input[name=\'search\']').attr('value');if(search){url+='&search='+encodeURIComponent(search);}
location=url;}});});(function(){this.ExpandedContent=function(){var defaults={element:false,height:200,speed:'0.3s',button:$('.expand-btn'),textExpand:'Show',textCollapse:'Hide'};this.config=this._extend(defaults,arguments[0]);this.init();};ExpandedContent.prototype.init=function(){if(this._checkInit()){return false;}
this.elem=this.config.element;this.content=this.elem.find('.expanded-block__content');this.contentOuter=this.elem.find('.expanded-block__outer');this.contentOuter.css('transition-duration',this.config.speed);this.start();};ExpandedContent.prototype.start=function(){if(this.config.button.length){var that=this;this.config.button.on('click',function(){if(that.contentOuter.hasClass('expanded')){that.collapse();}else{that.expand();}});if(this.content.height()<this.config.height){this.config.button.hide();}}};ExpandedContent.prototype.expand=function(){this.contentOuter.css({height:this.content.innerHeight()}).addClass('expanded');if(this.config.button.length){this.config.button.html(this.config.textCollapse);}};ExpandedContent.prototype.collapse=function(){this.contentOuter.css({height:this.config.height}).removeClass('expanded');if(this.config.button.length){this.config.button.html(this.config.textExpand);}};ExpandedContent.prototype._extend=function(defaults,custom){if(typeof custom==='object'){var key;for(key in defaults){if(!custom.hasOwnProperty(key)){custom[key]=defaults[key];}}}else{custom=defaults;}
return custom;};ExpandedContent.prototype._checkInit=function(){if(this.config.element.length){return false;}}})();$(function(){displayMobileTitle();function displayMobileTitle(){var $mobileNavBtn=$('.js-categoryBtn');$mobileNavBtn.each(function(index,element){var mobileText=$(element).attr('data-mobile-title');if(mobileText!==''){$(element).html(mobileText);}});}});function modal_notification_close(){$('.modal_notification').fadeOut('slow',function(){$(this).remove();});}
$("#notification").on('click',".modal_notification__close, .modal_notification__close2",function(){setTimeout(modal_notification_close,1);});$(document).on({ready:function(){if($('.js-submit-form').length){$('.js-submit-form').on('change',function(){let $value=$(this).val();$value=parseInt($value);if(Number.isInteger($value)){if($('#filter_technology').length){$form=$('#filter_technology');$form.submit();}}})}
function openSubscriptionPopUp(){let today=(new Date()).getTime();let days_num=1000*60*60*24*15;if(!getCookie('subscr_date')){setCookie('subscr_date',today);setCookie('subscr_popup',true)}
if(getCookie('subscr_date')<today-days_num){setCookie('subscr_date',today);setCookie('subscr_popup',true);}
if(getCookie('subscr_date')>today-days_num&&getCookie('subscr_popup')=='true'){$('.pop-ups').addClass('opened');$('.pop-up').addClass('opened');}}
if($('div').is('.pop-up')){openSubscriptionPopUp();}
function getCookie(name){let matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));return matches?decodeURIComponent(matches[1]):undefined;}
function setCookie(name,value,options={}){options={path:'/',...options};if(options.expires instanceof Date){options.expires=options.expires.toUTCString();}
let updatedCookie=encodeURIComponent(name)+"="+encodeURIComponent(value);for(let optionKey in options){updatedCookie+="; "+optionKey;let optionValue=options[optionKey];if(optionValue!==true){updatedCookie+="="+optionValue;}}
document.cookie=updatedCookie;}
$('.close-pop-up-btn').on({click:function(){let modal=$(this).parents('.pop-up');let modalWrapper=$(this).parents('.pop-ups');if(document.querySelectorAll('.pop-up.opened').length===1){modalWrapper.removeClass('opened');}
modal.fadeOut(300,function(){modal.removeClass('opened');modal.removeAttr('style');})
setCookie('subscr_popup',false);}})}})
$(window).on({resize:function(){adaptProductPage();}})
function adaptProductPage(){if(!$('div').is('companyCard')){let phone=$('.arrayInf__value_phone').parents('.companyCard__arrayInf');let email=$('.arrayInf__value_email').parents('.companyCard__arrayInf');if(window.innerWidth<768){$('.companyCard').prepend($('.companyCard__row.companyCard__row_top .companyCard__content').find('.companyCard__helpInf'));$('.companyCard').prepend($('h1.companyCard__heading'));$('.companyCard__body').prepend($('.companyCard').find('.companyCard__thumb'));$('.companyCard__row_top').append(phone);$('.companyCard__row_top').append(email);}else{$('.companyCard__row.companyCard__row_top .companyCard__content').prepend($('.companyCard_verif'));$('.companyCard__row.companyCard__row_top .companyCard__content').prepend($('h1.companyCard__heading'));$('.companyCard').prepend($('.companyCard').find('.companyCard__thumb'));$('.companyCard__row_mid').find('.companyCard__content').prepend($('.companyCard__row_top').find('.companyCard__arrayInf'));}}}
adaptProductPage();$(window).on({resize:function(){if(window.innerWidth<=768){createMobileVacanciesView();}else{removeMobileVacanciesView()}}})
function createMobileVacanciesView(){$('.vacancies__list').addClass('owl-carousel');$('.vacancies__list').owlCarousel({items:1,margin:24,stagePadding:0,rewind:true,nav:true,dots:true,dotsEach:1,smartSpeed:500,navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Ресурс 1лого</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><g id="svg"><rect x="1.44" y="7.01" width="17.96" height="2.08"/><rect x="3.72" y="5.69" width="2.04" height="11.38" transform="translate(-6.66 6.69) rotate(-45)"/><rect x="-0.93" y="3.74" width="11.43" height="2.08" transform="translate(-1.97 4.79) rotate(-45)"/></g></g></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 16.12"><title>Монтажная область 19</title><g id="svg"><rect y="7.03" width="17.96" height="2.08"/><rect x="8.96" y="3.72" width="11.38" height="2.04" transform="translate(7.65 -8.97) rotate(45)"/><rect x="8.9" y="10.3" width="11.43" height="2.08" transform="translate(-3.74 13.66) rotate(-45)"/></g></svg>'],autoplay:false,autoplayTimeout:10000,autoplayHoverPause:false,loop:true,});}
function removeMobileVacanciesView(){$('.vacancies__list').owlCarousel('destroy');$('.vacancies__list').removeClass('owl-carousel');}
if(window.innerWidth<=768){createMobileVacanciesView();}
$(document).ready(function(){$('.pro-types__grid').owlCarousel({dots:true,responsive:{0:{items:1,margin:10,},768:{items:2,margin:20,},1024:{items:3,margin:30,}}})
$('.btn-pro-acc-more').on('click',function(){$(this).closest('.pro-type').find('.pro-type-read-more').toggleClass('opened');if($(this).closest('.pro-type').find('.pro-type-read-more').hasClass('opened')){$(this).closest('.pro-type').find('.pro-type-read-more').stop().slideDown(300);$(this).text('Hide')}else{$(this).closest('.pro-type').find('.pro-type-read-more').stop().slideUp(300);$(this).text('More')}})})