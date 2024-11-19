import { Component } from 'react';
import PropTypes from 'prop-types';

class ClickMe extends Component {
  //state/setState는 부모(component) 정의되어 있는 이름
  //상태는 state변수 하나만 사용 가능해서 여러개의 상태를 관리하려면 객체로 지정
  //함수형에서는 state변수를 여러개 지정 가능 (useState훅)
  state = { count: 0 };

  //생성자 함수(props를 기준으로 state를 초기화 할 경우 등에서 작성)
  constructor(props) {
    //부모 클래스의 생성자를 통해 this가 초기화 되므로 ,
    //super를 호출 해야(==component에 정의된 construct 호출) 자식 class에서 this를 사용할 수 있다.
    //super(props)를 호출 해야 자식 class에서 this.props를 사용할 수 있다.
    super();
    this.state = { count: props.level || 1 };
  }

  //arrow function으로 작성해야 this.state 등에 접근이 가능하다.
  handleClick = () => {
    console.log(this); //이벤트 핸들러로서의 this는 못찾음,class내부의 method로서는 X
    this.setState({ count: this.state.count + (this.props.level || 1) }); //props접근할 때는 this를 사용한다
  };

  render() {
    return (
      <div>
        클릭횟수 X {this.props.level || 1} :{this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }
}
ClickMe.propTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={2} />
        <ClickMe level={5} />
        <ClickMe />
      </div>
    );
  }
}
export default Parent;
