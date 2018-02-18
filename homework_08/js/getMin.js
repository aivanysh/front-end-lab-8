function getMin(){
    if(arguments.length == 0){
        return undefined;s
    }
    var min = Infinity;
    for(var i=0; i<arguments.length; i++){
        if(arguments[i]<min){
            min = arguments[i];
        }
    }
    return min;
}