import React, { Component } from "react";

class Rendertags extends Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p style={{ paddingBottom: "5rem"}}>There are no tags!</p>;

    return (
      <ul style={{ paddingBottom: "5rem"}}>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Rendertags;
