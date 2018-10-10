// Twitter
! function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		p = /^http:/.test(d.location) ? 'http' : 'https';
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = p + '://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js, fjs);
	}
};
$(document, 'script', 'twitter-wjs');
//facebook
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$(document).ready(function() {
	// Smooth scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function() {
			window.location.hash = href;
		});
		return false;
	});
	// CONTACT FORM
   var orange = '#ff9744';
   var white = '#fffaf6';
   var red = '#ff6944';
   var grey = '#ccc';

   $('.message-box').on('keyup', function () {
     var charCount = $('.message-box').val().length;
     $('#char-count').html(charCount);
     if (charCount > 50) {
       $('#char-count').css('color', 'red');
     } else {
       $('#char-count').css('color', white);
     }
   });

   $('#submit-form').on('click', function () {
     var name = $('#name').val();
     var phone = $('#tel').val();
     var email = $('#email').val();
     var message = $('#message').val();
     if (name === '') {
       $('#name').css({
         'background-color': orange,
         'border': '2px solid ' + red
       });
     } else if (email === '') {
       $('#name').css({
         'background-color': white,
         'border': '1px solid ' + grey
       });
       $('#email').css({
         'background-color': orange,
         'border': '2px solid ' + red
       });
     } else if (message === '') {
       $('#email').css({
         'background-color': white,
         'border': '1px solid ' + grey
       });
       $('#message').css({
         'background-color': orange,
         'border': '2px solid ' + red
       });
     } else {
       console.log('Name: ' + name, 'Email: ' + email, 'Phone: ' + phone, 'Message: ' + message);
       $('#visible-name').html(name);
       if (phone === '') {
         $('#visible-tel').html('Number not supplied');
       } else {
         $('#visible-tel').html(phone);
       };
       $('#visible-email').html(email);
       $('#visible-message').html(message);
       $('#visible-message-received').html('Message received - thanks!');
       $('#name').hide();
       $('#tel').hide();
       $('#email').hide();
       $('#message').hide();
       $('#submit-form').hide();
       $('.visible-form').css('padding', '5px');
       return false;
     }
   });
		// WORK SECTION

	   for (var i = 0; i < works.length; i++) {
	     $('#work').append("\
	    	 <div class='col-sm-3 col-md-3' style='width: 20em; height: 20em;' >\
	       <span class='info' style='font-size: 2em'><p class='proj-title'></p>" + works[i].name + "</span>  \
	       <a href='" + works[i].link + "' class='work-img weblink' style='text-decoration: none; font-size: 1.2em; color:salmon'>\
	       <img class='img-responsive img-thumbnail' style='height: 150px; width: 300px' src='" + works[i].pic + "'>\
	       <span class='info'><p class='proj-title'></p>" + works[i].title + "</span>  \
	       </a>\
	       <a href='" + works[i].github + "' class='work-img github' style='text-decoration: none; color: DodgerBlue; font-size: 1.2em'> Github\
	       </a>\
	       </div>\
	      ");
			var images = $("#work img");
			if(i%2 === 0) {
				$(images[i]).css("border", "2px solid DodgerBlue");
			} else {
				$(images[i]).css("border", "2px solid salmon");
			};
		};
		$(".work-img").mouseenter(function() {
			$(".info", this).show();
		});
		$(".work-img").mouseleave(function() {
			$(".info", this).hide();
		});
	});

	var marker;

	function initMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: {lat: 59.325, lng: 18.070}
	  });

	  marker = new google.maps.Marker({
	    map: map,
	    draggable: true,
	    animation: google.maps.Animation.DROP,
	    position: {lat: 59.327, lng: 18.067}
	  });
	  marker.addListener('click', toggleBounce);
	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}