var lat;
var long;

$(document).ready(function() {

	function getLocation(){

	var options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};

	function success(pos) {
	  var crd = pos.coords;

	  console.log('Your current position is:');
	  console.log(`Latitude : ${crd.latitude}`);
	  console.log(`Longitude: ${crd.longitude}`);
	  console.log(`More or less ${crd.accuracy} meters.`);
	  lat = crd.latitude;
	  long = crd.longitude;

	}

	function error(err) {
	  console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);

	}
});

// 	getLocation();

// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(function(position){

// 			lat = position.coords.latitude;
// 			long = position.coords.longitude;
// 		});

// 		var weatherURL = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long;
// 		console.log(weatherURL);

// 		$.getJSON(weatherURL, function(data){

// 			const f = (data.main.temp * 1.8) +32;
// 			var icon = data.weather[0].icon;
// 			$("#temp").html(parseInt(f));
// 			$("#temp").append(parseInt(f));

// 		});

// 	}

// });

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function (positon) {
		long = positon.coords.longitude;
		lat = positon.coords.latitude;

		var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;
		$.getJSON(api, function (data) {
			const f = (data.main.temp * 1.8) + 32;
			var icon = data.weather[0].icon;
			var img = "<img src=" + icon + ">";

			$("#city").html(data.name);
			$("#img").html(img);
			$("#cond").html(data.weather[0].main);
			$("#temp").html(parseInt(f) + "&#176");
			$("#toggle").attr("value", "F");
			$("#toggle").on("click", function () {

				if (document.getElementById("toggle").value == "F") {
					$("#temp").html(parseInt(data.main.temp) + "&#176");
					$("#toggle").attr("value", "C");
				}
				else {
					if (document.getElementById("toggle").value == "C") {
						$("#temp").html(parseInt(f) + "&#176");
						$("#toggle").attr("value", "F");
					}
				}
			});
		});
	});
}
