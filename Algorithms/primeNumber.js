function isPrime(n) {
    if(n < 2){
        return "não é primo"
    }

    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return "não é primo"
        }
    }

    return "é primo"
}

console.log(isPrime(13))