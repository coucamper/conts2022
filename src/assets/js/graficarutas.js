

 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawVisualization);

 function drawVisualization() {
   // Some raw data (not necessarily accurate)
   var data = google.visualization.arrayToDataTable([
     ['Month', 'Gijón Larga', 'Oviedo Larga', 'Avilés Larga', 'Oriente', 'Occidente', 'Media'],
     ['2021/01',  938,      780,         522,             168,           350,      614.6],
     ['2021/02',  135,      1120,        599,             1268,          288,      682],
     ['2021/03',  157,      1167,        587,             807,           397,      623],
     ['2021/04',  139,      1110,        615,             968,           215,      609.4],
     ['2021/05',  136,      691,         629,             1026,          366,      569.6]
   ]);

   var options = {
     title : 'Recogida mensual por ruta',
     vAxis: {title: ''},
     hAxis: {title: 'Mes'},
     seriesType: 'bars',
     series: {5: {type: 'line'}}
   };

   var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }



