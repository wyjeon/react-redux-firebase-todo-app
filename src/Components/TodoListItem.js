import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

function TodoListItem({ title, isDone, id }) {
  const [isTodoItemDone, setTodoItemDone] = useState(isDone);

  const firestore = useFirestore();
  const { uid } = useSelector(state => state.firebase.auth);

  const onToggle = () => {
    setTodoItemDone(!isTodoItemDone);
    firestore.collection('users').doc(uid).collection('todos').doc(id).update({
      isDone: !isTodoItemDone,
    });
  };

  return (
    <div
      style={{
        textDecoration: isTodoItemDone && 'line-through',
      }}
    >
      <div onClick={onToggle}>
        {isDone ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span>{title}</span>
      </div>
    </div>
  );
}

export default TodoListItem;
