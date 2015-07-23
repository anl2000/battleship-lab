$(document).ready(function(){
    battleInit();
    //Variables you have access to:
    //totalShipCount = number of ships that have been spawned on the board
    //board = 2D array/matrix of boolean values. True means that a ship is in that space, false means that there is no ship.
  
  var shots = 25;
  $ ('#fire').click(function() {
    shots = shots - 1;
    $('.shots_rem').html(shots);
    

    
    var row_str = $('#row').val();
    var row = parseInt(row_str);
    // makes the row an integer using the value the user typed
    var column_str = $('#column').val();
    var column;
    // have to make column an integer but column is a letter
    
    switch(column_str) {
    case 'A':
        column = 1;
        break;
    case 'B':
        column = 2;
        break;
    case 'C':
        column = 3;
        break;
    case 'D':
        column = 4;
        break;
    case 'E':
        column = 5;
        break;
    case 'F':
        column = 6;
        break;
    case 'G':
        column = 7;
        break;
    case 'H':
        column = 8;
        break;
     default:
         break;
};
    
    
    if (board[row][column] == true) {
      //change the html from wave to bomb
      $((".row" + row_str).filter(".col" + column_str)).html('💣');
      console.log('true statement');
    } else {
      // change the html from wave to miss emoji
      $((".row" + row_str).filter(".col" + column_str)).html('🙅');
      console.log('not true statement');
      }  
    
  
  
 });  
  }); 
    
 
                

  
  
  
  

