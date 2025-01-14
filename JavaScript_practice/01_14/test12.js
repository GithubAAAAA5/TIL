const person = { name: '홍길동', age: 30, city: '서울' };
// let person = [1, 2, 3]
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
  // console.log(key, typeof(key));
}
// name: 홍길동
// age: 30
// city: 서울
