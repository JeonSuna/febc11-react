var item = { no: 1, todo: '두부', done: true };
//1. 대입 연산자로 newItem 생성
var newItem = item

//2.Object.assign(target,...sourse): target객체에 source객체들의 속성을 추가해서 target을 반환
var newItem = Object.assign(item, { delete: true }, {}, {}) //delete속성이 item에 추가되고 item을 반환함, new와 item은 같은 객체임

//만약 다른 객체를 만들고 싶다면
var newItem = Object.assign({}, item, { delete: true }, {}, {}) //처음 인자값을 빈중괄호로 만듦 , {}==>newObject를 만듦,item과 newitem은 서로 다른 객체임

//3.item의 속성으로 새로운 객체를 생성한다
var newItem = { no: item.no, done: item.done, todo: item.done }

//4.전개 연산자를 이용한 복사
var newItem = { ...item, done: false } //기존의done값을 덮어 씌워서 false로 바뀐다




//item과 newItem비교
newItem.done = false
console.log(item, newItem) //미친다, 같은 주소값을 참조하기 때문에 
console.log('같은 객체인가?', item === newItem) // 같은 객체이다(주소 같은지 물어봄)