var decision = confirm('Do you want to play a game?');

if (decision == false){
    console.log('You did not become a millionaire');
} else {
    var tprice = 0;
    var lose = 0;
    for(var i=1;;){
        var n = Math.floor(Math.random() * ((5*Math.pow(2, (i-1))+1) - 0)) + 0;
        var price = 10*Math.pow(3, (i-1));
        var k = 1;
        for(var j=3; j>0; j--){
            var gess = Number(prompt('Enter a number from 0 to '+5*Math.pow(2, (i-1))+'\nAttempts left:'+j+'\nTotal price:'+tprice+'$\nPossible price on current attempt:'+Math.floor(price/k)+'$',0));
            if (gess == n){
                tprice += Math.floor(price/k);
                break;
            } else if (j==1) {
                lose = 1;
            } 
            k*=2
        }
        if (lose==1){
            console.log('Thank you for a game. Your prize is:'+tprice+'$');
            decision = confirm('Do you want to play again?')
            if (decision == false){
                break;
            } else{
                i=1;
                tprice = 0;
                lose = 0;
                k=1;
            }
        } else {
            console.log('Thank you for a game. Your prize is:'+tprice+'$');
            decision = confirm('Do you want to continue a game ?');
            if(decision == false){
                console.log('Thank you for a game. Your prize is:'+tprice+'$');
                break;
            } else {
                i++;
            }
        } 
    }
}


