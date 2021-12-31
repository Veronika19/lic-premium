import EventEmitter from 'events';
import { useEffect, useState } from 'react';

export const FlashMessage = new EventEmitter();

const Flash = () => {
  let [visibility, setVisibility] = useState(false);
  let [message, setMessage] = useState('');
  let [type, setType] = useState('');
  // const flashMsg = 'Testing flash msg';

  function flashMsg({ message, type }) {
    if (typeof message !== 'undefined') {
      setVisibility(true);
      setMessage(message);
      setType(type);
      setTimeout(() => {
        setVisibility(false);
      }, 4000);
    }
  }

  useEffect(() => {
    FlashMessage.addListener('flash', flashMsg);

    return () => {
      FlashMessage.removeListener('flash', flashMsg);
    };
  }, []);

  return (
    visibility && (
      <div className="row justify-content-center">
        <i className={`alert alert-${type}`}>{message}</i>
      </div>
    )
  );
};

export default Flash;
