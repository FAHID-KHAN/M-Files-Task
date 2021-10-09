import React, { Component } from "react";
import "../index.css"

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.launchProject()} className="button3">
          <div style={{ fontSize: "15px" }}>Launch Project</div>
        </button>
        <div style={{ height: "20px" }}></div>
        <button onClick={() => this.props.finishProject()} className="button3">
          <div style={{ fontSize: "15px" }}> Finish Project</div>
        </button>
      </div>
    );
  }
}

export default ControlPanel;
