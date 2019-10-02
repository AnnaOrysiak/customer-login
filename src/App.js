import React, { Component } from 'react';
import LoginForm from "./components/LoginForm";
import Notifications from "./components/Notifications";

class App extends Component {
  state = {}


  render() {
    return (
      <>
        <LoginForm />
        {/* <Notifications /> */}
      </>
    );
  }
}

export default App;
