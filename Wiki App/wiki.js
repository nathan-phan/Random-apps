$(document).ready(function(){
	$("#search").keyup(function(event){
    	if(event.keyCode === 13){
        $("#search-button").click();
    	}
    });

    $("#search-button").click(function(){
        $('.result').remove();
    	var url="https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch="+$("#search").val()+"&utf8=&callback=?";	
    	var resultHTML='';
    	function displayResult(data){
    		for(i=0;i<data.query.search.length;i++){
    			resultHTML='';
    			resultHTML+="<div class ='result'>"+"<a href='https://en.wikipedia.org/wiki/"+ data.query.search[i].title.replace(" ","_")  + "'><h3 class ='result-title'>"+data.query.search[i].title;
    			resultHTML+="</h3><br><h4 class = 'result-text'>"+data.query.search[i].snippet+"...</h4></a></div>";

    		$('body').append(resultHTML);	
    		}
    	}
    	$.getJSON(url,displayResult);
	});
    
    $("#explore").click(function(){
        var url2="http://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&callback=?";
        function randomPage(data2){
            for(var key in data2.query.pages){
                var x = key;
            }
            var url3="http://en.wikipedia.org/?curid="+x;
            window.location.href=url3;
        }
        $.getJSON(url2,randomPage);
    });

});