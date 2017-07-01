var returned;

function getData(input) {
	$.ajax({
		url: "//api.wunderground.com/api/fc63cfd847a03075/geolookup/conditions/q/" + input + ".json",
		dataType: "jsonp",
		success: function (data) {
			console.log(data);
			var location = data.location.city + ', ' + data.location.state;
			var temp_f = data.current_observation.temp_f;
			var Wspeed = data.current_observation.wind_mph;
			var feelLike= data.current_observation.feelslike_f;
			console.log('Location:' + location);
			console.log('temp: ' + temp_f);
			//Will add connection soon, just need to see if it works
			$("#overview").text(location);
			$("title").html(location + " | Weather Center");
			$("#cityDisplay").html(location);
			$("#currentTemp").html(Math.round(temp_f) + '°F');
			$("#summary").html(toTitleCase(data.current_observation.icon));
			$("#status").text("");
			$("#add1").html("The wind speed today is "+Wspeed+"MPH");
			$("#add2").html("It actually feels like "+feelLike+"°F");

		}
	});
}


$('#query').keyup(function (evt) {

	var value = $('#query').val();
	var rExp = new RegExp(value, "i");
	$.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
		console.log(data);
		returned = data;
		//Begin Building Output
		var output = '<ol>';
		$.each(data.RESULTS, function (key, val) {
			if (val.name.search(rExp) != -1) {
				output += "<li>";
				output += '<a href="//www.wunderground.com' + val.l + '" title="See Results for ' + val.name + '">' + val.name + '</a>';
				//output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
				output += '</li>';

			}
		});
		output += '</ol>';
		$('#searchResults').html(output);
	});

})
$("#searchResults").on("click", "a", function (evt) {
	evt.preventDefault();
	// With the text value get the needed value from the weather.json file
	var jsonCity = $(this).html(); // Franklin, etc...
	console.log(jsonCity);
	$();
	getData(jsonCity);
	var index = $(this).index("a");

});
function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
