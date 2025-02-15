// person은 3개의 속성을 가진다.
let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

// 마침표(.) key를 활용한 value 접근
console.log(person.name); // 홍길동

// 대괄호 key를 활용한 value 접근
console.log(person.job); // 개발자

// key를 활용한 value 접근 후 value 수정
person.age = 40;

console.log(person); // { name: '홍길동', age: 40, job: '개발자' }
