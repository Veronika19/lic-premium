import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Alert from './components/alert';
import Nav from './components/nav';
import Landing from './components/landing';

const App = () => {
  return (
    <div className="bg-gray-200">
      <div className="overflow-x-hidden relative">
        <Alert />
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
