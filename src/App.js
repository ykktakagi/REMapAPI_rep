import React from 'react';
import SurroundSpot from './surround_spot';
import './App.css';  // CSSファイルをインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>気になる！周辺の生活環境~Life Information~</h1>
      </header>
      <SurroundSpot />
      <p>REMapAPI presented by Cocolomachi.</p>
    </div>
  );
}

export default App;
