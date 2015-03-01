jQuery(document).ready(function($) {

	var state = geoplugin_region();
    var city = geoplugin_city();

	$.ajax({
		url : "http://api.wunderground.com/api/a954d90c3e80bff7/geolookup/conditions/q/" + state + "/" + city + ".json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var location = parsed_json['location']['city'];
			var weather = parsed_json['current_observation']['weather'];
		}
	});
});