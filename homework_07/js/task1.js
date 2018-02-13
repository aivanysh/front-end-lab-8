var n =Number(prompt('Enter natural number N (0<N<=20)',0));


if (Number.isInteger(n) & n>0 & n<=20){
    var block = '[~]';
    var empblock = '   ';

    var pyramid = '';

    for (var i=1; i<=n; i++){
        pyramid += empblock.repeat(n-i)+block.repeat((i-1)*2+1)+'\n';
    }
    console.log(pyramid);
} else {
    console.log('Incorrect data')
}   