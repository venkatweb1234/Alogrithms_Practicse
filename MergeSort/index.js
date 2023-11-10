function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: An array with 0 or 1 elements is already sorted.
  }
  //Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  //Recursively sort both halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  //Add any remaining elements from both subarrays.

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
// Example usage:
const myArray = [12, 11, 13, 5, 6, 7];
const sortedArray = mergeSort(myArray);
console.log("Sorted array is:", sortedArray);
