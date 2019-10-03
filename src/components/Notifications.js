import { NotificationManager } from 'react-notifications';


const createNotification = (type) => {

  return () => {
    switch (type) {
      case 'info':
        NotificationManager.info('Your are already logged in');
        break;
      case "success":
        NotificationManager.success('Login successful');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Login failed', '', 5000);
        break;
      default:
        break;
    }
  };
}

export default createNotification;