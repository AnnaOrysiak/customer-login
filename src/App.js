import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import LoginForm from "./components/LoginForm";
import createNotifications from "./components/Notifications";
import 'react-notifications/lib/notifications.css';

class App extends Component {

  state = {
    formSend: false
  }

  handleStatusForm = (messageType) => {

    const newNotification = createNotifications(messageType);
    newNotification(messageType);

    this.setState({
      formSend: true
    });
  }

  render() {

    return (
      <>
        <LoginForm
          formSend={this.state.formSend}
          handleStatusForm={this.handleStatusForm}
        />

        <NotificationContainer />
      </>
    );
  }
}

export default App;
