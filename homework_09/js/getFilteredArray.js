function getFilteredArray(arr,myFunc){
    var TransArr = [];
    var i=0;
    forEach(arr,function(n){
        if (myFunc(n)){
            TransArr[i] = n;
            i++;
        }
    })
    return TransArr;
}
