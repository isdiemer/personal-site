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
      const res = await fetch('http://localhost:3001/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      });

      const data = await res.json();
      setOutput(data.output);
    } catch (err) {
      setOutput('Error: Could not connect to backend.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Run C++ Binary</h1>
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
  <button
    onClick={() => navigator.clipboard.writeText(output)}
    className="mt-2 bg-blue-600 px-3 py-1 rounded text-sm hover:bg-gray-300"
  >
    Copy to Clipboard
  </button>
)}
    </div>
  );
}
