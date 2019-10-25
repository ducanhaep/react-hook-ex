import React from "react";

class Timer extends React.Component {
  componentDidMount() {
    this.timer = window.setInterval(() => {
      console.log("hello world");
    }, 2000);
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return <p>timer is running</p>;
  }
}

class UnmountDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: true
    };
  }
  stopTimmer = () => {
    this.setState({ timerOn: false });
  };
  render() {
    return this.state.timerOn ? (
      <div>
        <button onClick={this.stopTimmer}>Stop timmer</button>
        <Timer />
      </div>
    ) : null;
  }
}

export default UnmountDemo;
