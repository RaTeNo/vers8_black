$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		loop: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		
	})


	// Основной слайдер на главной
	 var owl = $('.main_slider2 .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		loop: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onInitialized: function(event){
			setTimeout(function(){
				let dotsOffset = $(event.target).find('.owl-next').offset()

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 10)
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let dotsOffset = $(event.target).find('.owl-next').offset()

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 10)
				)
			}, 100)
		}
	})


	// Основной слайдер на главной
	var owl2 =$('.main_slider3 .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: false,		
		loop: false,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,		
	})

	 // Custom Button
	$('.customNextBtn').click(function() {
	    owl2.trigger('next.owl.carousel');
	});
	$('.customPreviousBtn').click(function() {
	    owl2.trigger('prev.owl.carousel');
	});


	// Отзывы
	$('.reviews .slider').owlCarousel({
		items: 2,
		margin: 73,
		nav: true,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : true,
		dots: false,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 0
	        },
	        768:{
	            items: 2,
	            margin: 0
	        },
	        1024:{
	            items: 3,
	            margin: 0
	        },
	        1200:{
	            items: 3,
	            margin: 0
	        }
		}		
	})


	// Статьи
	$('.articles .slider').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : false,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 0
	        },
	        768:{
	            items: 2,
	            margin: 0
	        },
	        1024:{
	            items: 3,
	            margin: 0
	        },
	        1200:{
	            items: 3,
	            margin: 0
	        }
		}
	})


	// Видео отзывы
	$('.video_reviews .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		loop: false,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 0
	        },
	        768:{
	            items: 2,
	            margin: 0
	        },
	        1024:{
	            items: 3,
	            margin: 0
	        },
	        1200:{
	            items: 3,
	            margin: 0
	        }
		},		
	})


	// Акции
	$('.stocks .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 0
	        },
	        768:{
	            items: 2,
	            margin: 0
	        },
	        1024:{
	            items: 3,
	            margin: 0
	        },
	        1200:{
	            items: 3,
	            margin: 0
	        }
		},
		
	})


	// Сотрудники
	$('.team .slider').owlCarousel({
		items: 1,
		margin: 73,
		nav: true,
		dotsEach : true,
		dots: false,
		loop: false,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 0
	        },
	        768:{
	            items: 2,
	            margin: 0
	        },
	        1024:{
	            items: 2,
	            margin: 0
	        },
	        1200:{
	            items: 3,
	            margin: 0
	        }
		},
		
	})


	// Вакансии
	$('.vacancies .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
	navText: [
			'<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.91702 0.200195C7.61269 0.200195 7.30803 0.312201 7.07611 0.532446L0.34878 6.90462C-0.11626 7.34511 -0.11626 8.05829 0.34878 8.49766L7.07611 14.8698C7.54115 15.3103 8.29409 15.3103 8.75794 14.8698L8.86015 14.773C9.32519 14.3325 9.32519 13.6193 8.86015 13.18L4.26531 8.82771H19.8106C20.4672 8.82771 21 8.323 21 7.70114C21 7.07927 20.4672 6.57457 19.8106 6.57457H4.26531L8.86015 2.2223C9.32519 1.78181 9.32519 1.06862 8.86015 0.629261L8.75794 0.532446C8.52542 0.312201 8.22135 0.200195 7.91702 0.200195Z" fill="white"/></svg>',
	        '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.083 0.200195C13.3873 0.200195 13.692 0.312201 13.9239 0.532446L20.6512 6.90462C21.1163 7.34511 21.1163 8.05829 20.6512 8.49766L13.9239 14.8698C13.4589 15.3103 12.7059 15.3103 12.2421 14.8698L12.1399 14.773C11.6748 14.3325 11.6748 13.6193 12.1399 13.18L16.7347 8.82771H1.18936C0.532833 8.82771 0 8.323 0 7.70114C0 7.07927 0.532833 6.57457 1.18936 6.57457H16.7347L12.1399 2.2223C11.6748 1.78181 11.6748 1.06862 12.1399 0.629261L12.2421 0.532446C12.4746 0.312201 12.7786 0.200195 13.083 0.200195Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 0
	        },
	         768:{
	            items: 2,
	            margin: 0
	        },
	        1024:{
	            items: 3,
	            margin: 0
	        },
	        1200:{
	            items: 3,
	            margin: 0
	        }
		},
		
	})


	// Меню в шапке
	$('header .menu').flexMenu({		
		showOnHover: true,
		linkText: '<span>ОСТАЛЬНОЕ</span>',
		linkTitle: '',
		linkTextAll: 'Меню',
	})

	//социальные сети
	if($('.mob_scroll .socials a').length>4)
	{
		$(".mob_scroll .socials a").eq(2).after($('<a href="/" class="more"><img src="./images/dot2.svg" alt=""><div class="arrow"><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5L0 0L9 0L4.5 5Z" fill=""/></svg></div><div class="more_block"></div></a>'));
		$('.mob_scroll .socials a').each(function( index, element ) {
			if(index>3)
			{
				$(element).clone(true).appendTo(".mob_scroll .more_block");
				(element).remove();
			}
		});
	}
	$('body').on('click', '.mob_scroll .more_block a', function(e) {
		var href = $(this).attr('href');
      	window.open(href, '_blank');
	});

	$('body').on('click', '.mob_scroll a.more', function(e) {
    	e.preventDefault()
    });


	if($('.mob_header .socials a').length>4)
	{
		$(".mob_header .socials a").eq(2).after($('<a href="/" class="more"><img src="./images/dot2.svg" alt=""><div class="arrow"><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5L0 0L9 0L4.5 5Z" fill=""/></svg></div><div class="more_block"></div></a>'));
		$('.mob_header .socials a').each(function( index, element ) {
			if(index>3)
			{
				$(element).clone(true).appendTo(".mob_header .more_block");
				(element).remove();
			}
		});
	}
	$('body').on('click', '.mob_header .more_block a', function(e) {
		var href = $(this).attr('href');
      	window.open(href, '_blank');
	});


	$('body').on('click', '.mob_header a.more', function(e) {
    	e.preventDefault()
    });



	if($('.mob_header .contacts a').length>2)
	{	
		$('.mob_header .contacts a').each(function( index, element ) {
			if(index>2)
			{
				$(element).clone(true).appendTo(".mob_header .more_block").addClass("new_contact");
				(element).remove();
			}
		});
	}



	// Фильтр
	$('body').on('click', 'aside .mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			$('aside .filter').fadeOut(200)
			$('.overlay').fadeOut(200)
		} else {
			$(this).addClass('active')
			$('aside .filter').fadeIn(300)
			$('.overlay').fadeIn(300)
		}
	})

	$('aside .filter .close, .overlay, aside .block .title .close').click(function(e){
		e.preventDefault()
	    $('aside .mob_filter_link').removeClass('active')
		$('aside .filter').fadeOut(200)
		$('.overlay').fadeOut(200)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
        type     : 'double',
        min      : 0,
        max      : 10000,
        from     : 1000,
        to       : 5000,
        step     : 10,
        postfix  : ' ₽'
    }).data("ionRangeSlider")


    // Таймер
	$('.timer').each(function(){
		let timerDate = $(this).data('date')


		$(this).countdown(timerDate, function(event) {
			let daysArr = event.strftime( '%D' ).split('')
			let hoursArr = event.strftime( '%H' ).split('')
			let minutesArr = event.strftime( '%M' ).split('')
			let secondsArr = event.strftime( '%S' ).split('')

			$(this).html( event.strftime(String()
				+ '<div class="item">'
					+ '<div class="val"><span>'+daysArr[0]+'</span><span>'+daysArr[1]+'</span></div>'
					+ '<div>дней</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+hoursArr[0]+'</span><span>'+hoursArr[1]+'</span></div>'
					+ '<div>часов</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+minutesArr[0]+'</span><span>'+minutesArr[1]+'</span></div>'
					+ '<div>минут</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+secondsArr[0]+'</span><span>'+secondsArr[1]+'</span></div>'
					+ '<div>секунд</div>'
				+ '</div>'
				) )
		})
	})


	// До/После
	$('.before_after .item').each(function(){
		$(this).beforeAfter()
	})


	// Фото с маркерами
	$('.image_tips .image .btn').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.image')
		let info = $(this).data('info')

		if( $(this).parents('.item').hasClass('active') ) {
			parent.find('.item').removeClass('active')
			parent.find('.info').hide()
		} else {
			parent.find('.item').removeClass('active')
			parent.find('.info').hide()

			$(this).parents('.item').addClass('active')
			parent.find(info).fadeIn(300)
		}
	})

	$('.image_tips .image .close').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.image')

		parent.find('.item').removeClass('active')
		parent.find('.info').hide()
	})


	// Квиз-Опрос
	$('.quiz_poll .step .links .next').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.steps')
		let nextStep = $(this).data('step')

		if($(this).hasClass("valide"))
		{
			let check = $(this).parent().prev().find("input");

			if(check.val()!="")
			{	
				check.removeClass("error");			
				parent.find('.step').hide()
				parent.find(nextStep).fadeIn(300)
			}
			else
			{
				check.addClass("error");
			}
		}
		else
		{
			parent.find('.step').hide()
			parent.find(nextStep).fadeIn(300)
		}
	})


	$("input[name='agree']").change(function () {
		if (this.checked) {
			$(this).closest("form").find("button").prop("disabled", false);
		}
		else
		{
			$(this).closest("form").find("button").prop("disabled", true);
		}
	});

	$('.product_delete').click(function(e){
		e.preventDefault();
		$(this).parent().parent().remove();
	});


	// Покупка товара
	$('.product_info .buy .buy_link').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.btn')

		$(this).addClass('bounceOut')
		parent.find('.order_link').delay(750).fadeIn(300)
	})

	// Социальная выпадашка
	$('header .socials a.more, .mob_header .socials a.more').click(function(e){
		e.preventDefault()
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active")
		}
		else
		{
			$(this).addClass("active")
		}
		
	})

	$('.products_sort_mobile .schema-order__link').click(function(e){
		e.preventDefault()	
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(".schema-order__popover").hide();
		}	
		else
		{
			$(this).addClass("active");
			$(".schema-order__popover").show();
		}

	})


	// Логотип
	$('.resizeble-font').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 33 ) {
        	size = 33
        }

        if( size < 16 ) {
        	size = 16
        }
        size2 = size+4
        $(this).css('font-size', size + 'px').css('line-height', size2 + 'px')
    })

    $('.resizeble-font2').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 16 ) {
        	size = 16
        }

        if( size < 10 ) {
        	size = 10
        }

        $(this).css('font-size', size + 'px')
    })


    $('.resizeble-font3').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 48 ) {
        	size = 48
        }

        if( size < 14 ) {
        	size = 14
        }

        size2 = size+3

        $(this).css('font-size', size + 'px').css('line-height', size2 + 'px')
    })


    $('.apply').click(function(e){
		//e.preventDefault()
		let color1 =  $(".color1").val();
    	let color2 =  $(".color2").val();

		localStorage.setItem('color1', color1);
		localStorage.setItem('color2', color2);

		window.location.reload(true)
	});

	$('.clear').click(function(e){
		//e.preventDefault()
		localStorage.removeItem('color1');
		localStorage.removeItem('color2');
		window.location.reload(true)
	});

		

    let color1 = localStorage.getItem('color1');
    let color2 = localStorage.getItem('color2');

    if(color1!=null)
    {
	    $(".color1").val(color1);
	    $(".color2").val(color2);

	    var root = document.querySelector(':root');
	    root.style.setProperty('--main_color1', color1);
	    root.style.setProperty('--main_color2', color2);

	    let rgba = hexDec(color1);
	    
	    root.style.setProperty('--box-shadow-color', "rgba("+rgba+",0.35)");

	    let rgba_opacity = hexDec(color2);

	    root.style.setProperty('--main_color_opacity', "rgba("+rgba_opacity+",0.03)");	    
    }






	/*SVG CHANGE*/

	var svg = '<svg width="401" height="533" viewBox="0 0 401 533" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.500512" fill-rule="evenodd" clip-rule="evenodd" d="M5.17365 110.794C39.0314 -33.7922 378.639 -36.0159 397 100.005C415.361 236.026 350.954 533 247.612 533C144.27 533 -28.6841 255.38 5.17365 110.794Z" fill="'+color2+'"/></svg>';

	var encoded = window.btoa(svg);	
	document.styleSheets[0].addRule('.advantages .flex:after, .articles .cont:after, .reviews .slider_wrap:after, .services .flex:after, .video_reviews .cont:after, .prices .flex::after, .stocks .slider:after, .team .slider:after,.vacancies .slider:after',"background-image: url(data:image/svg+xml;base64,"+encoded+") !important;");


	/*var svg = '<svg width="1436" height="227" viewBox="0 0 1436 227" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.346308" fill-rule="evenodd" clip-rule="evenodd" d="M713.339 226.999C417.57 227.324 121.084 87.1585 8.69902 27.7328C-4.74331 20.6249 0.415885 1.56702 15.6217 1.55033L1420.3 0.00887955C1435.55 -0.0078495 1440.72 19.1058 1427.22 26.1958C1313.61 85.8808 1013.83 226.67 713.339 226.999Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="1447.71" y1="226.235" x2="1447.47" y2="-0.775067" gradientUnits="userSpaceOnUse"><stop stop-color="'+color2+'" stop-opacity="0.303813"/><stop offset="1" stop-color="'+color2+'" stop-opacity="0.01"/></linearGradient></defs></svg>';

	var encoded = window.btoa(svg);	
	document.styleSheets[0].addRule('.block.bg',"background-image: url(data:image/svg+xml;base64,"+encoded+") !important;");*/




	console.log($(".main .block:last-child").css("background-color"));
	if($(".main .block:last-child").css("background-color")=="rgb(247, 247, 247)")
	{
		$(".main .block:last-child").addClass("remove_margin");
	}


	 equalHeight($(".stocks .stock .thumb + .info"));

	  equalHeight($(".products  .product .info"));


})

function hexDec(h){
	var m=h.slice(1).match(/.{2}/g);
	 
	m[0]=parseInt(m[0], 16);
	m[1]=parseInt(m[1], 16);
	m[2]=parseInt(m[2], 16);
	 
	return(m.join(','));
 };

 function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}



	 
$(window).scroll(function() {	
	if($("body").hasClass("header_fixed"))
	{
		if($(window).width() > 1023)
		{
			if ($(window).scrollTop() > 0) {
				$('header').addClass('fixed')
				if($("div").is(".warning"))
				{
					$('header').css("top", $(".warning").innerHeight()+"px")
				}	
			} else {
				$('header').removeClass('fixed')
				if($("div").is(".warning"))
				{
					$('header').css("top", "0px")
				}	
			}

		}
		else 
		{
			if ($(window).scrollTop() > 0) {
				$('.mob_header').addClass('fixed')
				if($("div").is(".warning"))
				{
					$('.mob_header').css("top", $(".warning").innerHeight()+"px")
				}	
			} else {
				$('.mob_header').removeClass('fixed')
				if($("div").is(".warning"))
				{
					$('.mob_header').css("top", "0px")
				}
			}
		}
	}
})


