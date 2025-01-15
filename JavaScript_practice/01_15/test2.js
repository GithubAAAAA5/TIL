let arr = [1, 2, 3]

// let s = arr.reduce(Callback, 초기값)

// Callback -> function (누적값, 배열의원소) {return 누적값 + 배열의원소}
 
// let s = arr.reduce(function (누적값, 배열의원소) {
//   return 누적값 + 배열의원소
// }, 초기값)

let s = arr.reduce(function (acc, num) {
  return acc + num
}, 0)

let ss = arr.reduce(function (acc, num) {
  acc.push(num*2)
  return acc
}, [])

console.log(s)
console.log(ss)