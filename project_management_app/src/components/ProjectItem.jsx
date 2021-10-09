import React, { Component } from "react";
import "../index.css";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
  }

  select() {
    this.props.itemSelected(this.props.id);
  }

  isDisabled() {
    if (this.props.state == "Finished") return true;
    if (this.props.selectedState == "") return false;
    else if (this.props.state != this.props.selectedState) return true;
    else return false;
  }

  render() {
    return (
      <button
        id={this.props.id}
        className="button2"
        onClick={() => this.select()}
        style={{
          backgroundColor: this.props.backgroundColor,
          borderRight: "30px solid " + this.props.borderColor,
        }}
        disabled={this.isDisabled()}
      >
        <div style={{ fontSize: "20px" }}>
          <b> {this.props.name} </b>
        </div>
        <div style={{ height: "40px" }} />
        <div style={{ fontSize: "15px" }}>{this.props.state}</div>
      </button>
    );
  }
}

export default ProjectItem;