function cypherPhrase(obj,str){
    var NewPhrase = getTransformedArray(str, function(n){
        if (obj[n]){
            return obj[n];
        } else {
            return n;
        }
    })
    return NewPhrase.join("");
}
