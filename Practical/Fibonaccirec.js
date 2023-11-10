function fibanncioRec(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fibanncioRec(n - 1) + fibanncioRec(n - 2);
  }
}
console.log(fibanncioRec(5));
