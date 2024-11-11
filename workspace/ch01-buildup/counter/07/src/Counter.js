import Yong from '../yong.js'

function Counter() {
    // let count = 0;
    const [count, setCount] = Yong.useState(10) //use함수 만들고 값 전달하면 배열 반환
    const handleDown = () => {
        //TODO 데이터 갱신
        setCount(count - 1)
        //TODO 화면 갱신

    };
    const handleUp = () => {
        //TODO 데이터 갱신 
        setCount(count + 1)
        //TODO 화면 갱신

    };
    const handleReset = event => {
        //TODO 데이터 갱신 
        setCount(0)
        //TODO 화면 갱신

    };
    return (Yong.createElement('div', { id: 'counter' },
        Yong.createElement('button', { type: 'button', onclick: handleDown }, '-'),
        Yong.createElement('button', { type: 'button', onclick: (event) => handleReset(event) }, '0'),
        Yong.createElement('button', { type: 'button', onclick: handleUp }, '+'),
        Yong.createElement('span', null, count)))
}
export default Counter;