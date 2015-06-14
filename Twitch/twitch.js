var streamers = ["freecodecamp","streamerhouse", "storbeck","scarra", "terakilobyte","medryBW", "habathcx","RobotCaleb","comster404","brunofin","thomasballinger","noobs2ninjas","beohoff"];
$(document).ready(function() {
	var streamerHTML="";
	var twitchLink='https://api.twitch.tv/kraken/streams/';

	function findOnline(data){
		if(data.stream!=null){
			function displayOnlineStream(data2){
				streamerHTML='';
				streamerHTML += "<li class ='list-group-item channel'><a href=" + data2.url+ "><img class ='img-circle img-responsive logo pull-left' src=";
				if(data2.logo ==null){
					streamerHTML+="https://pbs.twimg.com/profile_images/476838450231279617/ms8WXAup.jpeg";
				}	
				else{
					streamerHTML+=data2.logo;
				}

				streamerHTML+= "><div class = 'channel_block'><div class = 'channel_name'>"
								+data2.display_name+"</div>";
				streamerHTML+="<img class='pull-right light' src='http://pso-clan.com/twitch/lib/images/online.png'>";			
				streamerHTML+="<div class ='description'>"+data2.status;
				streamerHTML +="</div></a></li>";

				$('#online-list').append(streamerHTML);	
				$('#all-list').append(streamerHTML);	
			}
			$.getJSON(data._links.channel +'.json?callback=?',displayOnlineStream);
		}
		else{
			function displayOfflineStream(data2){
				console.log(data2);
				streamerHTML='';
				streamerHTML += "<li class ='list-group-item channel'><a href=" + data2.url+ "><img class ='img-circle img-responsive logo pull-left' src=";
				if(data2.logo ==null){
					streamerHTML+="https://pbs.twimg.com/profile_images/476838450231279617/ms8WXAup.jpeg";
				}	
				else{
					streamerHTML+=data2.logo;
				}
				streamerHTML+= "><div class = 'channel_block'><div class = 'channel_name'>"
								+data2.display_name+"</div>";
				streamerHTML+="<img class='pull-right light' src='http://pso-clan.com/twitch/lib/images/offline.png'>";			
				streamerHTML+="<div class ='description'>";
				streamerHTML +="</div></a></li>";

				$('#offline-list').append(streamerHTML);	
				$('#all-list').append(streamerHTML);	
			}
			$.getJSON(data._links.channel+'.json?callback=?',displayOfflineStream);
		}
	}
	for(i=0;i<streamers.length;i++){
		$.getJSON(twitchLink+streamers[i]+'?callback=?',findOnline);

	}

	
});
