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
