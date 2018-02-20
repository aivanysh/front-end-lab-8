function decypherPhrase(obj,str){
    var deobj=[];
    for (el in obj){
        deobj[obj[el]]=el;
    }
    return cypherPhrase(deobj,str);
}




