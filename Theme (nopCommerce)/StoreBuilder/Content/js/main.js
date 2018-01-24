//Pre loader
$(window).load(function(){
    $('.preloader').fadeOut(1000);
});

$(document).ready(function(){  
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
    var wow = new WOW(
        {
            offset: 75,
            mobile: false
        }
    );
    wow.init();
    
    //iCheck
    $('input[type="checkbox"], input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });
});

function OpenWindow(query, w, h, scroll) {
    var l = (screen.width - w) / 2;
    var t = (screen.height - h) / 2;

    winprops = 'resizable=0, height=' + h + ',width=' + w + ',top=' + t + ',left=' + l + 'w';
    if (scroll) winprops += ',scrollbars=1';
    var f = window.open(query, "_blank", winprops);
}