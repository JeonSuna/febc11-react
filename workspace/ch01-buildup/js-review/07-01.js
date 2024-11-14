//Array.prototype.forEach(callback):배열의 각 요소에  대해 콜백 함수를 실행
//callback(elem,index)
//반환값은 없음

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;
array.forEach((elem) => {
  if (elem % 2 !== 0) {
    result += elem;
  }
});
console.log(result);
