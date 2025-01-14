// switch & case
// break로 끊어주지 않으면 계속 내려감
// 표현식의 결과값을 이용한 조건문이며, 결과값과 case문 오른쪽을 비교함.
// 만약 브레이크가 없는 경우는 break 만나거나 default문 실행할때까지 다음 조건문 실행

const id = "admin";

switch (id) {
  case "hi": {
    // 더 정확히는, 이건 그냥 통과하고 admin 만났을때부터!
    console.log("여기는?");
  }
  case "admin": {
    // 여기서부터 admin 만났으니 발동! 그 아래서부터는 브레이크 없으면 자동 실행해버림
    console.log("관리자님, 환영합니다.");
    break;
  }
  case "manager": {
    console.log("매니저님 환영합니다.");
    break;
  }
  default: {
    console.log(`${id} 님, 환영합니다`);
  }
}