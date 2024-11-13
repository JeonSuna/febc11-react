function func(data1, data2) { //새로운 매개변수 데이터값 생성되고 d1,d2 값을 복사함 ,//기본값 설정
    data1 += 10
    data2[0] += 10
    console.log(data1, data2[0]) //90 90 
}

var d1 = 80;  // number , 원시형
var d2 = [80];  // array(object) , 참조형, 주소 저장됨 

console.log(typeof d1, typeof d2); //number,array

console.log('===== 함수 호출 이전 =====');
console.log(d1, d2[0]); //80 80

console.log('===== 함수 호출 =====');
func(d1, d2);

console.log('===== 함수 호출 이후 =====');
console.log(d1, d2[0]); //80,90

// 원시형은 변수가 가르키는 공간에 값이 있고, 함수에 넘겨주는것은 값을 복사한거다
// 참조형은 변수가 가르키는 공간에 주소가 있고, 함수에 넘겨주는 것은 주소를 복사한거다