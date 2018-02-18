function getClosestToZero(){
    var ctz = Infinity;
    for(var i=0; i<arguments.length; i++){
        if(arguments[i]==0){
            ctz = 0;
            break;
        }
        if(Math.abs(arguments[i])<ctz){
            ctz = arguments[i];
        }
    }
    return ctz;
}