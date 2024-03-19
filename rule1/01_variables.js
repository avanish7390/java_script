const accountId = 144552
let accountEmail = "avansih@gmail.com"  // it is solve the scope problem
var accountPassword = "avanish55" 
accountCity = "lucknow"
let accountState // only declare variables not assigned any value then give the output undefined
// it is undefined 
// let is  variable
// accountId = 22 //const not allowed to change account

accountEmail = "asdf@gmail.com"
accountPassword = "55255226"
accountCity = "mirzapur"


/* commant */
// prefer not to use var //
//because OF issue in block scope ans functional scope


// console.log(accountId, accountEmail, accountPassword, accountCity); //it give  the output in row formate
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  // it give the output in table formate