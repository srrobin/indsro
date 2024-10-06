(function ($) {
	"use strict";

    jQuery(document).ready(function($){

          $(".homepage-slider").owlCarousel({ 
		    items:1, 
			nav:true,
			dots:false,
			autoplay:true,
			loop:true,
			slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
			navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] 
		  
		  });
       



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	