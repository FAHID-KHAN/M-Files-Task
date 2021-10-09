import React, { Component } from "react";
import ProjectsListPanel from "./ProjectsListPanel";
import ControlPanel from "./ControlPanel";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class ProjectManagement extends Component {
  constructor(props) {
    super(props);

    var projectList = [];
    for (var i = 0; i < this.props.projects.length; i++) {
      var color = "";

      if (this.props.projects[i].state == "Not started") color = "#ecd381";
      else if (this.props.projects[i].state == "Launched") color = "#81ec81";
      else color = "#4e4e4e";

      var item = {
        id: this.props.projects[i].id,
        name: this.props.projects[i].name,
        state: this.props.projects[i].state,
        backgroundColor: "#ffffff",
        borderColor: color,
        isSelected: false,
      };

      projectList.push(item);
    }

    this.state = {
      selectedState: "",
      selectedIds: [],
      projects: projectList,
    };
  }

  itemSelected(id) {
    var newArray = this.state.projects;

    newArray.map((item) => {
      if (item.id === id) {
        if (this.state.selectedState === "") {
          var array = this.state.selectedIds;
          array.push(item.id);
          item.isSelected = true;
          item.backgroundColor = "#2e5fe6";

          this.setState({ selectedState: item.state, selectedIds: array });
        } else if (this.state.selectedState == item.state) {
          for (var i = 0; i < this.state.selectedIds.length; i++) {
            if (this.state.selectedIds[i] == id) {
              if (this.state.selectedIds.length == 1) {
                var array = this.state.selectedIds;
                array.splice(i, 1);
                this.setState({ selectedState: "", selectedIds: array });
                item.isSelected = false;
                item.backgroundColor = "#ffffff";
                return;
              } else {
                var array = this.state.selectedIds;
                array.splice(i, 1);
                this.setState({ selectedIds: array });
                item.isSelected = false;
                item.backgroundColor = "#ffffff";
                return;
              }
            }
          }

          item.isSelected = true;
          item.backgroundColor = "#2e5fe6";
          var array = this.state.selectedIds;
          array.push(item.id);
          this.setState({ selectedIds: array });
        }
      }
    });

    this.setState({ projects: newArray });
  }

  launchProject() {
    var list = [];
    list = this.state.projects;

    list.map((item) => {
      for (var i = 0; i < this.state.selectedIds.length; i++) {
        if (
          this.state.selectedIds[i] == item.id &&
          item.state == "Not started"
        ) {
          item.state = "Launched";
          item.isSelected = false;
          item.backgroundColor = "#ffffff";
          item.borderColor = "#81ec81";
          var array = this.state.selectedIds;
          array.splice(i, 1);
          this.setState({
            selectedState: "",
            selectedIds: array,
            projects: list,
          });
        }
      }
    });
  }

  finishProject() {
    var list = [];
    list = this.state.projects;

    list.map((item) => {
      for (var i = 0; i < this.state.selectedIds.length; i++) {
        if (this.state.selectedIds[i] == item.id && item.state == "Launched") {
          item.state = "Finished";
          item.isSelected = false;
          item.backgroundColor = "#ffffff";
          item.borderColor = "#4e4e4e";
          var array = this.state.selectedIds;
          array.splice(i, 1);
          this.setState({
            selectedState: "",
            selectedIds: array,
            projects: list,
          });
        }
      }
    });
  }

  render() {
    return (
      <div
        style={{ display: "flex", alignItems: "center", flexDirection: "Row" }}
      >
        <ProjectsListPanel
          projects={this.state.projects}
          selectedState={this.state.selectedState}
          itemSelected={(id) => this.itemSelected(id)}
        />
        <div style={{ width: "50px" }}></div>
        <ControlPanel
          launchProject={() => this.launchProject()}
          finishProject={() => this.finishProject()}
        />
      </div>
    );
  }
}

export default ProjectManagement;
