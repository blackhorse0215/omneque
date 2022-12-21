(function(){
    $(window).on("load", function () {
        var urlHash = window.location.href.split("#")[1];
        $('html,body').animate({
            scrollTop: $('#' + urlHash).offset().top - 100
        }, 1000);
    });
    
    $('.mega-navigation__list-heading a').each(function(){
      $(this).on('click', function(e){
        //e.preventDefault();
        var attr =$(this).attr('href').split("#")[1];
        console.log(attr)
        var attrPosition = $('#'+ attr).offset().top - 100;
        $('html,body').animate({
          scrollTop: attrPosition
        },1000);
      });
   });
   
    // Your JavaScript here
    $('body').click(function(e){
      $('.header__nav .nav__link').removeClass('.nav__menu--active');
      $('.nav div.nav__submenu.nav__meganav').removeClass('visible');
    });
  
  $('.header--default .header__nav').click(function(e){
  	e.stopPropagation();
  });
  
  $('.header__nav > .list > li:nth-child(2) > .nav__link').click(function(e){
  	e.preventDefault();
  });
    
  
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
      	let max = $(this).prev().attr('max');
        // Get its current value
        var currentVal = parseInt($(this).prev('.cart-template__quantity .input').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
          if (currentVal < max) {
            $(this).prev('.cart-template__quantity .input').val(currentVal + 1);
          }
        } else {
            // Otherwise put a 0 there
            $(this).prev('.cart-template__quantity .input').val(1);
        }
    });
    // This button will decrement the value till 0
    $('.qtyminus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($(this).next('.cart-template__quantity .input').val());
        // If is not undefined
        if (!isNaN(currentVal) && currentVal > 1) {
            // Increment
            $(this).next('.cart-template__quantity .input').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $(this).next('.cart-template__quantity .input').val(1);
        }
    });
//   if( $('.blog-on-list').length > 0 ){
//         var article_on_page =$('.blog-on-list');
//         var next_url= article_on_page.data('next-url');
//         var load_more_btn = $('.load-more_btn');
//         var load_more_spinner = $('.load-more_spinner');
//        $('.load-more_btn').click(function(){
//               $.ajax({
//                   url:next_url,
//                   type:'GET',
//                   dataType:'html',
//                   beforeSend: function(){
//                       load_more_btn.hide();
//                       load_more_spinner.show();
//                   } 
//               }).done( function(next_page) {
//                   load_more_spinner.hide();
                  
//                   var new_article = $(next_page).find('.blog-on-list');
//                   var new_url = new_article.data('next-url');
                  
//                   next_url = new_url;
//                   if (next_url){
//                     load_more_btn.show()	
//                   }
//                   article_on_page.append(new_article.html().split('<div class="blog-sizer"></div>')); 
                  
//               } );
// 			  setTimeout(function(){ 
//                     alert('test');
//                     var $grid = $('.blog_grid').isotope({
//                       itemSelector: '.blog-item',
//                       percentPosition: true,
//                       masonry: {
//                         columnWidth: '.blog-sizer'
//                       }
//                     }); 
//                   },1000); 	             
//           });
                                                 
