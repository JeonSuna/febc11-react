var itemList = [
  { no: 1, todo: '두부', done: false },
  { no: 2, todo: '계란', done: false },
  { no: 3, todo: '라면', done: false },
];

//1. 대입연산자
var newItemList = itemList;
//itemList , newItemList 비교

//2.전개연산자를 이용한 복사
var newItemList = [...itemList]; // itemlist는 배열을 가르키고있고 , 그 배열은 복사가 되었다 ,
//즉 배열은 다른 객체인데 그 배열이 참조하고 있는 객체의 주소는 그대로이다. 즉 얕은복사만 이루어졌다
//리액트의 불변성 법칙에 어긋난다. -상태는 항상 변하면 안된다 , 바뀔일이 있으면 기존 상태를 바꾸지 않고 새로운 상태를 만들어서 전달하도록 해라
//만약 이 불변성 원리를 지킨다면 ?

//3. 불변성을 지키기 위해서 객체의 속성으로 객체를 속성으로 가질 경우 깊은 복사를 위해서는 속성도 새로운 객체로 복사해야 한다.
newItemList[1] = { ...itemList[1] };

newItemList[1].done = true;
console.log(itemList, newItemList);
console.log(itemList === newItemList);
console.log(itemList[1] === newItemList[1]);
