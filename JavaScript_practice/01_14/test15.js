const person = {
  name : "철수",
  greet : function () {
    console.log('안녕하세요 반갑습니다.');
  },
  greet2 : () => console.log('Hi Greetings'),
  greet3() {
    console.log('はじめまして。')
  }
};

person.greet();
person.greet2();
person.greet3();