//     }
    // inner tab
    // Show the first tab and hide the rest
      $('.product-tab li:first-child').addClass('active');
      $('.pt-content').hide();
      $('.pt-content:first').show();

     // Click function
      $('.product-tab li').click(function(){
        $('.product-tab li').removeClass('active');
        $(this).addClass('active');
        $('.pt-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
      });
  
    jQuery(".dropdown_button").click(function() {
		if(jQuery(this).next("div.dropdown-menu").is(":visible")){
			jQuery(this).next("div.dropdown-menu").slideUp();
		}
		else
		{
			jQuery(".dropdown-menu").slideUp();
			jQuery(this).next("div.dropdown-menu").slideDown();
		}		
	});
  
    if($(window).width() > 608){
			      
    	
    }
    thumbSlide();
    $(window).resize(function(){
      if($(window).width() > 608){
      	thumbSlide();			
      }
    });
      
    function thumbSlide(){
    	$('.product_thumbnail_slider').slick({
          infinite: false,
          slidesToShow:5,
          slidesToScroll:1,
          dots:false,
          arrows:true,
          autoplay:false,
          responsive: [
              {
                breakpoint:991,
                settings: {
                  slidesToShow:3
                }
              },
              {
                breakpoint:767,
                settings: {
                  slidesToShow:2
                }
              }
          ]
      });  
    }
    
    $('.buyer-slider').slick({
		infinite: true,
		slidesToShow:1,
        slidesToScroll:1,
		dots:true,
        centerMode:true,
      	centerPadding:'260px',
		arrows:false,
		autoplay: false,
        responsive: [
		    {
		      breakpoint:991,
		      settings: {
		     	centerMode: true,
		     	slidesToShow:1,
                centerPadding: '180px'
		      }
		    },
		    {
		      breakpoint:767,
		      settings: {
		      	centerMode:true,
		      	slidesToShow:1,
		     	centerPadding: '70px'   
		      }
		    }
		]
	});
    
	$('.highlight-slider').slick({
		infinite: true,
		slidesToShow:2,
        slidesToScroll:1,
		dots:false,
        centerMode:true,
      	centerPadding:'100px',
		arrows:true,
		autoplay: false,
        responsive: [
		    {
		      breakpoint:991,
		      settings: {
		     	centerMode: true,
		     	slidesToShow:1,
                centerPadding: '100px'
		      }
		    },
		    {
		      breakpoint:767,
		      settings: {
		      	centerMode:true,
		      	slidesToShow:1,
		     	centerPadding: '50px'   
		      }
		    }
		]
	});
  
    $('.collection-list-slider').slick({
		infinite: true,
		slidesToShow:2,
        slidesToScroll:1,
		dots:false,
        centerMode:true,
      	centerPadding:'100px',
		arrows:true,
		autoplay: false,
        responsive: [
		    {
		      breakpoint:991,
		      settings: {
		     	centerMode: true,
		     	slidesToShow:1,
                centerPadding: '100px'
		      }
		    },
		    {
		      breakpoint:767,
		      settings: {
		      	centerMode:true,
		      	slidesToShow:1,
		     	centerPadding: '50px'   
		      }
		    }
		]
	});
  
    
  
  	if($('.blog_grid').length > 0){
		setTimeout(function(){
		      var $grid = $('.blog_grid').isotope({
		        itemSelector: '.blog-item',
		        percentPosition: true,
		        masonry: {
		          columnWidth: '.blog-sizer'
		        }
		      });           
	    },1000);
    }
  
    // faq sidebar link active class
    $('.category-link li a').each(function(){
		$(this).on('click', function(e){
			e.preventDefault();
			$('.category-link li a').removeClass('active');
			$(this).addClass('active');
			
			var attr = $(this).attr('href');
			var attrPosition = $(attr).offset().top - 100;
			$('html,body').animate({
				scrollTop: attrPosition
			},1000);
    	});
    });
  
    if($(".ssw-counter-fave-menu").text() == "" || $(".ssw-counter-fave-menu").text() == "0"){
      $(".ssw-counter-fave-menu").css("display", "none");
    }

	var links = document.links;
for (let i = 0, linksLength = links.length ; i < linksLength ; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = '_blank';
    links[i].rel = 'noreferrer noopener';
  }
}
  
  $('.add-to-cart').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    let product_id = $('.select-variant').val();
    let product_quantity = $('.product-quantity').val();
    
    jQuery.getJSON('/cart.js', function(cart) {
      if (cart.item_count > 0) {
        for(let i = 0; i < cart.item_count; i++) {
          if (product_id == cart.items[i].id) {
            if (cart.items[i].quantity >= product_quantity) {
              $('.filled-cart').removeClass('hide');
            } else {
              $('.shopify-product-form').submit();
            }
          }
        }
      } else {
      	$('.shopify-product-form').submit();
      }
      $('.shopify-product-form').submit();
    });
  });
  
  
  $('#concierge_form .custom-submit').click(function() {
    if ($('#concierge_form .agree-term-condition').is(':checked')) {
      let data = $('#concierge_form').serialize();
      
      $('#concierge_form').submit();
      console.log(data);
      
//       var action  = '/contact?';
//       action += encodeURIComponent('form_type') +'='+ encodeURIComponent('contact');
//       action += '&'+ encodeURIComponent('utf8') +'='+ encodeURIComponent('✓');
//       action += '&'+ encodeURIComponent('contact[email]') +'='+ encodeURIComponent('max.gaydelis@mail.ru');
//       action += '&'+ encodeURIComponent('contact[body]') +'='+ encodeURIComponent('ghost');
//       console.log(action);
      
//       $.ajax({  
//         type: "POST",  
//         url: "/contact",  
//         data: data,  
//         success: function(res) {
//           console.log(res);
//         }
//       });
      
//       jQuery.ajax({
//         type: 'POST',
//         async: true,
//         url: '/contact',
//         data: data,
//         beforeSend: function() {
//           console.log('sending')
//         },
//         error: function(responseerror) {
//             console.log(responseerror.error.status);
//             if(responseerror.status == 429) {
//               var challengeUrl = window.location.origin +'/challenge#concierge_gorm'
//               window.location = challengeUrl           
//             }
            
//         },
//         success: function(response) {
//        //your success message
//           console.log('success')
//         }
//       }); 
      
//       jQuery.ajax({
//         type: 'POST',
//         async: true,
//       	url: '/contact',
//         data: data,
//         beforeSend: function() {
//           console.log('aaaa');
//         },
//         success: function(res) {
//           console.log(res);
//         },
//         error: function(err) {
//           console.log(err);
//         }
//         type: "POST",
//         async: true,
//         url: action,
//         error: function(jqXHR, textStatus, errorThrown) {
//             //  Request Failed. 
//         },
//         success: function(response) {
//             // Assume Success. 'response' is the complete HTML page of the 
//             // contact success form, so likely won't be helpful
// //             self.submit_thankyou();
//           console.log('ghost')
//         }
//       });
      
      
    } else {
      $('#concierge_form .term-condition-error').removeClass('hide');
      return false;
    }
  });
  
  $('#concierge_form .agree-term-condition').change(function() {
    if ($(this).is(':checked')) {
      $('#concierge_form .term-condition-error').addClass('hide');
    }
  });
  
  	$('#product-image .responsive-image__wrapper').zoom();
  $('#product-image .responsive-image__wrapper').mouseover(function(){
  	$('#product-image .responsive-image__wrapper img').css('display','none');
  });
  
  $('#product-image .responsive-image__wrapper').mouseout(function(){
  	$('#product-image .responsive-image__wrapper img').css('display','block');
  }); 

    
  $('#concierge_form #personal_shopping').change(function() {
    if ($(this).find('input').is(':checked')) {
      $('.concierge-form .personal-shopping').removeClass('hide');

      let str = '<div class="personal-shopping"><h3>' + $(this).find('span').text() + '</h3>';
      str += '<div class="custom-textarea">' +
          '<label for="">Tell us a little bit about what you are looking for?</label>' +
          '<textarea name="personal_shopping[descr1]" rows="10"></textarea></div>' +
        '</div>';

      $('.concierge-form .custom-textareas').append(str);

      str = '<div class="personal-shopping">' +
        '<label for="" class="options-label">Do you have a budget in mind?</label>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[chk1]">' +
            '<span>Up to £500</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[chk2]">' +
            '<span>£500 - £2,500</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[chk3]">' +
            '<span>£2,500 - £5,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[chk4]">' +
            '<span>£5,000 - £15,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[chk5]">' +
            '<span>£15,000 - £25,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[chk6]">' +
            '<span>£25,000 - £50,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[chk7]">' +
            '<span>Over £50,000</span>' +
          '</label>' +
        '</div>' +
      '</div>';

      $('.concierge-form .right-options').html(str);

      str = '<div class="personal-shopping">' +
        '<label for="" class="options-label">This is a gift / This is for me</label>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[gift1]">' +
            '<span>Myself</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="personal_shopping[gift2]">' +
            '<span>Another person</span>' +
          '</label>' +
        '</div>' +
      '</div>';
      
      $('.concierge-form .left-options').append(str);
    } else {
      $('.concierge-form .personal-shopping').addClass('hide');
      $('.concierge-form .custom-textareas .personal-shopping').remove();
    }
  });
  
  $('#concierge_form #remodelling_jewellery').change(function() {
    if ($(this).find('input').is(':checked')) {
      let str = '<div class="remodelling-jewellery"><h3>' + $(this).find('span').text() + '</h3>';
      str += '<div class="custom-textarea">' +
          '<label for="">What piece of jewellery you are looking to remodel and why are you looking to remodel it?</label>' +
          '<textarea name="remodelling_jewellery[descr1]" rows="10"></textarea></div>' +
          '<div class="custom-textarea"><label for="">What were you thinking of turning it into?</label>' +
          '<textarea name="remodelling_jewellery[descr2]" rows="10"></textarea></div>' +
        '</div>';

      $('.concierge-form .custom-textareas').append(str);
    } else {
      $('.concierge-form .custom-textareas .remodelling-jewellery').remove();
    }
  });

  $('#concierge_form #rare_pieces').change(function() {
    if ($(this).find('input').is(':checked')) {
      let str = '<div class="rare-pieces"><h3>' + $(this).find('span').text() + '</h3>';
      str += '<div class="custom-textarea">' +
          '<label for="">What rare piece are you looking for?</label>' +
          '<textarea name="rare_pieces[descr1]" rows="10"></textarea></div>' +
        '</div>';

      $('.concierge-form .custom-textareas').append(str);
    } else {
      $('.concierge-form .custom-textareas .rare-pieces').remove();
    }
  });

  $('#concierge_form #bidding_auction').change(function() {
    if ($(this).find('input').is(':checked')) {
      let str = '<div class="bidding-auction"><h3>' + $(this).find('span').text() + '</h3>';
      str += '<div class="custom-textarea">' +
          '<label for="">What date is the auction?</label>' +
          '<textarea name="bidding_auction[descr1]" rows="10"></textarea></div>' +
          '<div class="custom-textarea"><label for="">Where is the auction?</label>' +
          '<textarea name="bidding_auction[descr2]" rows="10"></textarea></div>' +
          '<div class="custom-textarea"><label for="">Tell us about the lot you are interested in?</label>' +
          '<textarea name="bidding_auction[descr3]" rows="10"></textarea></div>' +
        '</div>';

      $('.concierge-form .custom-textareas').append(str);
    } else {
      $('.concierge-form .custom-textareas .bidding-auction').remove();
    }
  });

  $('#concierge_form #bespoke_commission').change(function() {
    if ($(this).find('input').is(':checked')) {
      let str = '<div class="bespoke-commission"><h3>' + $(this).find('span').text() + '</h3>' +
        '<label for="" class="options-label">Do you have a budget in mind?</label>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="bespoke_commission[chk1]">' +
            '<span>Up to £500</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="bespoke_commission[chk2]">' +
            '<span>£500 - £2,500</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="bespoke_commission[chk3]">' +
            '<span>£2,500 - £5,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="bespoke_commission[chk4]">' +
            '<span>£5,000 - £15,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="bespoke_commission[chk5]">' +
            '<span>£15,000 - £25,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="bespoke_commission[chk6]">' +
            '<span>£25,000 - £50,000</span>' +
          '</label>' +
        '</div>' +
        '<div class="custom-checkbox">' +
          '<label>' +
            '<input type="checkbox" name="bespoke_commission[chk7]">' +
            '<span>Over £50,000</span>' +
          '</label>' +
        '</div>' +
      '</div>';

      $('.concierge-form .custom-textareas').append(str);

      str = '<div class="bespoke-commission">';
      str += '<div class="custom-textarea">' +
          '<label for="">What would you like to commission?</label>' +
          '<textarea name="bespoke_commission[descr1]" rows="10"></textarea></div>' +
        '</div>';

      $('.concierge-form .custom-textareas').append(str);
    } else {
      $('.concierge-form .custom-textareas .bespoke-commission').remove();
    }
  });
  
  $('.concierge--form-button .concierge-form-link').click(function() {
  	let customer_email = $('.concierge--form-button .customer-email').val();
    if (customer_email != '') {
    	location.href = 'concierge-form';
    } else {
      if (confirm('Please log into the site to access our concierge services.')) {
      	location.href = '/account';
      } else {
      	return;
      }
    }
  });
})();