import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  GET_ALLTASK_SUCCESS,
  TASK_FAILURE,
  TASK_REQUEST,
  UPDATED_TASK_BY_PUSHER_SUCCESS,
} from "./taskActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  tasks: [],
  userId: localStorage.getItem("userId") || "kamal77",
};

export const taskReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TASK_REQUEST:
      return { ...state, isLoading: true };
    case TASK_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case GET_ALLTASK_SUCCESS:
      return {
        ...state,
        tasks: [...payload],
        isLoading: false,
        isError: false,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: [...state.tasks, payload],
      };
    case DELETE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== payload),
        isLoading: false,
        isError: false,
      };
    }
    case UPDATED_TASK_BY_PUSHER_SUCCESS:
      return {
        ...state,
        tasks: [payload, ...state.tasks],
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};
