var a =Number(prompt('Введіть сторону  А',0));
var b = Number(prompt('Введіть сторону  B',0));
var c = Number(prompt('Введіть сторону  C',0));

var trtype = '';

if ((isNaN(a) || isNaN(b) || isNaN(c)) || (a<=0 || b<=0 || c<=0)){
    console.log('Incorrect data');
}   else{
    var p = (a+b+c)/2;
    var trsqr = Math.sqrt(p*(p-a)*(p-b)*(p-c));


    if(a==b & b==c){
        trtype = 'equilateral';
    } else if (a*a == b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b){
        trtype = 'right'; 
    } else if(a==b || b==c || c==a ){
        trtype = 'isosceles';    
    } else if (a!==b && b!==c && c!==a){
        trtype = 'scalene';
    } else {
        trtype = 'unknown'
    }

    console.log('Type of triangle is '+trtype+ ' triangle and square is ' + (Math.round(trsqr * 100)) / 100);
}
    