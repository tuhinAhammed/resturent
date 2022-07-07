
    // animation counter js start here

    $('.menu').animationCounter({
        start: 0,
        end: 150,
        step: 3,
        delay: 100,
        txt: ''
        });

    $('.store').animationCounter({
        start: 0,
        end: 40,
        step: 1,
        delay: 100,
        txt: 'K'
        });

            
    $('.country').animationCounter({
        start: 0,
        end: 64,
        step: 2,
        delay: 100,
        txt: ''
        });

// animation counter js start here

// slick slider js start here
$('.slider-box').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
// slick slider js end here

// wow js start here
    wow = new WOW(
        {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
        }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
        var section = document.createElement('section');
        section.className = 'section--purple wow fadeInDown';
        this.parentNode.insertBefore(section, this);
    };
// wow js end here
