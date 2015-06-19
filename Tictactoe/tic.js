$(document).ready(function(){ 
   var playerMove = [], compMove=[], filled = [], playerTurn = true,currentSymbol = 'X',
   win=[['a','b','c'],['d','e','f'],['g','h','k'],['a','d','g'],['b','e','h'],['c','f','k'],['a','e','k'],['c','e','g']];
    $('.square').click(place);


    function checkWin(){
        for(i=0;i<win.length;i++){
            if($('#'+win[i][0]).hasClass("X")&&$('#'+win[i][1]).hasClass("X")&&$('#'+win[i][2]).hasClass("X")||$('#'+win[i][0]).hasClass("O")&&$('#'+win[i][1]).hasClass("O")&&$('#'+win[i][2]).hasClass("O")){
                alert((currentSymbol==='X')?'O'+' WINS!':'X'+" WINS!");
                reset();
                playerTurn = true;
            }
        }
        if(filled.length===9){
            alert('TIED!');
            reset();
            playerTurn = true;
        }
    }
    function compPlay(){
        for(m=0;m<win.length;m++){
            if(compMove.indexOf(win[m][0])>=0&&compMove.indexOf(win[m][1])>=0&&!isFilled.apply($('#'+win[m][2]))){
                place.apply($('#'+win[m][2]));
                return 0;
            }
            else if(compMove.indexOf(win[m][0])>=0&&compMove.indexOf(win[m][2]&&!isFilled.apply($('#'+win[m][1])))>=0){
                place.apply($('#'+win[m][1]));
                return 0;
            }
            else if(compMove.indexOf(win[m][1])>=0&&compMove.indexOf(win[m][2]&&!isFilled.apply($('#'+win[m][0])))>=0){
                place.apply($('#'+win[m][0]));
                return 0;
            }
        }
        for(j=0;j<win.length;j++){
            if(playerMove.indexOf(win[j][0])>=0&&playerMove.indexOf(win[j][1])>=0&&!isFilled.apply($('#'+win[j][2]))){
                place.apply($('#'+win[j][2]));
                return 0;
            }
            else if(playerMove.indexOf(win[j][0])>=0&&playerMove.indexOf(win[j][2])>=0&&!isFilled.apply($('#'+win[j][1]))){
                place.apply($('#'+win[j][1]));
                return 0;
            }
            else if(playerMove.indexOf(win[j][1])>=0&&playerMove.indexOf(win[j][2])>=0&&!isFilled.apply($('#'+win[j][0]))){
                place.apply($('#'+win[j][0]));
                return 0;
            }
        }
        if(playerMove.length===1&&!isFilled.apply($('#e'))){
            place.apply($('#e'));
            return 0;
        }
        else if(!isFilled.apply($('#a'))&&isFilled.apply($('#e'))&&!isFilled.apply($('#f'))&&!isFilled.apply($('#h'))){
            place.apply($('#a'));
            return 0;
        }
        else if(!isFilled.apply($('#a'))&&isFilled.apply($('#e'))){
            place.apply($('#k'));
            return 0;
        }
        else if(compMove.length===1&&isFilled.apply($('#a'))){
            place.apply($('#c'));
            return 0;
        }
        else{
            for(n=0;n<win.length;n++){
                if(compMove.indexOf(win[n][0])>=0&&!isFilled.apply($('#'+win[n][1]))&&!isFilled.apply($('#'+win[n][2]))){
                place.apply($('#'+win[n][2]));
                return 0;
                }
                else if(compMove.indexOf(win[n][1])>=0&&!isFilled.apply($('#'+win[n][0]))&&!isFilled.apply($('#'+win[n][2]))){
                place.apply($('#'+win[n][0]));
                return 0;
                }
                else if(compMove.indexOf(win[n][2])>=0&&!isFilled.apply($('#'+win[n][0]))&&!isFilled.apply($('#'+win[n][1]))){
                place.apply($('#'+win[n][0]));
                return 0;
                }
            }
            for(t=0;t<win.length;t++){
                for(k=0;k<3;k++){
                    if(!isFilled.apply($('#'+win[t][k]))){
                        place.apply($('#'+win[t][k]));
                        return 0;
                    }
                }
            }

            
        }

    }

    function isFilled(){
        if(filled.indexOf($(this).attr('id'))>=0) 
            return true;
        else
            return false;
    }

    function place(){
        if(!isFilled.apply($(this))){
        $(this).addClass(currentSymbol);
        $(this).html(currentSymbol);
        filled.push($(this).attr('id'));
        if(playerTurn===true){
            playerMove.push($(this).attr('id')); 
            playerTurn=false;
            currentSymbol=(currentSymbol==='X')? "O":"X";
            compPlay();
        }
        else if(playerTurn===false){
            compMove.push($(this).attr('id'));
            playerTurn=true;
            currentSymbol=(currentSymbol==='X')? "O":"X";
        }
        checkWin();   
        }
    }

    $('#button1').click(function(){
        reset();
        playerTurn = true;
        start();
    });
     $('#button2').click(function(){
        reset();
        playerTurn = false;
        start();
    });


   function reset(){
    playerMove = [];
    filled = [];
    compMove=[];
    $('.square').html('');
    $('.square').removeClass('X');
    $('.square').removeClass('O');
    currentSymbol = 'X';
   }

   function start(){
     if(playerTurn===false&&filled.length===0){
        place.apply($('#e'));
     }
    }


});