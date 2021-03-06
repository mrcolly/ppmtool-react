import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addProject" component={AddProject} />
            <Route
              path="/updateProject/:identifier"
              component={UpdateProject}
            />
            <Route path="/projectBoard/:identifier" component={ProjectBoard} />
            <Route
              path="/addProjectTask/:identifier"
              component={AddProjectTask}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
