jQuery(document).ready(function($) {

	var state = geoplugin_region();
    var city = geoplugin_city();

	$.ajax({
		url : "http://api.wunderground.com/api/a954d90c3e80bff7/geolookup/conditions/q/" + state + "/" + city + ".json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var location = parsed_json['location']['city'];
			var weather = parsed_json['current_observation']['weather'];
<<<<<<< HEAD
=======
			//alert("Current temperature in " + location + " is: " + weather);
>>>>>>> 2a9b161c402eb6a0955f0b10c65025986a55da35
		}
	});
});
