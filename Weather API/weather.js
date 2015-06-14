$(document).ready(function(){
	var url1 = 'http://api.wunderground.com/api/d51659598f484170/geolookup/q/autoip.json';
	function showLocation(data){
		var url2 = 'http://api.wunderground.com/api/d51659598f484170/conditions/q/'+data.location.zip+'.json';
		$('.location').html(data.location.city+', '+data.location.state);
		function showWeather(data2){
			$('img').attr('src', data2.current_observation.icon_url);
			$('.f').html(data2.current_observation.temp_f+" F");
			$('.c').html(data2.current_observation.temp_c+ " C");
			$('.status').html(data2.current_observation.weather);
		}
		$.getJSON(url2,showWeather);
	}
	$.getJSON(url1,showLocation);

	$('button').click(function (){
		if($('.f').css('display')==='block'){
			$('.f').css('display','none');
			$('.c').css('display','block');
		}
		else if($('.f').css('display')==='none'){
			$('.c').css('display','none');
			$('.f').css('display','block');
		}

	});
});