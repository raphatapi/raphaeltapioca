
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
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $('#logo').click(function(){
      $('html, body').animate({scrollTop : 0},600);
      return false;
    });

    //Add navbar on scroll
    $(document).on('scroll', function (e) {
        $('.navbar').css('opacity', ($(document).scrollTop() / 500));
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

