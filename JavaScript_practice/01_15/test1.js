function completeTask() {
  console.log('completeTask 함수 시작');
}

function startTask(callbackFunction) {
  console.log('startTask 함수 시작');
  callbackFunction();
  console.log('startTask 함수 종료');
}

startTask(completeTask);