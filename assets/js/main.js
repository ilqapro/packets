$(function() {
    let isMobile = $('html').width() <= 767 ? true : false;

    if( isMobile ) {
        $('body').removeClass('do-css-hover')
    }

    $('body').on('click', 'a[href*="#"]', function(e) {
        var target = this.hash;
    
        if( target == '#!' ) return;
    
        var $target = $(target);
    
        if( ! $target ) return;
    
        $('html, body').stop().animate({
          scrollTop: $target.offset().top - $('.siteHeader').outerHeight()
        }, 500)
    })

    $('body').on('click', '[data-open_popup]', function(e) {
        e.preventDefault()
        $('.popup.active').removeClass('active')
        $('.popup#' + $(this).data('open_popup')).addClass('active')
    })
    $('body').on('click', '.popup-close', function() {
        $(this).closest('.popup').removeClass('active')
    })

    $('.upButton').on('click', function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500)

        return false;
    })

    $('.faq-item').on('click', function() {
        let $answer = $(this).find('.faq-item--answer');
        
        if( $(this).hasClass('active') ) {
          $answer.slideUp(500)
        } else {
          $answer.slideDown(500)
        }
    
        $(this).toggleClass('active')
    })

    $('.faq-block').each(function() {
        $(this).find('.faq-item').first().click()
    })

    setInterval(function() {
        $scollTop = $(window).scrollTop()
        if( $scollTop > $(window).height() / 2 ) {
            $('.upButton').addClass('active')
        } else {
            $('.upButton').removeClass('active')
        }
    }, 1000)

    $('.siteHeader-burger').on('click', function() {
        $('.siteHeader-menu').toggleClass('active')
    })

    $('.productHero-image').fillColor({
        opacity: '0.5'
    })

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

})