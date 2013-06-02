$(document).ready(function(){
	/* your code goes here */
	var $slides = $('#slides').find('li');
	var slideCount = $slides.length;
	var nextSlideIndex = 0;
	var submitted = 0; 

	setInterval(function(){

		var $activeSlide = $slides.filter('.active');

		if(nextSlideIndex < slideCount - 1) {
			nextSlideIndex++;
		} else {
			nextSlideIndex = 0;
		}

		$slides.eq(nextSlideIndex).show();

		$activeSlide.fadeOut(500, function(){
			$activeSlide.removeClass('active');
			$slides.eq(nextSlideIndex).addClass('active');
		});

	}, 5000);


	//contact form validation
	$('#submit-button').click(function(e){
		var markup = ""; 
		
		// if true, at least two neighborhoods have been checked 
		var atLeastTwoChecked = $('input[name="neighborhoods[]"]:checked').length > 1;
		
		if ( !$('#first-name').val() ) {
			e.preventDefault(); 
			markup += "<p>First Name is required.</p>";
		}
		if ( !$('#last-name').val() ) {
			e.preventDefault();
			markup += "<p>Last Name is required.</p>";
		}

		if (!atLeastTwoChecked) {
			e.preventDefault();
			markup +="<p>Select at least 2 neighborhoods.</p>";
		}

		// show red required alerts if form has been submitted 
		if (submitted == 0) {
			submitted++; 
		}

		$('#first-name').focus();
		$('.alert').html(markup).slideDown(50);

		console.log(atLeastTwoChecked);
		console.log(submitted);

	});

	



});