import axios from "axios";
import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  GET_ALLTASK_SUCCESS,
  TASK_FAILURE,
  TASK_REQUEST,
  UPDATED_TASK_BY_PUSHER_SUCCESS,
} from "./taskActionTypes";

const baseurl = process.env.REACT_APP_BASE_URL;

const taskRequest = () => {
  return {
    type: TASK_REQUEST,
  };
};

const taskFailure = () => {
  return {
    type: TASK_FAILURE,
  };
};

const addTaskSuccess = (payload) => {
  return {
    type: ADD_TASK_SUCCESS,
    payload,
  };
};

const deleteTaskSuccess = (payload) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload,
  };
};

const getAllTask = (payload) => {
  return {
    type: GET_ALLTASK_SUCCESS,
    payload,
  };
};

export const updateTaskbyPusher = (payload) => {
  return {
    type: UPDATED_TASK_BY_PUSHER_SUCCESS,
    payload,
  };
};

export const gettaskData = () => (dispatch) => {
  dispatch(taskRequest());
  return axios
    .get(baseurl)
    .then((res) => res.data)
    .then((res) => dispatch(getAllTask(res)))
    .catch((err) => dispatch(taskFailure(err)));
};

export const deleteTaskData = (payload) => (dispatch) => {
  dispatch(taskRequest());
  return axios
    .delete(baseurl + "/" + payload)
    .then(() => dispatch(deleteTaskSuccess(payload)))
    .catch((err) => {
      dispatch(taskFailure(err));
    })
    .finally(() => {
      dispatch(deleteTaskSuccess(payload));
    });
};

export const addTaskData = (payload) => (dispatch) => {
  dispatch(taskRequest());
  return axios
    .post(baseurl, payload)
    .then((res) => res.data)
    .then((res) => dispatch(addTaskSuccess(res)))
    .catch((err) => dispatch(taskFailure(err)));
};
