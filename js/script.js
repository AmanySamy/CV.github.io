/*global $, alert, console */

$(function() {
	'use strict';
	
	$('html').niceScroll();

	$('[data-toggle="tooltip"]').tooltip();

	$(".port").hover(
		function(){
		$(this).children().first().slideDown();
		},
		function(){
		$(this).children().first().slideUp();
		}
	);

	$(".main-page").css("height",$(".side-page").height());

});