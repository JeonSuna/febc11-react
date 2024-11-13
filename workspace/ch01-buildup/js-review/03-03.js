var score = [100, 90, 80];

var newScore = [...score, 70] //객체를 풀어서 새로운 객체를 만들 떄 , 객체던지 배열이던지 풀어서 새로운 객체로 만들면 된다
console.log(score, newScore)
console.log(score === newScore)