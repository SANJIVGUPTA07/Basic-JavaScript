const arr = [1,2,3,4,5,6,7];
const newArr = arr.reduce((h1,h2) => {
    console.log("\nh1:" + h1 + " h2:"+h2);
    console.log("\nh1+h2 = " + (h1 + h2));
    return h1 + h2;

})

console.log(newArr);