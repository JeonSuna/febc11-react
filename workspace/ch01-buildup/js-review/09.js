function sayHello(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings
    .map((str, i) => str + (values[i] ? `<strong>${values[i]}</strong>` : ''))
    .join('');
}

const result = sayHello(
  ['안녕하세요 ', '님. 오늘 날씨는 ', ' 입니다.'],
  '무지',
  '맑음'
);

console.log(result);
// => 안녕하세요 <strong>무지</strong>님. 오늘 날씨는 <strong>맑음</strong>입니다.

const name = '무지';
const weather = '맑음';
const str = `안녕하세요.${name}님. 오늘 날씨는 ${weather} 입니다`;

// Tagged Template
const result4 = sayHello`안녕하세요. ${userName}님. 오늘 날씨는 ${weather} 입니다.`;
console.log('result4', result4);
