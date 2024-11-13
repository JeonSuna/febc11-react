export function plus(x, y) {
  return x + y;
}

export function minus(x, y) {  //default는 한번만 쓸 수 있다
  return x - y;
}

export function multiple(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}

export function sum(kor, eng, math) {
  return kor + eng + math;
}

export function avg(kor, eng, math) {
  return sum(kor, eng, math) / 3;
}

export default { plus, minus, multiple, divide, sum, avg }
