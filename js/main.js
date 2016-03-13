$(window).on('scroll',function(){
	//if the distance the user has scrolled down the page is more than or equal to >= the distance from the top to nav
	var scrollHeight = $(window).scrollTop();
	if (scrollHeight >= 200) {
		$('nav').addClass('scrolled');
		// Add a class to show the div.
	}
		//if thedistance scrolled is less than the nav height remove the class scrolled
	if (scrollHeight <= 200) {
		$('nav').removeClass('scrolled');
		// console.log(scrollHeight);
	}
});

var navHeight = $('nav').offset().top;
console.log(navHeight);

$(document).ready(function (){
		// window.scrollTo(0,0);
		$('html, body').animate({scrollTop: '0'}, 500);
});

$('.nav_button').on('click', function(){
	// event.preventDefault();
	var matchingDiv = $(this).data('section');
	console.log(matchingDiv);
	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top-70}, 1500);
	// if (matchingDiv === "resume_section") {
	// 	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top}, 1200);
 //        // window.scrollTo(0,615)});
	// }
});

// GLOBAL VARIABLES	
	// image urls - set up an array
	var images = ["images/Engagement/engagement_1.jpg", "images/Engagement/engagement_2.jpg", "images/Engagement/engagment_3.jpg", "images/Engagement/engagement_4.jpg", "images/Engagement/engagement_5.jpg"];

	// set all image likes at 0
	// var likes = [0,0,0,0,0,0];
	
	// keep track of current position
	var currentImage = 0;


// when the user clicks on "next" button
$('#next').on('click', function () {
	// Add 1 to the current image position
	currentImage += 1;
	console.log(currentImage);
	// Enable previous button
	$('#prev').prop('disabled',false);
	// Display the next image
	$('#image_show').attr('src', images[currentImage]);
	// // Show likes that correspond to image
	// $('#votes').html('Likes: ' + likes[currentImage]);
	// // If the user is on the last image (image 6, position 5)
	if (currentImage === 5) {
		//Disable next button
		$('#next').prop('disabled','true')
	}
});
	


// when the user clicks the "previous" button
$('#prev').on('click', function () {
	// Enable next button
	$('#next').prop('disabled',false);
	// Subtract 1 from current image position
	currentImage -= 1;
	// Display the previous image
	$('#image_show').attr('src', images[currentImage]);
	// Display the votes that correspond with the image
	// $('#votes').html('Likes: ' + likes[currentImage]);

	// If the user is on the first image (image 1, position 0)
	if (currentImage === 0){
		// Disable previous image
		$('#prev').prop('disabled',true);
	}
});


// when user clicks on engagement image
$('#play_button').on('click',function () {
	$('#engagement_video_img').addClass('hide');
	$('iframe').addClass('show');
});

$('.sidebar .li_data').on('click', function(){
	// event.preventDefault();
	var matchingDiv = $(this).data('section');
	console.log(matchingDiv);
	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top +300}, 1200);
	// if (matchingDiv === "resume_section") {
	// 	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top}, 1200);
 //        // window.scrollTo(0,615)});
	// }
});

$('.hamburger').on('click',function(){
	$('body').addClass('active');
	$('.nav').addClass('hide');
});

$('.sidebar p').on('click', function (e){
	e.preventDefault();
	$('body').removeClass('active');
	$('.nav').removeClass('hide');
});





