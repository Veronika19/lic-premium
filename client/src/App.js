import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Nav from './components/nav';
import Landing from './components/landing';
import AddPolicy from './components/add-policy';
import Flash, { FlashMessage } from './flash';

const App = () => {
  window.flash = (message, type = 'success') => FlashMessage.emit('flash', { message, type });
  return (
    <Provider store={store}>
      <Flash />
      <div className="bg-gray-200">
        <div className="overflow-x-hidden relative">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/add-policy" element={<AddPolicy />} />
            </Routes>
          </Router>
        </div>
      </div>
    </Provider>
  );
};

export default App;
