$(document).ready(function() {
// adds sticky nav bar when user scrolls past header section
    $('.js--section-do').waypoint(function(direction) {
        if (direction == 'down'){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
// Scroll on buttons
    $('.js--scroll-to-do').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-do').offset().top}, 1000);
    });
    
    $('.js--scroll-to-portfolio').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000);
    });
    
// mobile nav
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon i');
        console.log("click event worked!");
        console.log(nav);
        console.log(icon);
        
        nav.slideToggle(200);
        icon.toggleClass('ion-navicon-round').toggleClass('ion-close-round');
        
    });
    
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    
});




