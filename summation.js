function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

let res = summation(4)
console.log(res)