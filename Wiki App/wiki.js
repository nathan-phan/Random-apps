$(document).ready(function(){
	$("#search").keyup(function(event){
    	if(event.keyCode === 13){
        $("#search-button").click();
    	}
    });

    $("#search-button").click(function(){
    	alert($('#search').val());
	});
});