function fibonacci(n){
    const fib = [0, 1]

    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib
}

console.log(fibonacci(14))

// BIG-O = O(n) (complexidade linear devido a 1 loop simples)
