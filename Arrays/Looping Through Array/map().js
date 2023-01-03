const a = [1,2,3,4,5,6,7];

const b = a.map((value,index,) => {
    console.log(value,index,);
    return value*value;
})

console.log(b);

// map creates new array
// forEach is used to perform operation on original array

