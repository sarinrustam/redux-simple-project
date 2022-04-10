import {FunctionComponent, useEffect} from "react";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from "../hooks/useActions";

const PAGES = [1,2,3,4,5];

const TodoList: FunctionComponent = () => {
  const { page, loading, limit, todos, error } = useTypedSelector(state => state.todo);
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {
        todos.map(todo => (
          <div key={todo.id}>{todo.id} - {todo.title}</div>
        ))
      }
      <div style={{ display: 'flex' }}>
        {
          PAGES.map(p => (
            <div
              key={p}
              style={{ border: p === page ? '2px solid green' : '2px solid gray', padding: '10px', marginRight: '5px' }}
              onClick={() => setTodoPage(p)}
            >
              {p}
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default TodoList;