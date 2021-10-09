import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class ProjectsListPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "middle",
          flexDirection: "column",
        }}
      >
        {this.props.projects.map((item) => (
          <div>
            <ProjectItem
              itemSelected={(id) => this.props.itemSelected(id)}
              id={item.id}
              name={item.name}
              state={item.state}
              backgroundColor={item.backgroundColor}
              borderColor={item.borderColor}
              selectedState={this.props.selectedState}
            />
            <div style={{ height: "20px" }}></div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsListPanel;
