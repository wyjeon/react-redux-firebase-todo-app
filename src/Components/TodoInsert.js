import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

function TodoInsert() {
  const [todo, setTodo] = useState('');

  const firestore = useFirestore();
  const { uid } = useSelector(state => state.firebase.auth);

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onInsert = todo => {
    firestore
      .collection('users')
      .doc(uid)
      .collection('todos')
      .add({
        title: todo,
        isDone: false,
      })
      .then(docRef => {
        docRef.update({
          id: docRef.id,
        });
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsert(todo);
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
}

export default TodoInsert;
