import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("fuck you");
  }
  
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("componentrendered!")
  }

  componentDidUpdate() {
    console.log("없데이트")
  }

  componentWillUnmount() {
    console.log("Fuck off mann")
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>ADD!</button>
        <button onClick={this.minus}>Mㅏ이나su</button>
      </div>
    );
  };
}

export default App;