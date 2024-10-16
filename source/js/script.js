(function ($) {
  'use strict';

  // PRELOADER
  $(window).on('load', function () {
    $('#page-loader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.has-dropdown .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}


  // SCROLL TO TOP
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.scroll-to-top').removeClass('reveal');
    }
  });



  // Fixed header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      // Add class to change header style
      $('.site-navigation,.trans-navigation').addClass('header-white');
    } else {
      // Remove class to revert header style
      $('.site-navigation,.trans-navigation').removeClass('header-white');
    }
  });
  

	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function (event) {
    $('.navbar-collapse').collapse('hide');
  });

})(jQuery);


$(document).ready(function () {
  // Smooth scroll for internal links
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      // Get the target ID from the href attribute
      var target = this.hash;

      // Make sure the target exists before trying to scroll
      if ($(target).length) {
          var $target = $(target);

          // Smooth scroll to the target element
          $('html, body').animate({
              scrollTop: $target.offset().top
          }, 800, 'swing');
      } else {
          console.error("Target not found:", target);
      }
  });
});


// Email
document.addEventListener('DOMContentLoaded', function() {
  // Add an event listener to the form
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Collect form data
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      console.log(name, email, phone, subject, message);

      // Initialize EmailJS if not already done (replace with your userID)
      emailjs.init('z-9ngJex4qmo_JMK7'); // Add your EmailJS user ID

      // Use EmailJS to send the form data
      emailjs.send('service_adgniqv', 'template_5wy19de', {
          from_name: name,
          from_email: email,
          from_phone: phone,
          subject: subject,
          message: message
      }).then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          
          // Show success message
          document.getElementById('success-message').style.display = 'block';

          // Optionally clear the form fields
          form.reset();
      }, function(error) {
          console.log('FAILED...', error);
          alert('There was an error sending your email. Please try again later.');
      });
    });
  } else {
    console.error('Contact form not found.');
  }
});


