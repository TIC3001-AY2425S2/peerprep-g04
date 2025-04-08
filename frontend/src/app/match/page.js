'use client';

import { useState } from 'react';

export default function MatchPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [status, setStatus] = useState('Idle');

  const handleMatch = async () => {
    const userId = `user${Math.floor(Math.random() * 10000)}`; // ✅ declare here
    setStatus('Sending match request...');
  
    try {
      const res = await fetch('http://localhost:3001/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, difficulty, userId }),
      });
  
      const data = await res.json();
      setStatus(data.message || 'Match request sent.');
  
      // Simulate match result
      setTimeout(() => {
        setStatus('✅ Match found!');
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to send match request.');
    }
  };
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PeerPrep Matchmaking</h1>

      <label>
        Topic:
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., Arrays"
          className="border px-2 py-1 ml-2"
        />
      </label>

      <br /><br />

      <label>
        Difficulty:
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border px-2 py-1 ml-2"
        >
          <option value="">Choose one</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label>

      <br /><br />

      <button
        onClick={handleMatch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Find Match
      </button>

      <p>Status: {status}</p>
    </div>
  );
}
