var temp;
var location;
var icon;
var humidity;
var wind;

var latitude;
var longitude;
var apiCall;

function update(weather) {
	temp.innerHTML = weather.temp;
	location.innerHTML = weather.location;
	humidity.innerHTML = weather.humidity;
	wind.innerHTML = weather.wind;
	icon.src = `imgs/code/${weather.icon}.png`;

}

window.onload = function() {
	/* code here */
	// temp = $("#temperature");
	// location = $("#location");
	// icon = $("#icon");
	// humidity = $("#humidity");
	// wind = $("#wind");

	// var weather = {};
	// weather.temp = 70;
	// weather.location = "Providence";
	// weather.humidity = `5%`;
	// weather.wind = 3.5;
	// weather.icon = 200;
	function yourWeather(latitude, longitude) {
		var api = apiCall;

		$.ajax({

			url: api,
			success: function(forecast){
				$("#location").text(forecast.name);

				var tempC = Math.round(forecast.main.temp);
				var tempF = Math.round(tempC * (9/5) + 32);

				$("#temp").text(tempF + ' F')


			}
		})
	}




	function yourLocation() {

		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(pos){

			latitude = pos.coords.latitude;
			longitude = pos.coords.longitude;

			apiCall = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
			});
		} else {
			$("#title").text('No Location');
		}
	}


	// update(weather);

};