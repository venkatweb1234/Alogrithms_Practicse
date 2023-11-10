function TwoSums(arr, target) {
  let numIndex = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numIndex[complement] !== undefined) {
      return [numIndex[complement], i];
    }
    numIndex[arr[i]] = i;
  }
  return [];
}

const arr = [2, 34, 4, 44];
const target = 46;
console.log(TwoSums(arr, target));
