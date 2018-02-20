function getTransformedArray(arr,myFunc){
    var TransArr = [];
    var i=0;
    forEach(arr,function(n){
        TransArr[i] = myFunc(n);
        i++;
    })
    return TransArr;
}




