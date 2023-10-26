function isPowerTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }

console.log(isPowerTwoBitwise(1)); // true

console.log(isPowerTwoBitwise(2)); // true

console.log(isPowerTwoBitwise(5)); // false

// Big -O = O(logn) Liner Time Complexity
