// Current Location Scripts
$(function () {

	var status = $('#status');
	console.log("here1");
	(function getGeoLocation() {
		status.text('Getting Location...');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var lat = position.coords.latitude;
				var long = position.coords.longitude;
				console.log("here2");
				// Call the getData function, send the lat and long
				getData(lat, long);

			});
		} else {
			status.text("Your browser doesn't support Geolocation or it is not enabled!");
		}

	})();

	// Get the data from the wunderground API
	function getData(lat, long) {
		console.log("here3");
		$.ajax({
			url: "http://api.wunderground.com/api/fc63cfd847a03075/geolookup/conditions/q/" + lat + "," + long + ".json",

			dataType: "jsonp",
			success: function (parsed_json) {
				var location = parsed_json['location']['city'];
				var temp_f = parsed_json['current_observation']['temp_f'];
				var state=parsed_json['location']['state'];
				var summary=parsed_json ['current_observation']['weather'];
				var windSpeed =parsed_json ['current_observation']['wind_mph'];
				var feelslike =parsed_json ['current_observation']['feelslike_f'];
				$("#currentTemp").html(Math.round(temp_f) + "&#8457");
			
				$("#cityDisplay").html(location+","+state);
				$(".titleCity").text(location+","+state);
				$("title").text(location+","+state+" "+"Weather Home");
				$("#summary").html(summary);
				$("#add1").html("The windspeed is "+windSpeed+" MPH.");
				$("#add2").html("It actually feels like "+ feelslike +"&#8457.");
				
			}
		});





		$("#cover").fadeOut(250);
	}
});



// A function for changing a string to TitleCase
function toTitleCase(str) {
	return str.replace(/\w+/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}




//$.getJSON("http://api.wunderground.com/api/fc63cfd847a03075/geolookup/conditions/q/" + lat + "," + long + ".json", function (lat, long, status,response) {
//					if (status === "sucess") {
//						var data = response;
//			//check back to video 2 on this
//					}
//
