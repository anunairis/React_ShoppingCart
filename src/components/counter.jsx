import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  // styles = {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button className="btn btn-primary btn-sm">Increment</button>

        <ul style={{ paddingBottom: "5rem" }}>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  // YT video at 50min(Mosh) expains how to get this class
  // function to display badge colors depending on the count nr
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "success" : "primary";
    return classes;
  }

  //function to display count
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
/* style={{ fontSize: 20 }} */
/* style={this.styles}*/
// className="badge badge-primary m-2"
/* <img src={this.state.imageUrl} alt="" /> */
