'use client';

import { useState } from 'react';
export default function Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  async function runBinary() {
    setLoading(true);
    setOutput('');
    try {
      const res = await fetch('https://site-backend-65se.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      });

      const data = await res.json();
      setOutput(data.output);
    } catch {
      setOutput('Error: Could not connect to backend.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Convert message to whitespace!</h1>
      <input
        type="text"
        placeholder="Enter input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded mb-4 text-gray-400"
      />
      <button
        onClick={runBinary}
        className="bg-blue-600 text-gray-200 px-4 py-2 rounded hover:bg-blue-700"
      >
        Run
      </button>

      <pre className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap min-h-[2em]">
        {loading ? 'Running...' : output}
      </pre>
      {!loading && output && (
  <div className="flex gap-2 mt-2">
    <button
      onClick={() => navigator.clipboard.writeText(output)}
      className="bg-blue-600 px-3 py-1 rounded text-sm text-white hover:bg-blue-700"
    >
      Copy to Clipboard
    </button>
    <a
      href="https://tio.run/#whitespace"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 px-3 py-1 rounded text-sm text-white hover:bg-blue-700"
    >
      Try it out!
    </a>
  </div>
)}
    </div>
  );
}
