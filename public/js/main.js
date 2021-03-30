
function main() {

(function () {
  console.log('main');
   'use strict';
   
  	$('a.page-scroll').click(function(e) {
      
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

  // Hide nav on click
  $(document).ready(function(e) { 
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });
  });

	
	
    // Nivo Lightbox 
    
		
}());


}
main();

$(function () {
  $('.portfolio-item a').nivoLightbox({
      effect: 'slideDown',  
      keyboardNav: true,                            
  });
  $('a.page-scroll').on('click', function(e){
   e.preventDefault();
   console.log('click-main');
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top - 20
       }, 900);
       return false;
     }
   }
  });
});