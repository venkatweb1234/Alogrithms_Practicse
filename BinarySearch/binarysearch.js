function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleindex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleindex]) {
      return middleindex;
    }
    if (target < arr[middleindex]) {
      rightIndex = middleindex - 1;
    } else {
      leftIndex = middleindex + 1;
    }
  }
  return -1;
}

//Big -O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
