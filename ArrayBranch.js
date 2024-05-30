/** Array branch */
// let fruit=["apple","mango","banana"];
// for(let i=0;i<3;i++){
// console.log(fruit[i]);
// }
var fruit = ["apple", "mango", "banana"];
fruit.push("orange");
fruit.unshift("kiwi");
fruit.unshift("guava");
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }
for (var _i = 0, fruit_1 = fruit; _i < fruit_1.length; _i++) {
    var phal = fruit_1[_i];
    console.log(phal);
}
