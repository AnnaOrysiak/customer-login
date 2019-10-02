import React, { Component } from 'react';
import LoginForm from "./components/LoginForm";
import Notifications from "./components/Notifications";

class App extends Component {
  state = {
    formSend: false,
    statusOK: false,
  }

  handleSubmitForm = () => {
    this.setState({ formSend: true });
  }

  render() {
    return (
      <>
        <LoginForm handleSubmitForm={this.handleSubmitForm} />
        {this.state.formSend && <Notifications />}
      </>
    );
  }
}

export default App;
