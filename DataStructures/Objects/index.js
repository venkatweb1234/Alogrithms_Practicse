const obj = {
  name: "Bruce",
  age: 25,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "football";
delete obj.hobby;
console.log(obj.name);
console.log(obj["age"]);
console.log(obj);

//Object.keys() .values().entries()

// Insert - O(1)
//Remove - O(1)
//Access - O(1)
//Search -O(n)
//Object.keys - O(n)
//Object.Values - O(n)
//Object.entries() - O(n)
