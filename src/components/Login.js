import React from "react";
import firebase from 'firebase/app'
import 'firebase/auth';
import { withRouter } from "react-router";
import { Button, Icon } from 'semantic-ui-react'
import history from '../history'

class Login extends React.Component {

  onSubmit=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      localStorage.setItem("accessToken", token)
      return history.push('/products');
      // ...
    }).catch(function(error) {
      // Handle Errors here.
       
      // ...
    });
  }

  render() {
    return (
      <div className="ui container">
       
        <div className="signin">
        <Button color='google plus' onClick={this.onSubmit}>
          <Icon name='google plus' /> Login With Google
        </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);