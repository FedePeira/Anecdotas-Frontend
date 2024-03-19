import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification.message)
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (notification) {
      setShowNotification(true);

      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
 }, [notification]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (!showNotification) {
    return null;
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification