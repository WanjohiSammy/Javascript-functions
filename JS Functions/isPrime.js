//Check if number is prime return true
function isPrime(num) {
    var prime = true;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
        }
    }
    return (num < 2) ? false : prime;
}



function isPrime(num) {
    if (num <= 1) return false;
    for (i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}