//Pre loader
$(window).load(function(){
    $('.preloader').fadeOut(1000);
});

$(document).ready(function(){
    //Backstretch Slideshow
	$(".slideshow").backstretch(
        [
            "assets/img/slider/slider-img1.jpg",
            "assets/img/slider/slider-img2.jpg",
            "assets/img/slider/slider-img3.jpg"
        ],
        {
            fade: 750,
            duration: 4000
        });
    
    //Owl carousel
    var isPause;
        
    $("#testimonial").owlCarousel({	 
		navigation: true,
		pagination: false,
		slideSpeed: 500,
		paginationSpeed: 400,
		singleItem: true,
        startDragging: pauseOnDragging,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});
    
    //pause while dragging 
    function pauseOnDragging() {
        isPause = true;
    }
    
    //Fancybox
    $(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
			
		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},
		
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});
    
    //Auto height for blog section
    var h3 = '.blog-thumb h3';
    var h3Elements = $(h3);
    var maximumHeight = 0;
    
    if (h3Elements != null) {
        for (var i = 0; i < h3Elements.length; i++) {
            var height = $(h3Elements[i]).height();
            if (height > maximumHeight) {
                maximumHeight = height;
            }
        }
		h3Elements.css("height", maximumHeight);
    }
    
    //wow js - Animation js
    var wao = new WOW(
        {
            offset: 75,
            mobile: false
        }
    );
    wao.init();
    
    //iCheck
    $('input[type="checkbox"], input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });

    //Datapicker
    $('#DateOfBirthDay').datepicker({ format: 'yyyy/mm/dd' });

    //Newsletter
    $('#subscription-submit').click(function () {
        alert('You have been subscribed');
    });
    $("#newsletter-email").keydown(function (event) {
        if (event.keyCode == 13) {
            $("#subscription-submit").click();
            return false;
        }
    });
});