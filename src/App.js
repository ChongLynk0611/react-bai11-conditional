import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notice from './components/Notice';
function App() {
  return (
    <div className="App">
      <Notice thongBao={false} />
    </div>
  );
}

export default App;
