

 google.charts.load("current", {packages:["timeline"]});
 google.charts.setOnLoadCallback(drawChart);
 function drawChart() {

   var container = document.getElementById('example3.1');
   var chart = new google.visualization.Timeline(container);
   var dataTable = new google.visualization.DataTable();
   dataTable.addColumn({ type: 'string', id: 'Position' });
   dataTable.addColumn({ type: 'string', id: 'Name' });
   dataTable.addColumn({ type: 'date', id: 'Start' });
   dataTable.addColumn({ type: 'date', id: 'End' });
   dataTable.addRows([
     [ 'M1', 'Abdel', new Date(2021, 7, 5), new Date(2021, 7, 11) ],
     [ 'M2', 'Enrique', new Date(2021, 7, 11), new Date(2021, 7, 18) ],
     [ 'MT1', 'Filipe', new Date(2021, 7, 18), new Date(2021, 7, 25) ],
     [ 'MT2', 'Rodrígo', new Date(2021, 7, 5), new Date(2021, 7, 11)],
   [ 'MD', 'Wilfredo', new Date(2021, 7, 5), new Date(2021, 7, 25)],
   ]);

   chart.draw(dataTable);
 }



