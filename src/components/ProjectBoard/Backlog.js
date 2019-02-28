import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";

class Backlog extends Component {
  render() {
    const projectTasksProp = this.props.projectTasks;
    if (projectTasksProp) {
      const projectTasksTodo = projectTasksProp.map(projectTask => {
        if (projectTask.status === "TO_DO")
          return <ProjectTask key={projectTask.id} projectTask={projectTask} />;
      });

      const projectTasksProgress = projectTasksProp.map(projectTask => {
        if (projectTask.status === "IN_PROGRESS")
          return <ProjectTask key={projectTask.id} projectTask={projectTask} />;
      });

      const projectTasksDone = projectTasksProp.map(projectTask => {
        if (projectTask.status === "DONE")
          return <ProjectTask key={projectTask.id} projectTask={projectTask} />;
      });
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-secondary text-white">
                  <h3>TO DO</h3>
                </div>
              </div>
              {projectTasksTodo}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white">
                  <h3>In Progress</h3>
                </div>
              </div>
              {projectTasksProgress}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-success text-white">
                  <h3>Done</h3>
                </div>
              </div>
              {projectTasksDone}
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="container">Loading</div>;
    }
  }
}

export default Backlog;
