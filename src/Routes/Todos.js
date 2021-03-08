import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';

function Todos() {
  const { displayName, uid } = useSelector(state => state.firebase.auth);

  useFirestoreConnect({
    collection: `users/${uid}/todos`,
    storeAs: 'todos',
  });

  return (
    <div>
      <div>Hello {displayName}</div>
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default Todos;
