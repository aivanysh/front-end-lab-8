var s =Number(prompt('Введіть сумму $',0));
var e = Number(prompt('Введіть сумму Є',0));

var sk = 27.7424;
var ek = 34.5116;

if ((isNaN(s) || isNaN(e)) || (s<0 || e<0)){
    console.log('Incorrect data');
}   else{
    console.log(e+' euros are equal '+(e*ek).toFixed(2)+' UAH, '+s+' dollars are equal '+(s*sk).toFixed(2)+' UAH, one euro is equal '+(ek/sk).toFixed(2)+' dollars.')
}    