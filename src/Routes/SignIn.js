import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router';

function SignIn() {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: 'google',
        type: 'popup',
      })
      .then(() => {
        history.push('/todos');
      });
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button
        onClick={event => {
          event.preventDefault();
          signInWithGoogle();
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
}

export default SignIn;
