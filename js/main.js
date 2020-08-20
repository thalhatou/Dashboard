(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);



//spiner



 //begining of speedometer code

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data = google.visualization.arrayToDataTable([
				['Label', 'Value'],
				['speed', 80],
			
			]);

			var options = {
				width: 700, height: 240,
				redFrom: 90, redTo: 100,
				yellowFrom: 75, yellowTo: 90,
				minorTicks: 5
			};

			var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

			chart.draw(data, options);

			setInterval(function () {
				data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
				chart.draw(data, options);
			}, 13000);
			setInterval(function () {
				data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
				chart.draw(data, options);
			}, 5000);
			setInterval(function () {
				data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
				chart.draw(data, options);
			}, 26000);
		}
//end of speedometer code

//begininig of bar-chart js code
window.onload = function () {

	var chart = new CanvasJS.Chart("chartContainer", {
		theme: "dark2", // "light2", "dark1", "dark2"
		animationEnabled: true, // change to true		
		title: {
			text: "Liquids & Gases"
		},
		data: [
			{
				// Change type to "bar", "area", "spline", "pie",etc.
				type: "column",
				dataPoints: [
					{ label: "Helium", y: 150 },
					{ label: "orange", y: 200 },
					{ label: "Gasoline", y: 160 },
					{ label: "Mercury", y: 190 },
					{ label: "Xenon", y: 170 }
				]
			}
		]
	});
	chart.render();

}
//end of bar-chart js code

//color pallete js
var colorButton = document.getElementById("primary_color");
var colorDiv = document.getElementById("color_val");
colorButton.onchange = function () {
	colorDiv.innerHTML = colorButton.value;
	colorDiv.style.color = colorButton.value;
}


//canvas
