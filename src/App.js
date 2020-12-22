import React from "react";
// components
import Navbar from "./components/Navbar";
import { Router, Route, Switch,Redirect } from 'react-router-dom'
import CartContainer from "./components/CartContainer";
import ProductContainer from "./components/ProductContainer";
import Login from './components/Login'
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
import { createStore,applyMiddleware, compose } from "redux"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(reduxThunk)
));


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App() {
 
  return (
    
    <main>

      <Router history={history}>

        <Switch>

        {
        localStorage.getItem("accessToken") === null
          ? 
          <>
           <Route path="/" component={Login} render={() => <Redirect to="/login" />} />
          </>
          : 
        <Provider store={store}>
            <Navbar  />
            <Route path='/products' exact={true} component={ProductContainer}/>
            <Route path='/cart'  component={CartContainer} />
        </Provider>  
      }
        </Switch>
      </Router>

    </main>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);