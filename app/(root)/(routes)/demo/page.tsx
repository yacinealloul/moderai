"use client";
import React, { useState, useEffect } from 'react';

export default function Demo() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [requestsMade, setRequestsMade] = useState(0);
  const maxRequests = 10;

  useEffect(() => {
    const todayRequests = localStorage.getItem('todayRequests');

    if (todayRequests) {
      setRequestsMade(parseInt(todayRequests));
    }
  }, []);

  const handleTest = () => {
    if (requestsMade >= maxRequests) {
      setResponse('Maximum number of requests reached for today.');
      return;
    }
    
    setResponse(`Your simulated response based on: ${input}`);
    localStorage.setItem('todayRequests', (requestsMade + 1).toString());
    setRequestsMade(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 antialiased py-20">
      <div className="container mx-auto px-4">
        {/* Playground Section */}
        <section className="py-20">
          <div className="flex">
            <div className="w-1/2 pr-8">
              <h2 className="text-5xl font-extrabold mb-6">Playground</h2>
              <textarea 
                className="w-full p-4 rounded-lg bg-white shadow-lg transition-all duration-500 hover:shadow-xl resize-none" 
                rows={9} 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                disabled={requestsMade >= maxRequests}
              />
              <button 
                className="mt-4 p-3 rounded-lg text-white bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-700 hover:to-blue-500 w-full"
                onClick={handleTest}
              >
                Test
              </button>
              <p className="mt-4 text-red-500">{requestsMade >= maxRequests && 'You have reached the daily limit of 10 requests.'}</p>
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-5xl font-extrabold mb-6">Response</h2>
              <div className="p-4 rounded-lg bg-blue-50 text-gray-900 h-full border-l-4 border-blue-900">
                <code>
                  {response || `{
    "response": "Your JSON will appear here."
  }`}
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
