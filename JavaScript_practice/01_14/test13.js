let info = [
  {
    "name" : "김철수",
    "age" : 30,
    "city" : "서울"
  },
  {
    "name" : "짱구",
    "age" : 20,
    "city" : "서울"
  },
  {
    "name" : "둘리",
    "age" : 17,
    "city" : "서울"
  },
  {    "name" : "고길동",
    "age" : 50,
    "city" : "서울"
  },
]

// console.log(info[0])
// for (let person of info) {
//   console.log(person.name);
// }

// 새로운 배열 안에 사람 이름만 모으기
// for .. of 반복문
let names = [];
for (let i of info) {
  names.push(i.name)
}
console.log(names)