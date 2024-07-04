import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Member from './Member';
import SurroundSpot from './surround_spot';
import './App.css';  // CSSファイルをインポート

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>REMapAPI presented by cocolomachi</h1>
          <nav className="navbar">
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
              <li style={{ margin: '0 10px' }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ margin: '0 10px' }}>
                <Link to="/member">Member</Link>
              </li>
              <li style={{ margin: '0 10px' }}>
                <Link to="/surround_spot">Surround Spot</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/surround_spot" element={<SurroundSpot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
