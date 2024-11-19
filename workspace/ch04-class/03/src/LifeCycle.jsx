import { Component } from 'react';
import PropTypes from 'prop-types';

class ClickMe extends Component {
  // state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count + (this.props.level || 1) });
  };
  // ==>최초로 화면에 표시되는 과정 (mount) =>1로 시작하는 , 2로 시작하면 update
  // 1-1
  constructor(props) {
    super(props);
    this.state = { count: props.level || 1 };
    console.log('1-1 constructor 호출됨');
  }
  // 1-2/2-1
  static getDerivedStateFromProps(props, state) {
    //부모 컴포넌트로부터 전달받은 props를 기반으로 상태를 업데이트 하고 싶을 때 사용
    console.log('1-2/2-1 getDerivedStateFromProps 호출됨');
    console.log(' props', props);
    console.log(' state', state);

    if (state.count > props.level * 5) {
      return { count: 0 }; //새로운 값으로 state업데이트
    }
    return null; //state를 업데이트 하지 않음
  }

  // 2-2
  shouldComponentUpdate(nextProps, nextState) {
    console.log(' 2-2 shouldComponentUpdate 호출됨');
    return true;
  }
  // 1-3/2-3
  render() {
    console.log('1-3/2-3 render 호출됨');
    return (
      <div>
        클릭횟수 X {this.props.level || 1} :{this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }
  // 1-4
  componentDidMount() {
    // 컴포넌트가 마운트가 완료되고 브라우저 DOM트리에 반영된 후 호출된다.
    // 컴포넌트가 화면에 보이기 직전에 호출
    console.log('1-4 componentDidMount 호출됨');
  }

  // 2-4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(' 2-4 componentDidMount 호출됨');
    return 'hello';
  }
  //2-5
  componentDidUpdate() {
    console.log('2-5 componentDidUpdate 호출됨');
  }
  // 3-1(컴포넌트가 제거 - unmount)
  componentWillUnmount() {
    console.log('3-1 componentWillUnmount 호출됨');
  }
}
ClickMe.propTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트- 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={2} />
      </div>
    );
  }
}
export default Parent;
