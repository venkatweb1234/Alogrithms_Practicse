function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let currentelement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentelement) {
      arr[j + 1] = currentelement;
      j--;
    }
    arr[j + 1] = currentelement;
  }
}
const arr = [19, 9, 3, 5, 2, 90, 34];
insertionSort(arr);
console.log(arr);
