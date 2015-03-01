jQuery(document).ready(function($) {

	var state = geoplugin_region();
    var city = geoplugin_city();

	$.ajax({
		url : "http://api.wunderground.com/api/a954d90c3e80bff7/geolookup/conditions/q/" + state + "/" + city + ".json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var weather = parsed_json['current_observation']['weather'];
			var temp = parsed_json['current_observation']['temp_f'];
			$("#currentTemp").text(temp + "\u00B0F");
			$("#currentWeather").text(weather);
			$("#city").text("Your current location: " + city + ", " + state);
		}
	});

	$.ajax({
		url : "http://api.wunderground.com/api/a954d90c3e80bff7/hourly/q/" + state + "/" + city + ".json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var high = -150;
			var low = 200;
			for (i = 0; i < parsed_json['hourly_forecast'].length; i++){
				highAndLow = parsed_json['hourly_forecast'][i]['temp']['english'];
				if (highAndLow > high){
					high = highAndLow;
				}
				if (highAndLow < low){
					low = highAndLow;
				}
			}
			$("#highAndLow").text(high + "\u00B0F | " + low + "\u00B0F");
		}
	});
});
