for (var i = 0; i < works.length; i++) {
	$('#work-items').append("\
	    	<div class='col-lg-3'>\
	    	<div class='portfolio-item'>\
	    		<span class='work-name'" + works[i].name + " ></span>\
	     	<a href='" + works[i].link + "' class='work-img weblink' style='text-decoration: none; font-size: 1.2em; color:salmon'>\
	    	<img class='img-responsive img-thumbnail' style='height: 150px; width: 300px' src='" + works[i].pic + "'>\
	    	<span class='info'><p class='proj-title'></p>" + works[i].title + "</span>  \
	    	</a>\
	    	<a href='" + works[i].github + "' class='work-img github' style='text-decoration: none; color: DodgerBlue; font-size: 1.2em'> Github\
	    	</a>\
	    	</div>\
	     </div>\
	      ");
	var images = $("#work img");
	if (i % 2 === 0) {
		$(images[i]).css("border", "2px solid DodgerBlue");
	}
	else {
		$(images[i]).css("border", "2px solid salmon");
	};
};

$("head").append($("<link rel='stylesheet' href='../../css/styles.css' type='text/css' />"));
