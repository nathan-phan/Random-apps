$(document).ready(function(){
    $('#res').html(0);
    var tempString = '', lastVal = '';
    function displayScreen(x){
        $('#res').html(x);
    }
    var stringScreen = "";
    $('#1').click(function(){
        stringScreen+='1';
        displayScreen(stringScreen);
        lastVal = '1';
    });
    $('#2').click(function(){
        stringScreen+='2';
        displayScreen(stringScreen);
        lastVal = '2';
    });    
    $('#3').click(function(){
        stringScreen+='3';
        displayScreen(stringScreen);
        lastVal = '3';
    });    
    $('#4').click(function(){
        stringScreen+='4';
        displayScreen(stringScreen);
        lastVal = '4';
    });    
    $('#5').click(function(){
        stringScreen+='5';
        displayScreen(stringScreen);
        lastVal = '5';
    });    
    $('#6').click(function(){
        stringScreen+='6';
        displayScreen(stringScreen);
        lastVal = '6';
    });    
    $('#7').click(function(){
        stringScreen+='7';
        displayScreen(stringScreen);
        lastVal = '7';
    });    
    $('#8').click(function(){
        stringScreen+='8';
        displayScreen(stringScreen);
        lastVal = '8';
    });
    $('#9').click(function(){
        stringScreen+='9';
        displayScreen(stringScreen);
        lastVal = '9';
    });
    $('#0').click(function(){
        stringScreen+='0';
        displayScreen(stringScreen);
        lastVal = '0';
    });
    $('#ac').click(function(){
        stringScreen='0';
        displayScreen(stringScreen);
        lastVal = 'ac';
    });
    $('#ce').click(function(){
        stringScreen='0';
        displayScreen(stringScreen);
        lastVal = 'ce';
    });
    $('#plus').click(function(){
        tempString += stringScreen+"+";
        stringScreen="";
        lastVal = 'plus';
    });
    $('#sub').click(function(){
        tempString += stringScreen+"-";
        stringScreen="";
        lastVal = 'sub';
    });
    $('#mod').click(function(){
        if(lastVal!=='plus'||'sub'||'mul'||"divide"||'mod'){
        tempString+= stringScreen+"%";
        stringScreen="";
        lastVal = 'mod';}
        else{
        tempString+= stringScreen;
        stringScreen="";
        }
    });
    $('#mul').click(function(){
        if(lastVal!=='plus'||'sub'||'mul'||"divide"||'mod'){
        tempString+= stringScreen+"*";
        stringScreen="";
        lastVal = 'mul';}
        else{
        tempString+= stringScreen;
        stringScreen="";
        }
    });
    $('#divide').click(function(){
        if(lastVal!=='plus'||'sub'||'mul'||"divide"||'mod'){
        tempString+= stringScreen+"/";
        stringScreen="";
        lastVal = 'divide';}
        else{
        tempString+= stringScreen;
        stringScreen="";
        }
    });
    $('#dot').click(function(){
        stringScreen+='.';
        displayScreen(stringScreen);
        lastVal = 'dot';
    });   
    $('#equal').click(function(){
        tempString+= stringScreen;
        stringScreen = eval(tempString).toString();
        displayScreen(stringScreen);
        stringScreen='';
        tempString='';
    });

});