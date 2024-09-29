// src/App.js or src/App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
