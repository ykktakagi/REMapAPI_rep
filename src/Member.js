import React from 'react';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';

function Member({ user }) {
  const { signOut } = useAuthenticator();

  return (
    <div>
      <h1>Member Page</h1>
      {user ? (
        <>
          <h3>私は権限を持っています：{user.username}</h3>
          <button onClick={signOut}>サインアウト</button>
        </>
      ) : (
        <h3>権限がありません</h3>
      )}
    </div>
  );
}

export default withAuthenticator(Member);
