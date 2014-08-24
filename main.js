$(document).ready(function(){
  

  $('#submit').click(function(){
  	//get the values in the star and end date and make a request with them
  	var start = $('#start').val();
  	var end = $('#end').val();

  	getData(start, end);

  	$('#start').val('');
  	$('#end').val('');
  })

  function getData(start, end){
  	var base = 'http://www.ncdc.noaa.gov/swdiws/csv/nx3tvs/';
  	var query = base + start + ':'+ end;
  	alert(query);

  	$.get(query, function(data){
  		  alert(data);
	      var amountStart = data.indexOf('totalCount,') + 11;
	      var amountEnd = data.indexOf('totalTimeInSeconds');
	      var summary = data.slice(amountStart, amountEnd);
	      $('p').text(summary);
    }
  );
  }
});