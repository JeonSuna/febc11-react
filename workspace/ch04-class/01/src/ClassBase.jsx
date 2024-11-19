import { Component } from 'react';

class ClickMe extends Component {
  render() {
    return (
      <div>
        클릭횟수 X5 :15
        <button>클릭</button>
      </div>
    );
  }
}

class Parent extends Component {
  render() {
    return <div></div>;
  }
}
