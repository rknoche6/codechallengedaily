import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your email subscription logic here
    alert(`Subscription successful for email: ${email}`);
    setEmail(''); // Reset email input after submission
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeChallengeDaily</h1>
        <p>Sharpen Your Coding Skills with Daily Challenges</p>
      </header>

      <main className="App-main">
        <section className="subscription-section">
          <h2>Join Our LeetCode Question Email List</h2>
          <p>Subscribe to receive daily coding challenges directly to your inbox.</p>
          <form onSubmit={handleSubmit} className="subscription-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} CodeChallengeDaily. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
