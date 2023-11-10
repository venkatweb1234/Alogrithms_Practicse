function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    console.log("i", i);
    console.log("result", result);
    result = result * i;
  }
  return result;
}

// console.log(factorial(0)); //1
// console.log(factorial(1)); //1
console.log(factorial(5)); //120

// Big -O = O(n) Liner Time Complexity
