function fibonacci (n){
    if(n<=1) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

const memoizedFibonacci = (function () {
    const cache = {}
    return function (n) {
        if(n in cache) {
            return cache[n];

        } else {
            const result = fibonacci(n)
            cache[n] = result
            return result
        }
    };
})();

console.log(memoizedFibonacci(10))
console.log(fibonacci(10))