function quicksort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: an array with 0 or 1 elements is already sorted
  }
  const pivot = arr[0]; // Choose the pivot (you can choose it differently)
  const lessThanPivot = [];
  const greaterThanPivot = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      lessThanPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }
  // Recursively sort the sub-arrays and combine them
  return [...quicksort(lessThanPivot), pivot, ...quicksort(greaterThanPivot)];
}

const arr = [8, 20, -2, 4, -6];

console.log(quicksort(arr)); //[-6,-2,4,8,20]

// Worst Case - O(n^2)
// Avg Case - O(nlogn)
