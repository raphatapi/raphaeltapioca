$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $('#logo').on('click', function(){
      $('html, body').animate({scrollTop : 0},600);
      return false;
    });

    

    $('[data-toggle="popover"]', '#upkeep').popover({
      html: true,
      trigger: 'hover',
      placement: 'left',
      content: function(){return '<img src="'+$(this).data('img') + '" height="250" width="550" />';}
    });

    $('[data-toggle="popover"]', '#purple').popover({
      html: true,
      trigger: 'hover',
      placement: 'right',
      content: function(){return '<img src="'+$(this).data('img') + '" height="250" width="550" />';}
    });
});

$(function() {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0)
			$('.navbar').stop().animate({'opacity':'0'},0);
		else	
			$('.navbar').stop().animate({'opacity':'1'},200);
	});
	
	// $('.navbar').hover(
	// 	function (e) {
	// 		var scrollTop = $(window).scrollTop();
	// 		if(scrollTop != 0){
	// 			$('.navbar').stop().animate({'opacity':'1'},150);
	// 		}
	// 	},
	// 	function (e) {
	// 		var scrollTop = $(window).scrollTop();
	// 		if(scrollTop != 0){
	// 			$('.navbar').stop().animate({'opacity':'0'},150);
	// 		}
	// 	}
	// );
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if ($('body').scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#myBtn").fadeIn({queue: false, duration: '1s'});
    } else {
        $("#myBtn").fadeOut({queue: false, duration: '1s'});
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({scrollTop : 0},600);
      return false;
}