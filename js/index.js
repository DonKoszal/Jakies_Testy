'use strict';

$(document).ready(function(){
	// $(".dupa .foo").append(" jest głupi");

	$(window).keydown(function(event){
		var player = $("#player");
		var top = parseInt($("#player").css('top'));
		var left = parseInt($("#player").css('left'));
		switch(String.fromCharCode(event.which)) {
			case 'W':
				player.css({'top': (top - 100) + "px"});
				break;

			case 'A':
				player.css({'left': (left - 100) + "px"});
				break;

			case 'S':
				player.css({'top': (top + 100) + "px"});
				break;

			case 'D':
				player.css({'left': (left + 100) + "px"});
				break;
		}
	});
});