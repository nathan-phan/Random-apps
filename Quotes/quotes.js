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
	
	$('#gen-button').click(generate);
		
	$('#tweet-button').click(function(){
		var url='https://twitter.com/intent/tweet?text='+quoteHTML;
		window.open(url);
	});
});