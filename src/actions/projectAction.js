import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("/api/project", project);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("/api/project/all");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (err) {}
};

export const getProject = (identifier, history) => async dispatch => {
  try {
    const res = await axios.get("/api/project/" + identifier);
    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });
  } catch (err) {
    history.push("/dashboard");
  }
};

export const deleteProject = (identifier, history) => async dispatch => {
  try {
    if (window.confirm("are you sure to delete project " + identifier + " ?")) {
      const res = await axios.delete("/api/project/" + identifier);
      dispatch({
        type: DELETE_PROJECT,
        payload: identifier
      });
    }
  } catch (err) {}
};
