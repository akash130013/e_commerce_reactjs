import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import reducer from "./reducers"
import {Provider} from "react-redux"
import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

// redux stuff
//reducer-function that used to update store 
//two arguments-state,action
//state-old state/state
//action- what happened/what updated
//return updated or old state
//dispatch method-send action to the store


import {createStore} from "redux"

 const store = createStore(reducer)   //used to pass reducer function
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(props) {
  // cart setup

  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;


  console.log(props);

  return (
    <main>

{
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }

      <Provider store={store}>
      <Navbar />
      <CartContainer />
      </Provider>
    </main>
  );
}

// export default App;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);