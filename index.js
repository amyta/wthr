jQuery(document).ready(function($) {
	$.ajax({
		url : "http://api.wunderground.com/api/a954d90c3e80bff7/geolookup/conditions/q/TX/Dallas.json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var location = parsed_json['location']['city'];
			var weather = parsed_json['current_observation']['weather'];
			alert("Current temperature in " + location + " is: " + weather);
		}
	});
});