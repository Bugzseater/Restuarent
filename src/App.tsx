// src/App.js or src/App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
// import Landing from './pages/Landing';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Landing/>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
