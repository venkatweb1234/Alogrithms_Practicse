function climbStairCase(n) {
  const noOfways = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfways[i] = noOfways[i - 1] + noOfways[i - 2];
  }
  return noOfways[n - 1];
}

console.log(climbStairCase(1));
console.log(climbStairCase(2));
console.log(climbStairCase(3));
console.log(climbStairCase(4));
console.log(climbStairCase(5));
