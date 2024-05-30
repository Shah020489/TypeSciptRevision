/** Array branch */
// let fruit=["apple","mango","banana"];

// for(let i=0;i<3;i++){
// console.log(fruit[i]);
// }

let fruit=["apple","mango","banana"];
fruit.push("orange");
fruit.unshift("kiwi");
fruit.unshift("guava");
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }
for(let phal of fruit){
    console.log(phal);
}