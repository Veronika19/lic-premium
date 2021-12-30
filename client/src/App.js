import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Alert from './components/alert';
import Nav from './components/nav';
import Landing from './components/landing';
import AddPolicy from './components/add-policy';

const App = () => {
  return (
    <div className="bg-gray-200">
      <div className="overflow-x-hidden relative">
        <Alert />
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/add-policy" element={<AddPolicy />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
