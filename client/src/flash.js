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
      typeof message === 'object' ? setMessage(Object.values(message)) : setMessage(message);
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
      <div
        role="alert"
        className="z-20 px-5 sm:px-10 xl:px-0 xl:w-1/3 mx-auto sm:mx-0 sm:w-6/12 md:w-3/5 w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col pr-4 absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-1000 ease-in-out"
        id="main-notification"
      >
        <div className="sm:px-6 p-2 ml-4 sm:ml-0 mt-4 sm:mt-0 flex items-center justify-center bg-yellow-400 sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="#ffffff"
          >
            <path
              className="heroicon-ui"
              d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center pl-4 sm:w-9/12 sm:pt-6 pb-6 pt-2">
          <p className="text-lg text-gray-800 font-semibold pb-1">Attention Needed</p>
          <p className="text-sm text-gray-600 font-normal">
            {Array.isArray(message)
              ? message.map((each) => {
                  return <li>{each}</li>;
                })
              : message}
          </p>
        </div>
      </div>
    )
  );
};

export default Flash;
