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
$("#links1").on("click", function () {
	var link = $(this).find("a").html();
	console.log("the link is:" + link);
	replacePro(link);
});
$("#links2").on("click", function () {
	var link = $(this).find("a").html();
	console.log("the link is:" + link);
	$.ajax({
		url: "/acme/js/acme.json",
		dataType: "json",
		success: function (data) {
			var picPath= data.Anvils.path;
			var made = data.Anvils.manufacturer;
			var summary = data.Anvils.description;
			var review= data.Anvils.reviews;
			var price= data.Anvils.price;
			$("#productImage").html("<img src='"+picPath+"'>");
			$("#made").html("<strong>Made By:</strong> "+made);
			$("#summary").html(summary);
			$("#review").html("<strong>Reviews:</strong> "+review);
			$("#price").html("Price: "+ price);
		}
	});
	replacePro(link);
});
$("#links3").on("click", function () {
	var link = $(this).find("a").html();
	console.log("the link is:" + link);
	$.ajax({
		url: "/acme/js/acme.json",
		dataType: "json",
		success: function (data) {
			var picPath= data.Explosives.path;
			var made = data.Explosives.manufacturer;
			var summary = data.Explosives.description;
			var review= data.Explosives.reviews;
			var price= data.Explosives.price;
			$("#productImage").html("<img src='"+picPath+"'>");
			$("#made").html("<strong>Made By:</strong> "+made);
			$("#summary").html(summary);
			$("#review").html("<strong>Reviews:</strong> "+review);
			$("#price").html("Price: "+ price);
		}
	});
	replacePro(link);
});
$("#links4").on("click", function () {
	var link = $(this).find("a").html();
	console.log("the link is:" + link);
	replacePro(link);
});
$("#links5").on("click", function () {
	var link = $(this).find("a").html();
	console.log("the link is:" + link);
	replacePro(link);
});

function replacePro(link) {
	if (link !== "Home") {
		$("#rocket").hide();
		$("#lower-half").hide();
		$("#prod").show();
	} else {
		$("#rocket").show();
		$("#lower-half").show();
		$("#prod").hide();
	}
}
