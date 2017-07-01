$('#query').keyup(function () {
	var value = $('#query').val();
	var rExp = new RegExp(value, "i");
	$.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
		console.log(data);
		//Begin Building Output
		var output = '<ol>';
		$.each(data.RESULTS, function (key, val) {
			if (val.name.search(rExp) != -1) {
				output += "<li>";
				output += '<a href="//www.wunderground.com' + val.l + '" title="See Results for ' + val.name + '">' + val.name +'</a>';
				//output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
				output += '</li>';
			}
		});
		output += '</ol>';
		$('#searchResults').html(output);
	});
});

/*	var output = "<ol>";
		$.each(data.results, function (key, val) {
			if (val.name.search(rExp) != -1) {
				output += "<li>";
				output += "<a href='//www.wunderground.com" + val.l + "'title='See results for " + val.name + "'>" + val.name + "</a>";
				output += "</li>";
			}
		})
		output += "</ol>";
		$("searchResults").html(output);*/
