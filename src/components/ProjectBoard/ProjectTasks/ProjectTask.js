import React, { Component } from "react";

class ProjectTask extends Component {
  render() {
    let projectTask;
    if (this.props.projectTask) {
      projectTask = this.props.projectTask;

      let priorityClass, priorityString;

      switch (projectTask.priority) {
        case 1:
          priorityClass = "bg-info text-light";
          priorityString = "LOW";
          break;
        case 2:
          priorityClass = "bg-warning text-light";
          priorityString = "MEDIUM";
          break;
        case 3:
          priorityClass = "bg-danger text-light";
          priorityString = "HIGH";
          break;
        default:
      }

      return (
        <div className="card mb-1 bg-light">
          <div className={"card-header text-primary " + priorityClass}>
            ID: {projectTask.sequence}-- Priority: {priorityString}
          </div>
          <div className="card-body bg-light">
            <h5 className="card-title">{projectTask.summary}</h5>
            <p className="card-text text-truncate ">
              {projectTask.acceptanceCriteria}
            </p>
            <a className="btn btn-primary">View / Update</a>

            <button className="btn btn-danger ml-4">Delete</button>
          </div>
        </div>
      );
    } else {
      return <div className="card mb-1 bg-light">LOADING</div>;
    }
  }
}

export default ProjectTask;
