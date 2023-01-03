const obj = {
    num:2,
    num2:3,
    num4:4
}
console.log("\n1.way to use for...in ");
for(const val_and_var in obj){
    console.log(val_and_var);
}

console.log("\n2.way to use for...in ");
for(const val_and_var in obj){
    console.log(obj);
}

console.log("\n3.way to use for...in ");
for(const val_and_var in obj){
    console.log(obj[val_and_var]);
}

console.log("\n4.way to use for...in ");
for(const val_and_var in obj){
    console.log(`${val_and_var} : ${obj[val_and_var]}`);
}
