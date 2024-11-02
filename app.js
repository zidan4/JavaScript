function fib(n){
   let result
   for (let i = 0; i < n; i++) {
    result = result[i - 1] + result[i - 2]
   }
   return result
}

fib(10)
