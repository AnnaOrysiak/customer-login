import { NotificationManager } from 'react-notifications';


const createNotification = (type) => {

  return () => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case "success":
        NotificationManager.success('Login Successful');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Login Failed', '', 5000);
        break;
      default:
        break;
    }
  };
}

export default createNotification;