var selectLink = "";
var jsonData = null;
//Gets the links ready
$(".link").ready(function () {
	$.ajax({
		url: "/acme/js/acme.json",
		dataType: "json",
		success: function (data) {
			console.log(data);
			$("#links1").html("<a href='#'>" + data.nav.link0 + "</a>");
			$("#links2").html("<a href='#'>" + data.nav.link1 + "</a>");
			$("#links3").html("<a href='#'>" + data.nav.link2 + "</a>");
			$("#links4").html("<a href='#'>" + data.nav.link3 + "</a>");
			$("#links5").html("<a href='#'>" + data.nav.link4 + "</a>");
			$("#prod").hide();
		}
		//want to use onclick events when you select the links
	});

})
$("nav").on("click", "a", function () {
	var link = $(this).text();
	console.log("the link is:" + link);
	if (link !== "Home") {
		$("#rocket").hide();
		$("#lower-half").hide();
		$("#prod").show();;

		$.ajax({
			url: "/acme/js/acme.json",
			dataType: "json",
			success: function (data) {
				console.log(data);
				var picPath = (data[link].path);
				var made = (data[link].manufacturer);
				var summary = (data[link].description);
				var review = (data[link].reviews);
				var price = (data[link].price);
				$("#productImage").html("<img src='" + picPath + "'>");
				$("#made").html("<strong>Made By:</strong> " + made);
				$("#summary").html(summary);
				$("#review").html("<strong>Reviews:</strong> " + review);
				$("#price").html("Price: " + price);
			}
			
		});
	} else {
		$("#rocket").show();
		$("#lower-half").show();
		$("#prod").hide();
	}
});
