function factorial(n) {
    let ans = 1;
    let aux = 1;
    let resp = "";

    for (let i = 2; i <= n; i++){
        ans *= i;
        console.log(`${i} * ${aux} = ${ans}`)
        aux = ans;
    }

    return ans;
}

console.log(factorial(5));

// BIG-O = O(n) (complexidade linear devido a 1 loop simples)