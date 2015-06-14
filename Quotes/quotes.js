$(document).ready(function(){
	var quoteHTML,authorHTML,quoteURL='http://api.icndb.com/jokes/random';
	function generate(){
		$.ajax({
			url:quoteURL,
			data:{format:'jsonp'},
			dataType:'jsonp',
			success:function(data){
				quoteHTML=data.value.joke;
				$('.quote').empty();
				$('.quote').text(quoteHTML);
				},
			type:'GET',
		});
	}	
	generate();
	
	$('button').click(generate);	
});