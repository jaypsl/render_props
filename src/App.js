import React from "react";
import Amount from "./Amount";
import Euro from "./Currency/Euro";
import Yen from "./Currency/Yen";
import Inr from "./Currency/Inr";
import Cad from "./Currency/Cad";

class App extends React.Component {
  render() {
    return (
      <div>
        <Amount
          render={amount => (
            <div>
              <Euro amount={amount} />
              <Yen amount={amount} />
              <Inr amount={amount} />
              <Cad amount={amount} />
            </div>
          )}
          // amount={this.state.amount}
          // incrementAmount={this.incrementAmount.bind(this)}
          // decrementAmount={this.decrementAmount.bind(this)}
        />
      </div>
    );
  }
}

export default App;
