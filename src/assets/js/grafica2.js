


 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChart);
 function drawChart() {
   var data = google.visualization.arrayToDataTable([
     ['Task', 'Hours per Day'],
     ['Cliente 5',     11],
     ['Cliente 2',      2],
     ['Cliente 3',  2],
     ['Cliente 4', 2],
     ['Cliente 1',    7]
   ]);

   var options = {
     title: 'Ventas por Cliente',
     is3D: false,
   };

   var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
   chart.draw(data, options);
 }



