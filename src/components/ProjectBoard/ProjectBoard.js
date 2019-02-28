import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import { getBacklog } from "../../actions/backlogActions";
import PropTypes from "prop-types";

class ProjectBoard extends Component {
  constructor() {
    super();
    this.state = {
      errors: {
        errors: {}
      }
    };
  }

  componentDidMount() {
    const { identifier } = this.props.match.params;
    this.props.getBacklog(identifier);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { identifier } = this.props.match.params;
    const projectTasks = this.props.backlog.backlog.projectTasks;
    const { errors } = this.state;

    const boardAlgorithm = (errors, projectTasks) => {
      if (!projectTasks) {
        if (errors.message) {
          return (
            <div className="alert alert-danger text-enter" role="alert">
              {errors.message}
            </div>
          );
        } else {
          return (
            <div className="alert alert-info text-enter" role="alert">
              loading
            </div>
          );
        }
      } else if (projectTasks.length < 1) {
        return (
          <div className="alert alert-info text-enter" role="alert">
            no project-task
          </div>
        );
      } else {
        return <Backlog projectTasks={projectTasks} />;
      }
    };

    let boardContent = boardAlgorithm(errors, projectTasks);

    return (
      <div className="container">
        <Link
          to={`/addProjectTask/${identifier}`}
          className="btn btn-primary mb-3"
        >
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {boardContent}
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBacklog }
)(ProjectBoard);
