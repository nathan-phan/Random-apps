$(document).ready(function(){
	var gridHTML, finalHTML ='', feedsURL='http://www.freecodecamp.com/stories/hotStories';
	function showGrid(data){
		for(i=0;i<data.length;i++){
			gridHTML='';
			gridHTML+="<div class ='grid-item'><img class = 'grid-img' src='";
			gridHTML+=data[i].author.picture;
			gridHTML+="'><div class ='grid-text'><a class ='grid-title' href='";
			gridHTML+=data[i].link+"'>"+data[i].headline+"</a><a class ='grid-votes' href ='";
			gridHTML+="http://www.freecodecamp.com/news/"+data[i].headline+"'>"+data[i].upVotes.length +" upvote(s)";
			gridHTML+="</a><a class = 'grid-author' href='"+"http://www.freecodecamp.com/"+data[i].author.username+"'>";
			gridHTML+=data[i].author.username+"</a></div></div>";
			finalHTML+=gridHTML;
		}
		$('.grid').append(finalHTML);
		$('.grid').imagesLoaded(function(){
			$('.grid').masonry({
  			itemSelector: '.grid-item',
  			columnWidth: 250
		});
		});
		
	}
	$.getJSON(feedsURL,showGrid);
});
