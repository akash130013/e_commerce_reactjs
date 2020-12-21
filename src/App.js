import React from "react";
// components
import Navbar from "./components/Navbar";
import { Router, Route, Switch } from 'react-router-dom'
import CartContainer from "./components/CartContainer";
import ProductContainer from "./components/ProductContainer";
import reducer from "./reducers"
import { Provider } from "react-redux"
import reduxThunk from 'redux-thunk'

import history from './history'
import 'semantic-ui-css/semantic.min.css'
//firebase
import withFirebaseAuth from 'react-with-firebase-auth'
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

import { createStore,applyMiddleware, compose } from "redux"

// const store = createStore(reducer)   //used to pass reducer function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(reduxThunk)
));


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


  return (
    <main>

      {/* {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      } */}

      <Router history={history}>

        <Switch>

          <Provider store={store}>
            <Navbar />
            <Route path='/' exact={true} component={ProductContainer} />
            <Route path='/cart'  component={CartContainer} />
            
          </Provider>

        </Switch>
      </Router>

      {/* <Provider store={store}>
      <Navbar />
      <CartContainer />
      </Provider> */}
    </main>
  );
}

// export default App;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);