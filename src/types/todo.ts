export interface TodoState {
  todos: Array<any>;
  error: null | string;
  limit: number;
  page: number;
  loading: boolean;
}

export enum TodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'FETCH_TODO_PAGE',
}

interface FetchTodoActions {
  type: TodoActionTypes.FETCH_TODO,
}

interface FetchTodoActionSuccess {
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
  payload: Array<any>,
}

interface FetchTodoActionsError {
  type: TodoActionTypes.FETCH_TODO_ERROR,
  payload: string,
}

interface SetTodoActionPage {
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: number,
}

export type TodoAction = FetchTodoActions | FetchTodoActionSuccess | FetchTodoActionsError | SetTodoActionPage;