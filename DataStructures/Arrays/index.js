const arr = [1, 2, 3, "Venkat"];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();
for (const item of arr) {
  console.log(item);
}

//insert /remove from end - O(1)
//insert /remove from beginning - O(n)
//Access - O(1)
//Search-O(n)
//Shift/Unshift/concat/slice/splice - O(n)
//forEach/map/filter/reduce - O(n)
