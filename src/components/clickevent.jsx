import React, { Component } from "react";

// PROP? CAN NO BE CHANGED IN OTHER PLACES BUT CAN BE GIVEN DIFFERENT VALUE WITH ONCLICK
class Clickevent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img
          src={this.props.counterObj.imgurl}
          alt=""
          width="200"
          height="220"
        />

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          // note that it doesnt call the function, only refers to it
          onClick={() => this.props.onIncrement(this.props.counterObj)}
          className="btn btn-success btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counterObj.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counterObj.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counterObj;
    return count === 0 ? "0" : count;
  }
}

export default Clickevent;

//   constructor() {
//     super();
//     this.handleIncerement = this.handleIncerement.bind(this);
//   }

//   onClick={() => this.handleIncerement(product)}

// pass in an argument, this function is not needed ANYMORE as you pass it directly to onclick event
//   handleIncerement = (product) => {
//     this.handleIncerement({ id:1 });
//   };
