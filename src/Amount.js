import React from "react";
import styled from "styled-components";

class Amount extends React.Component {
  state = { amount: 0 };

  incrementAmount() {
    this.setState(prevState => {
      return { amount: prevState.amount + 1 };
    });
  }

  decrementAmount() {
    this.setState(prevState => {
      return { amount: prevState.amount - 1 };
    });
  }

  render() {
    // const { amount, incrementAmount, decrementAmount } = this.props;
    return (
      <div>
        <span>US Dollar : {this.state.amount}</span>
        <button onClick={this.incrementAmount.bind(this)}>⬆</button>
        <button onClick={this.decrementAmount.bind(this)}>⬇</button>
        {this.props.render(this.state.amount)}
      </div>
    );
  }
}

export default Amount;
