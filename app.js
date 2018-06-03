$(document).ready(function(){

	// get weather data by city
	$("#submitCoords").click(function(){

		var latitude = $("#latitude").val();
		var longitude = $("#longitude").val();

		if (latitude != "" && longitude != "") {

			$.ajax({

				url: `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`,
				type: "GET",
				dataType: "json",
				success: function(data) {

					// console.log(data);

					$("#city").text(data.name);

					var tempC = Math.round(data.main.temp);
					$("#temperature").text(`${tempC} Degrees Celcius`);
					$("#weather").text(data.weather[0].main);
					$("#description").text(data.weather[0].description);

				}

			});

		} else {
			$("#error").html("Please Enter a Location");
		}

	});

	$("#unitswitch").click(function() {
		var temperature = parseInt(document.getElementById("temperature").innerHTML);
		console.log(temperature);
		if ($("#temperature").attr("value") == 'celcius') {
			console.log('switching to fahrenheit');
			var tempF = parseInt(temperature * 9/5 + 32);
			$("#temperature").text(`${tempF} Degrees Fahrenheit`)
											 .attr("value", "fahrenheit");
			$("#unitswitch").text("Celcius");
		} else {
			console.log('switching to celcius');
			var tempC = parseInt(temperature * 5/9 - 32);
			$("#temperature").text(`${tempC} Degrees Celcius`)
											 .attr("value", "celcius");

			$("#unitswitch").text("Fahrenheit");
		}
	});

	$("#yourCoords").click(function() {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(pos){

				var latitude = pos.coords.latitude;
				var longitude = pos.coords.longitude;

				$.ajax({

					url: `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`,
					type: "GET",
					dataType: "json",
					success: function(data) {

					console.log(data);

					$("#city").text(data.name);

					var tempC = Math.round(data.main.temp);
					$("#temperature").text(`${tempC} Degrees Celcius`);

					$("#description").text(data.weather[0].description);

				}

			});

			});
		}

	});
});