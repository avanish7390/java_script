// let score = 388



// console.log(typeof score);
// console.log(typeof(score));
 // type of number


 let score = null // output    0
//  let score = undefined // output  undefined

 console.log(typeof score); // string



 let valueInNumber = Number(score)// number
 console.log(typeof valueInNumber); // number

 console.log(valueInNumber);



//  let score = "33ssjd"
//  console.log(valueInNumber);  // NaN



// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0




// let isLoggedIn = 1 //true
//let isLoggedIn ="" // false

let isLoggedIn = "avanish"  //true

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); 

//note 
// 1 => true
// 0 => false
// "" => false
// "avanish" => true

let someNumber = 58265
let stringNumber = String(someNumber)
//console.log(stringNumber); //58265
// console.log(typeof (stringNumber)); // string

let someName = "avanish"
let booleanName = Boolean(someName)
// console.log(booleanName);// true

// console.log(typeof booleanName); // boolean




















//****************************************************OPERATIONS************************************** */


let value = 3 
let negativeValue = -value
// console.log(negativeValue); // -3
// console.log(2+2); //4
// console.log(2-2); // 0
//console.log(2*2); // 4
//console.log(2/2); // 1
// console.log(2**6); // 64
//console.log(50%2); // 0 remainder



let str1 = "hello"
let str2 = " world"
let str3 =str1 + str2
// console.log(str3); // "hello" + "world" => "hello world"

// console.log(2 + "2"); // 22
// console.log("2" + 2); // 22
// console.log("2" + 2 + 2); // 222
// console.log(2 + 2 + "2"); // 42

// console.log((3 + 5) * (6  % 5)); //8

// let x= 7
// x++
// console.log(x); // 8

// let y= 7
// ++y
// console.log(y);// 8




//**********************POSTFIX*********************** */

let x = 7
const y = x++

console.log(x);
console.log(y);


//*********************PREFIX************************** */
let a = 7
const b = ++a
console.log(a);
console.log(b);