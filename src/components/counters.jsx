import React, { Component } from "react";
import Clickevent from "./clickevent";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-small m-2">
          Reset
        </button>
        {counters.map((counterObj) => (
          <Clickevent
            key={counterObj.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counterObj={counterObj}
          >
            {/* <h4>Title</h4> */}
          </Clickevent>
        ))}
      </div>
    );
  }
}

export default Counters;

// PROPS: props contains the information set by the parent component
// (although defaults can be set) and should not be changed.

// STATE: state contains “private” information for the component to initialise,
// change, and use on its own.
