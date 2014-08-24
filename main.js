$(document).ready(function(){
  $.get(
    'http://www.ncdc.noaa.gov/swdiws/csv/nx3tvs/20060505:20060506',
    function(data){
      var amountStart = data.indexOf('totalCount,') + 11;
      var amountEnd = data.indexOf('totalTimeInSeconds');
      var summary = data.slice(amountStart, amountEnd);
      $('p').text(summary);
    }
  );
});