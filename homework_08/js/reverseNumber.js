function reverseNumber(n){
    var reverse = 0;
    while (n != 0) {
        reverse *= 10;
        reverse += n % 10;
        n -= n % 10;
        n /= 10;
    }

    return reverse;
}
