import React from 'react';
import { withAuthenticator, AmplifySignOut } from 'aws-amplify-react';

function App() {
  return (
    <div>
      App
    </div>
  );
}

export default withAuthenticator(App);
