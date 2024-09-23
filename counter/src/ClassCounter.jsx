import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.decrease = this.decrease.bind(this);
    this.state = {
      number: 0,
    };
  }

  increase = () => {
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };

  decrease() {
    this.setState((state) => ({
      number: state.number - 1,
    }));
  }

  render() {
    return (
      <div>
        <h2>The current state of class counter is: {this.state.number}.</h2>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

export default ClassCounter;
