$(document).ready(function(){
    var running,seconds = parseInt($('.session-time').html())*60;
     var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
     var audio = new Audio(wav);
        function displayTime(sec){
        var hours = Math.floor(sec/3600);
        if(hours===0){
            hours="";
        }
        else if(10>hours&&hours>0){
            hours ="0"+hours.toString()+":";
        }
        else{
            hours = hours.toString()+":";
        } 
        var minutes =(sec>=3600)? Math.floor((sec%3600)/60): Math.floor(sec/60);
        if(minutes ===0){
            minutes = "00";
        }
        else if(10>minutes&&minutes>0){
            minutes ="0"+minutes.toString();
        } 
        else{
            minutes = minutes.toString(); 
        }
        var second = (sec%3600)%60;

        if(second ===0){
            second = "00";
        }
        else if(0<second&& second<10){
            second = "0"+ second.toString();
        }
        else{
            second = second.toString();
        }
        return hours+minutes+":"+ second;
    }

    
	$('button').click(function(){
        if($('button').html()==='Stop'){
            $('button').html('Run');
            running = false;
            stopTimer();
        }
        else{          
            $('button').html('Stop');  
            runTimer();
            running = true;
        }
    });

    $('.add-break').click(function(){
        if(running!==true){
        var x = parseInt($('.break-time').html());
        if($('.description').html()==='Break'){
            seconds = (x+1)*60;
            $('.main-timer').html(displayTime(seconds));
        }
        $('.break-time').html(x+1);
         }
    });
    $('.sub-break').click(function(){
        if(running!==true){
        var y = parseInt($('.break-time').html());
            if(y>=2){
                if($('.description').html()==='Break'){
                 seconds = (y-1)*60;
                $('.main-timer').html(displayTime(seconds));
                }
                $('.break-time').html(y-1);
            }
        }   
    });
    $('.add-session').click(function(){
        if(running!==true){
        var m = parseInt($('.session-time').html());
        if($('.description').html()==='Session'){
            seconds = (m+1)*60;
            $('.main-timer').html(displayTime(seconds));
        }
        $('.session-time').html(m+1);}
    });
    $('.sub-session').click(function(){
        if(running!==true){
        var n = parseInt($('.session-time').html());
        if(n>=2){
        if($('.description').html()==='Session'){
            seconds = (n-1)*60;
            $('.main-timer').html(displayTime(seconds));
            }
        $('.session-time').html(n-1);
        }
      }  
    });
    var timer;
    function runTimer(){
        timer = setInterval(function(){
        seconds--;
        $('.main-timer').html(displayTime(seconds));
        if(seconds===0&&$('.description').html()==='Break'){
            audio.play();
            $('.description').html('Session');
            seconds = parseInt($('.session-time').html())*60;
        }
        else if(seconds===0&&$('.description').html()==='Session'){
            audio.play();
            $('.description').html('Break');
            seconds = parseInt($('.break-time').html())*60;
        }
        },1000);
    }
    function stopTimer(){
        clearInterval(timer);
    }

});