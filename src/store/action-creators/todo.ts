import { TodoAction, TodoActionTypes } from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: TodoActionTypes.FETCH_TODO
      });
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _page: page,
            _limit: limit,
          }
        }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODO_SUCCESS,
          payload: response.data,
        })
      }, 1000)
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел',
      })
    }
  }
};

export const setTodoPage = (page: number): TodoAction => {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  }
};
