var itemList = [
  { no: 1, todo: '두부', done: true },
  { no: 2, todo: '계란', done: false },
  { no: 3, todo: '라면', done: true },
];

console.log(itemList[0]);
console.log(itemList[1]);

var [first, second, third] = itemList
console.log(first)
console.log(second)

console.log(second.no, second.todo) // second는 객체임 (객체명.속성명)으로 함 , 하지만 불편 => 객체로 분해하면 됨
var { no: number, todo, done } = second // 이렇게 객체로 구족분해 할당 가능하다
//하지만 객체 변수의 속성명을 바꾸고 싶다면?
//원래명 : 바꾸고싶은 명  ===>으로 한다 
console.log(number, todo, done)  //2 '계란' false

//객체는 순서 상관없이 속성명으로 뽑아내고, 배열은 순서에 맞추서 꺼내야한다 