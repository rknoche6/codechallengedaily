import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to CodeChallengeDaily!</h1>
      </header>

      <main className="App-main">
        <h2>Boost Your Coding Skills</h2>
        <p>Join our exclusive email list for daily coding challenges from LeetCode!</p>
        <p>Get started on improving your problem-solving skills and prepare for technical interviews.</p>
        <button className="App-button">
          Subscribe Now
        </button>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} CodeChallengeDaily. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
