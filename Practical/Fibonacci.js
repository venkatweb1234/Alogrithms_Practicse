// The Fibonacci sequence is a series of numbers
// in which each number is the sum of the
// two preceding ones
function IterFibonacci(n) {
  const fib = [0, 2];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
  return fib;
}

console.log(IterFibonacci(5));
