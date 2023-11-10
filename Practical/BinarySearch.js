function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return its index
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found in the array
}

// Example usage
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
  console.log(`${target} found at index ${result}`);
} else {
  console.log(`${target} not found in the array`);
}

// BIG - O(logn)
