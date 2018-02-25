var open = false;

function Drop(n) {
	var i;
	if (open == false) {
		for (i = n; i < 5; i++) {
			Drp(i)
		}
		open = true
	} else if (open == true) {
		for (i = n; i < 5; i++) {
			Cls(i)
		}
		open = false
	}
}

function Drp(n) {
	var elem = document.getElementsByClassName("menu-con")[n];
	var pos = -1 * window.innerHeight - n * 100;
	var id = setInterval(frame, 5);

	function frame() {
		if (pos >= -10) {
			clearInterval(id);
			elem.style.top = 0 + 'px';
		} else {
			pos += 10;
			elem.style.top = pos + 'px';
		}
	}
}

function Cls(n) {
	var elems = document.getElementsByClassName("menu-con")[n];
	var poss = 0;
	var ids = setInterval(frames, 5);

	function frames() {
		if (poss <= -1 * window.innerHeight) {
			clearInterval(ids);
			elems.style.top = -1 * window.innerHeight + 'px';
		} else {
			poss += -7 - n * 2;
			elems.style.top = poss + 'px';
		}
	}
}


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

