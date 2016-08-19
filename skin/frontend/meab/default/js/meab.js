// General js
jQuery(document).ready(function(){

	// Animate menu dropdown
	jQuery('li.nav-2.level0.parent, .menu-promo').hover(
		function() {
			jQuery('li.nav-2.level0.parent').addClass("menu-active");
			jQuery('#nav').addClass("show-promo");
		}, function() {
			jQuery('li.nav-2.level0.parent').removeClass("menu-active");
			jQuery('#nav').removeClass("show-promo");
		}
	);
	jQuery('.nav-primary li.level0 ul.level0').hover(
		function() {
			jQuery('.menu-promo').addClass("active");
		}, function() {
			jQuery('.menu-promo').removeClass("active");
		}
	);
	// Fix for tablet hover (to override stuff in app.js)
	jQuery('#nav li.level1 a').on('click touchend', function() {
		var el = jQuery(this);
		var link = el.attr('href');
		window.location = link;
	});
	// Manadev fix
	jQuery('.block.block-layered-nav dl.narrow-by-list dd ol.m-filter-item-list > li > a').on('click', function() {
		var el = jQuery(this);
		var link = el.attr('href');
		window.location = link;
	});
	// Create cookie when popup message closed
	jQuery('#popup_message .close').click(function(){ 
		jQuery.cookie('popup_message', 'popup_closed', { expires: 7, path: '/' });
		jQuery('#popup_message').fadeOut();
		jQuery('body').addClass('no-popup-msg');
	});
	if(jQuery.cookie('popup_message')){
		jQuery('#popup_message').remove();
		jQuery('body').addClass('no-popup-msg');
	}
	// Hide messages if clicked
	jQuery("ul.messages").click(function(){
        jQuery(this).fadeOut(400);
    });
    // Add manadev title
    jQuery('.block-layered-nav .block-content > dl > dt[data-id="m_left_category_filter"]').next('dd').next('dt').before('<div class="filter-title">Filter By</div>');
});
// Fix for Manadev category redirecting
jQuery(document).bind('m-ajax-after', function () {
	jQuery('.block.block-layered-nav dl.narrow-by-list dd ol.m-filter-item-list > li > a').on('click', function() {
		var el = jQuery(this);
		var link = el.attr('href');
		window.location = link;
	});
});
