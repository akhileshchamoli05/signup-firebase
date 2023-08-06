import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import SignUpForm from './components/SignUpForm';

// Replace the following config with your Firebase SDK config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const handleSignUp = async (email, password) => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);

      if (response.user) {
        console.log('User has successfully signed up.');
        // You can redirect the user to another page or handle the signup success here
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors appropriately and show them to the user
    }
  };

  return (
    <div className="container">
      <h1>Firebase Auth Demo</h1>
      <SignUpForm handleSignUp={handleSignUp} />
    </div>
  );
}

export default App;
