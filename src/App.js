import React from "react";

import "./app.scss";

import INR from "./INR";
import USD from "./USD";
import Rate from "./Rate";

class App extends React.Component {
  state = {
    rate: 70,
    inr: "",
    usd: 1
  };

  handleRate = this.handleRate.bind(this);
  handleINR = this.handleINR.bind(this);
  handleUSD = this.handleUSD.bind(this);

  componentDidMount() {
    this.setState({ inr: this.state.usd * this.state.rate });
  }

  handleRate(event) {
    this.setState(
      {
        rate: event.target.value
      },
      () =>
        this.setState({
          inr: this.state.usd * this.state.rate
        })
    );
  }

  handleINR(event) {
    this.setState({
      inr: event.target.value,
      usd: event.target.value / this.state.rate
    });
  }

  handleUSD(event) {
    this.setState({
      usd: event.target.value,
      inr: event.target.value * this.state.rate
    });
  }

  render() {
    return (
      <div className="app">
        <Rate rate={this.state.rate} handleRate={this.handleRate} />
        <INR inr={this.state.inr} handleINR={this.handleINR} />
        <USD usd={this.state.usd} handleUSD={this.handleUSD} />
      </div>
    );
  }
}

export default App;
