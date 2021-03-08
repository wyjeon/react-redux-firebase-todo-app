import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

function TodoList() {
  const todos = useSelector(state => state.firestore.data.todos);
  return (
    <div>
      {todos &&
        Object.values(todos).map(todo => (
          <TodoListItem title={todo.title} isDone={todo.isDone} id={todo.id} />
        ))}
    </div>
  );
}

export default TodoList;
